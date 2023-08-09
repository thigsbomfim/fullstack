import { toast } from 'react-toastify';
import { createCustomer } from '../../axios/requests/createCustomer';
import { uploadImage } from '../../axios/requests/uploadImage';
import { handleSuccess } from './handleSuccess';


const submit = async (formData, setCustomers, closeModal) => {
  try {
    const {
      nome,
      data_nascimento,
      genero,
      email,
      endereco,
      numero_telefone,
      file,
    } = formData;

    if (
      !nome ||
      !data_nascimento ||
      !genero ||
      !email ||
      !numero_telefone
    ) {
      return toast.warn('Preencha todos os campos!');
    }

    const response = await createCustomer({
      nome,
      data_nascimento,
      genero,
      email,
      endereco,
      numero_telefone,
    });

    if (file) {
      await uploadImage(response.data.id, file);
    } else {
      await uploadImage(response.data.id);
    }

    // chama a função que atualiza os clientes e fecha o modal
    handleSuccess(setCustomers, closeModal);
  } catch (err) {
    toast.error(err);
  }
};

export default submit;
