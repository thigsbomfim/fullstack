import { Link } from 'react-router-dom';
import { Container } from './Styled';

export const Nav = () => {
  return (
    <Container>
      <nav>
        <h1>LOGO</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/sobre">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
