import { styled } from "styled-components";

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

`;

export const Input = styled.input`
  width: 270px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  font-weight: 500;
  display: ${({ display }) => display };

  @media (max-width: 800px) {
      width: 250px;
  }
  @media (max-width: 740px) {
      width: 230px;
  }
  @media (max-width: 660px) {
      width: 200px;
  }
  @media (max-width: 600px) {
      width: 180px;
  }
  @media (max-width: 560px) {
      width: 160px;

  }
  @media (max-width: 520px) {
      height: 35px;
  }
  @media (max-width: 330px) {
      height: 34px;
      width: 140px;
  }
`;

export const LabelImage = styled.label`
  width: 180px;
  display: flex;
  height: 180px;
  background: #eee;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
