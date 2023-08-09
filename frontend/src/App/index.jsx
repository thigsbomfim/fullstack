// packages
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// styles
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from '../styles/Global';
import { Container, ContainerSearch, Search, SearchIcon, Title } from './styled';

// components
import { FaSearch } from 'react-icons/fa';
import { getCustomer } from '../axios/requests/getCustomer';
import Card from '../components/Card';
import ModalCreate from '../components/FormCreate/Modal';

function App() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInput = useRef();

  // Atualiza os clientes
  useEffect(() => {
    getCustomer(setCustomers);
  }, [])

  // pega o evento do input de pesquisa e passa para o Card
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Da foco no input ao clicar no icone search
  const handleSearchIconClick = () => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  };

  return (
    <>
      <Container>
        <Title>CLIENTES</Title>
        <ContainerSearch>
          <Search
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearchChange}
            ref={searchInput}
          />
          <SearchIcon onClick={handleSearchIconClick}>
            <FaSearch />
          </SearchIcon>
        </ContainerSearch>
        <ModalCreate setCustomers={setCustomers}/>
        <Card setCustomers={setCustomers} customers={customers} searchTerm={searchTerm}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  )
}

export default App;
