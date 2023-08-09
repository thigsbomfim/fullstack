// packages
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

// styles
import {
    Button,
    ContainerButton,
    FormContainer,
    Icon,
    Input,
    InputArea,
    InputImage,
    Label,
    LabelImage,
    Option,
    Select,
    Span,
    Title
} from './styled';

// functions
import { getNascFormated } from '../../functions/formatNascimento';
import phoneMask from '../../functions/phoneMask';
import { getCustomer } from '../../axios/requests/getCustomer';
import { FaUserTimes } from 'react-icons/fa';

const FormEdition = ({ item, handleCloseModal, setCustomers }) => {
  const [maskedTelefone, setMaskedTelefone] = useState('');
  const [foto, setFoto] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (item) {
        const {
          nome,
          data_nascimento,
          genero,
          email,
          endereco,
          numero_telefone
        } = ref.current;

        nome.value = item.nome;
        data_nascimento.value = getNascFormated(item.data_nascimento);
        genero.value = item.genero;
        email.value = item.email;
        endereco.value = item.endereco;
        numero_telefone.value = item.numero_telefone;
        setMaskedTelefone(phoneMask(item.numero_telefone));
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {
        nome,
        data_nascimento,
        genero,
        email,
        endereco,
        numero_telefone,
        file
      } = ref.current;
      if (
          !nome.value ||
          !data_nascimento.value ||
          !genero.value ||
          !email.value ||
          !endereco.value ||
          !numero_telefone.value
      ) {
          return toast.warn("Preencha todos os campos!");
      }


      const response = await axios.put(`http://localhost:3000/${item.ID}`, {
        nome: nome.value,
        data_nascimento: data_nascimento.value,
        genero: genero.value,
        email: email.value,
        endereco: endereco.value,
        numero_telefone: numero_telefone.value,
      });

      if(file.files[0]) {
        const formData = new FormData();
        formData.append('file', file.files[0]);

        await axios.post(`http://localhost:3000/image/${item.ID}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      toast.success(response.data.msg);
      getCustomer(setCustomers);
      handleCloseModal();
    } catch (error) {
        toast.error(error);
    }
  };
  const handleChange = async (e) => {
    const foto = e.target.files[0];
    const fotoURL = URL.createObjectURL(foto)
    setFoto(fotoURL)
  };

  const handleChangeTelefone = (event) => {
    const value = event.target.value;
    setMaskedTelefone(phoneMask(value));
  };

  const handleDelete = async (id) => {
    const confirme = confirm("Tem certeza que deseja excluir esse cliente?");

    if(confirme) {
        await axios
        .delete(`http://localhost:3000/${id}`)
        .then(({ data }) => {
          toast.success(data.msg);
          handleCloseModal();
          getCustomer(setCustomers);
        })
        .catch(({ data }) => toast.error(data));
    }
    return;
  }

  return (
    <>
      <Title>EDITAR CLIENTE</Title>
      <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
          <LabelImage htmlFor="file">
            {foto ? <img style={{ width: '200px', height:'200px' }} src={foto} alt="Foto" />
            : <img style={{ width: '200px', height:'200px' }} src={`http://localhost:3000/profile/${item.ID}`} alt="Foto" />}
            <InputImage style={{ display: 'none' }} type="file" name="file" id="file" onChange={handleChange}/>
          </LabelImage>
        </InputArea>
        <InputArea>
          <Label>Nome</Label>
          <Input name="nome" placeholder='Digite seu nome'/>
        </InputArea>
        <InputArea>
          <Label>Data de nascimento</Label>
          <Input name="data_nascimento" type='date'/>
        </InputArea>
        <InputArea>
          <Label>Genero</Label>
          <Select
            name="genero"
          >
            <Option value="default" disabled>
                Selecione o genero
            </Option>
            <Option value="Masculino">Masculino</Option>
            <Option value="Feminino">Feminino</Option>
            <Option value="Outro">Outro</Option>
          </Select>
        </InputArea>
        <InputArea>
          <Label>E-mail</Label>
          <Input name="email" type="email" placeholder='Digite seu email'/>
        </InputArea>
        <InputArea>
          <Label>Endereço</Label>
          <Input name="endereco" type="text" placeholder='Digite seu endereço'/>
        </InputArea>
        <InputArea>
        <Label>Telefone</Label>
        <Input
          name="numero_telefone"
          value={maskedTelefone} // Use o estado intermediário da máscara
          onChange={handleChangeTelefone}
          placeholder="Digite seu telefone"
        />
        </InputArea>
        <ContainerButton>
          <Button type="submit">SALVAR</Button>
          <Icon>
            <Span color="#c20202" onClick={() => handleDelete(item.ID)}>
              <FaUserTimes cursor="pointer" size={25} color="#c20202"/>
            </Span>
          </Icon>
        </ContainerButton>
      </FormContainer>
    </>
  );
};

export default FormEdition;
