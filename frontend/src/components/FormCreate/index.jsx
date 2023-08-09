import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Title } from './styled';
import submit from '../../services/FormCreate/handleSubmit';
import Form from './Form';


const FormCreate = ({ closeModal, setCustomers }) => {

  return (
    <>
      <Title>NOVO CLIENTE</Title>
      <Form setCustomers={setCustomers} closeModal={closeModal} />
    </>
  )
}

FormCreate.propTypes = {
  closeModal: PropTypes.func,
  setCustomers: PropTypes.func,
}

export default FormCreate
