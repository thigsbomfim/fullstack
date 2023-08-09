import { styled } from "styled-components";

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


export const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
