import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  gap: 30px;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 50px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 80%;

  @media (max-width: 700px) {
      gap: 10px 30px;
  }
  @media (max-width: 680px) {
      gap: 10px;
  }
  @media (max-width: 520px) {
      margin-top: 0px;
      gap: 5px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  margin-top: 20px;
  width: 100px;

  display: ${({ display }) => display };

`;
