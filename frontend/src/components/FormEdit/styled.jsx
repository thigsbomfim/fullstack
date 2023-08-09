import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 10px 50px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 80%;
    margin-top: 20px;
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

export const Title = styled.h2`
    text-align: center;
    @media (max-width: 330px) {
        font-size: 20px;
    }
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`

`;
export const LabelImage = styled.label`
  width: 200px;
  height: 200px;
  display: flex;
  background: #eee;
  margin: 0 100px 30px 100px;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

export const Span = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({color}) => color};

`


export const Input = styled.input`
    width: 270px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    font-weight: bold;
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
export const InputImage = styled.input`
    width: 270px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    font-weight: bold;
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

export const Select = styled.select`
    width: 292px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 42px;
    font-weight: bold;

    @media (max-width: 800px) {
        width: 271.6px;
    }
    @media (max-width: 740px) {
        width: 251.6px;
    }
    @media (max-width: 660px) {
        width: 221.6px;
    }
    @media (max-width: 600px) {
        width: 201.6px;
    }
    @media (max-width: 560px) {
        width: 181.6px;
    }
    @media (max-width: 520px) {
        height: 37px;
    }
    @media (max-width: 330px) {
        height: 34px;
        width: 161.6px;
    }
`;

export const Option = styled.option`
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  margin-top: 20px;
  width: 251.6px;

  @media (max-width: 550px) {
      width: 230px;
  }
  @media (max-width: 400px) {
      width: 190px;
  }
  @media (max-width: 520px) {
      height: 37px;
      width: 181.6px;
      margin-top: 15px;
  }
  @media (max-width: 330px) {
      height: 34px;
      width: 161.6px;
      margin-top: 10px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
