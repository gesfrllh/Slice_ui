import styled from "styled-components";

export const MainContainer = styled.div`
  width: 85%;
  float: right;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  height: 170px;
`;

export const MainHeader = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MainCard = styled.div`
  width: 280px;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-family: "Archivo", sans-serif;
  background: #fff;
  box-shadow: 0px 3px 8px rgba(9, 30, 66, 0.16),
    0px 0px 1px rgba(9, 30, 66, 0.31);
  border-radius: 5px;
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const CardContent = styled.div`
  display: flex;
  padding: 5px 10px 0 10px;
  justify-content: space-between;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  color: #475569;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const CardPersen = styled.p`
  font-size: 14px;
  color: #4ade80;
`;

export const CardSell = styled.p`
  font-size: 32px;
  color: #1e293b;
  font-weight: 600;
`;

export const ButtonBg = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: -10px;
  background: #4ade80;
  border-radius: 5px;
  margin-top: 5px;
`;
export const CardButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  color: #fff;
  background: #4ade80;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  &:hover {
    background: #36b063;
    transition: 0.3s ease-in-out;
  }
`;
