import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #777;
  nav {
    height: 70px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0 15px 0 15px;
  }
  ul {
    text-decoration: none;
    display: flex;
    gap: 20px;
    font-size: 20px;
    align-items: center;
  }
  li {
    list-style: none;
    text-decoration: none;

  }
  li > a {
    text-decoration: none;
    text-decoration: none;
    color: #fff;
  }
`;
