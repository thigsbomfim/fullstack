import styled from "styled-components";

export const SearchIcon = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  position: absolute;
  margin: 1px 0 0 181px;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    color: #abaaaa;
  }
`;

export const Search = styled.input`
  width: 200px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;

  &:focus-within + ${SearchIcon} {
    display: none;
  }
`

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
`

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 5px;
  color: #4e52b4;
`;
