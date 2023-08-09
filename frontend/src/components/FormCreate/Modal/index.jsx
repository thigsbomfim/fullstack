// packages
import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

// components
import Form from '..';

// styles
import { CloseButton, Title } from './styled';

// '#root' é o elemento raiz da aplicação
Modal.setAppElement('#root');

const ModalCreate = ({ setCustomers }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Title onClick={handleOpenModal} >
        NOVO CLIENTE
        <span>
          <FaUserPlus size={30} color='green'/>
        </span>
      </Title>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Formulário"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            justifyContent: 'start',
            maxWidth: '350px',
            maxHeight: '350px',
            margin: '0 auto',
          },
        }}
      >
        <CloseButton onClick={handleCloseModal}>{<GrClose />}</CloseButton>
        <Form closeModal={handleCloseModal} setCustomers={setCustomers}/>
      </Modal>
    </>
  );
};

ModalCreate.propTypes = {
  setCustomers: PropTypes.func,
}

export default ModalCreate;
