import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { Button, ContainerButton, FormContainer } from "./styled"
import PropTypes from 'prop-types';
import phoneMask from "../../../functions/phoneMask";
import submit from "../../../services/FormCreate/handleSubmit";

const Form = ({ closeModal, setCustomers }) => {
  const totalSteps = 4; // Total de etapas do formulário (incluindo a imagem)
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    data_nascimento: '',
    genero: '',
    email: '',
    endereco: '',
    numero_telefone: '',
    file: null,
  });

  const ref = useRef();
  const [phone, setPhone] = useState('');
  const [foto, setFoto] = useState(null);

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (currentStep === totalSteps) {
      // Enviar formulário completo
      return submit(formData, setCustomers, closeModal);
    } else {

      // Avançar para a próxima etapa
      handleNextStep();
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const updatedFormData = { ...formData };

    if (files) {
      updatedFormData[name] = files[0];
      setFoto(URL.createObjectURL(files[0])); // Atualizar o estado da foto
    } else {
      updatedFormData[name] = value;
    }

    setFormData(updatedFormData);
  };

  // Atualizar o número de telefone no objeto formData
  const handlePhoneChange = (e) => {
    const phoneValue = phoneMask(e.target.value);
    setPhone(phoneValue); // Atualizar o estado phone

    const updatedFormData = { ...formData };
    updatedFormData.numero_telefone = phoneValue;
    setFormData(updatedFormData);
  };


  return (
    <FormContainer ref={ref} onSubmit={handleFormSubmit}>
      {currentStep === 1 && (
        <>
          <Input label="Nome" name="nome" type="text" value={formData.nome} onChange={handleInputChange} />
          <Input label="Data de nascimento" name="data_nascimento" type="date" value={formData.data_nascimento} onChange={handleInputChange} />
        </>
      )}
      {currentStep === 2 && (
        <>
          <Select label="Gênero" name="genero" value={formData.genero} onChange={handleInputChange} />
          <Input label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
        </>
      )}
        {currentStep === 3 && (
        <>
          <Input
            label="Endereço"
            name="endereco"
            type="text"
            value={formData.endereco}
            onChange={handleInputChange}
          />
          <Input
            label="Telefone"
            name="numero_telefone"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
          />
        </>
      )}
      {currentStep === 4 && (
        <>
          <Input
            label={foto ? (
              <img style={{ width: '180px', height: '180px' }} src={foto} alt="Foto" />
            ) : 'Selecionar'}
            name="file"
            type="file"
            onChange={handleInputChange}
          />
        </>
      )}
      <ContainerButton>
        <Button type="button" display={currentStep === 1 ? "none" : ''} onClick={handlePrevStep}>Voltar</Button>
        <Button type="submit">Avançar</Button>
      </ContainerButton>
    </FormContainer>
  )
}

Form.propTypes = {
  closeModal: PropTypes.func,
  setCustomers: PropTypes.func,
}

export default Form;
