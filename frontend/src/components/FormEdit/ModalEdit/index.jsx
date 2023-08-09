// packages
import { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';

// components
import FormEdit from '..';

// styles
import { CloseButton, Icon } from './styled';

// '#root' é o elemento raiz da sua aplicação
Modal.setAppElement('#root');

const ModalEdit = ({ children, item, onChildren, setCustomers }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Icon onClick={handleOpenModal}>
        {onChildren ? children
        : (
          <>
            <FaUserEdit cursor='pointer' color="#021abb" size={25}/>
            Editar
          </>
        )}
      </Icon>
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
            maxWidth: '700px',
            maxHeight: '500px',
            margin: '0 auto',
          },
        }}
      >
        <CloseButton onClick={handleCloseModal}>{<GrClose />}</CloseButton>
        <FormEdit item={item} handleCloseModal={handleCloseModal} setCustomers={setCustomers}/>
      </Modal>
    </>
  );
};

export default ModalEdit;
