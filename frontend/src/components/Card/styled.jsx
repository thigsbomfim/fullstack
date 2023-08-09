import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  max-width: 250px;
  flex-direction: column;
  width: 100%;
  list-style: none;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  gap: 15px;
`;

export const ContainerText = styled.div`
  font-size: 27px;
  padding: 10px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  font-size: 27px;
  padding: 10px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Text = styled.p`
  max-width: 100%;
  overflow-wrap: break-word;
  text-align: center;
`;

