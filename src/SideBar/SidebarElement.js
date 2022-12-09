import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 15%;
  height: 100vh;
  position:fixed ;
  display: flex;
  justify-content: center;
  background: #fff;
`;

export const SidebarWrapper = styled.div`
  width: 80%;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  font-family: "Archivo", sans-serif;
`;
export const SideLogo1 = styled.p`
  font-size: 16px;
  padding: 15px 0;
  margin-left: 15px;
  font-weight: 600;
`;

export const SideNotif1 = styled.p`
  left: 90px;
  position: relative;
  font-size: 14px;
  width: 20px;
  border-radius:3px;
  height: 16px;
  background: #4ade80;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

export const SideDocWrap = styled.div`
  padding: 10px 0;
  cursor: pointer;
  display: grid;
  grid-template-columns: 0.4fr 1fr 1fr;
  width: 100%;
  padding-left: 20px;

  &:hover {
    background: #eff6ff;
    color: #3b82f6;
    transition: 0.3s ease-in-out;
  }
`;
export const Wrap = styled.div`
  display: flex;
`;

export const SideDesc = styled.p`
  font-weight: 100;
  font-size: 12px;
  position: absolute;
  left: 70px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  top: 20px;
  right: 40px;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 180px;
  margin: 6px 0;
  padding-left: 0;
  background: #fff;
`;

export const Menu = styled.p`
  font-size: 12px;
  padding: 10px;
  margin-left: 25px;
  width: 160px;

  &:hover {
    background: #eff6ff;
    color: #2e2e2e;
    transition: 0.3s ease-in-out;
  }
`;

export const SideNotif = styled.p`
  position: relative;
  bottom: 123px;
  font-size: 10px;
  width: 14px;
  display: flex;
  border-radius: 2px;
  color: #fff;
  justify-content: center;
  align-items: center;
  height: 16px;
  left: 150px;
  background: #4ade80;
`;

export const Circle = styled.span`
  width: 30px;
  height: 30px;
  padding-right: 10px;
`;

export const SideNotifM = styled.p`
  position: relative;
  font-size: 12px;
  line-height: 16px;
  width: 30px;
  display: flex;
  border-radius: 2px;
  color: #fff;
  justify-content: center;
  align-items: center;
  height: 16px;
  left: 70px;
  background: #f87171;
`;
