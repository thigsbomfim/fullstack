// packages
import PropTypes from 'prop-types';

// components
import ModalEdit from '../FormEdit/ModalEdit';

// styles
import {
  Container,
  ContainerModal,
  ContainerText,
  Content,
  Img,
  Text
} from './styled';

// functions
import filterCustomers from '../../functions/filterCustomers';

const Card = ({ customers, setCustomers, searchTerm }) => {

  const filteredCustomers = filterCustomers(searchTerm, customers);

  return (
    <Container>
        {filteredCustomers.map((item, Ids) => (
          <Content key={Ids}>
            <ContainerModal>
              <ModalEdit item={item} onChildren setCustomers={setCustomers}>
                <Img src={`http://localhost:3000/profile/${item.ID}`} alt="customer" />
              </ModalEdit>
            </ContainerModal>
            <ContainerText>
              <Text>{item.nome}</Text>
            </ContainerText>
          </Content>
        ))}
    </Container>
  );
};

Card.propTypes = {
  customers: PropTypes.array,
  setCustomers: PropTypes.func,
  searchTerm: PropTypes.string,
}

export default Card;
