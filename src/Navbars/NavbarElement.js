import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 70px;
  display: flex;
  position: fixed;
  width: 100%;
  z-index:99 ;
  `;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #93C5FD;
  width: 100%;
  background:#fff ;
  font-family: 'Jost', sans-serif;
`;

export const NavLeft = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 50px;
  align-items: center;
`;

export const NavLogo = styled.p`
    font-size: 40px;
    margin-right: 30px;
`;

export const NavBar = styled.div`
    border:2px solid #93C5FD;
    width: 40px;
    padding: 2px 10px 0;
    border-radius: 50%;
    height: 40px;
`;


export const Input = styled.div`
    display: flex;
    align-items: center;
    background: #EFF6FF;
    border-radius: 15px;
`;

export const NavInput = styled.input`
    border: none;
    background: none;
    outline: none;
    padding: 10px 0 10px 10px;

`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin-right: 50px;
`;

export const NavLogin = styled.p`
    padding: 10px;
    border-radius: 50%;
    background: #D9D9D9;
    color: #3B82F6;
    font-size: 12px;
`