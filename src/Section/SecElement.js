import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 85%;
  float: right;
  `;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  padding: 15px 25px;
`;

export const SectionCard = styled.div`
justify-content: space-around;
  display: flex;
  flex-direction: column;
  width: 50%;
  font-family: "Archivo";
  background: #fff;
  box-shadow: 0px 3px 8px rgba(9, 30, 66, 0.16),
  0px 0px 1px rgba(9, 30, 66, 0.31);
  border-radius: 5px;
`

export const SectionHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 0.5px solid grey;
`;

export const Tittle = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export const Setting = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: -10px;
`;

export const Text = styled.p`
  color: grey;
`;

export const SectionMain = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgMain = styled.div`
  padding: 5px 5px 5px 15px;
  border-bottom: 0.5px solid grey;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 5px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-top: 5px;
  border-bottom: 0.5px solid grey;
  display: flex;
  justify-content: space-between;
`;

export const TitWrapper = styled.div`
  display: grid;
  grid-template-columns: 180px 80px 60px 130px 55px;
  margin-left: 15px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  margin-left: 15px;
  flex-direction: column;
`;

export const TitleWrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const TitleWrapperLeft = styled.div`
  display: flex;
  margin-left: 15px;
  flex:1 ;
  flex-direction: column;
`;

export const TitleWrapperLeftO = styled.div`
  display: flex;
  margin-left: 15px;
  flex:3;
  flex-direction: column;
`;

export const TitleWrapperRight = styled.div`
  display: flex;
  margin-left: 25px;
  flex-direction: column;
  flex:0.5 ;
`;

export const TitleWrapperRightO = styled.div`
  display: flex;
  margin-left: 25px;
  flex-direction: column;
  flex:1 ;
`;
export const DescWrapper = styled.div`
  display: grid;
  grid-template-columns: 180px 70px 70px 130px 55px;
  padding-top: 5px;
`;

export const SecSide = styled.div`
  display: flex;
  height: 55px;
  margin-top: -15px;
  justify-content: space-between;
  width: 110px;
  align-items: center;
`;

export const SecPrice = styled.p`
  font-size: 14px;
`;

export const SecPersen = styled.p`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const PersenTitle = styled.p`
  font-size: 12px;
`;

export const MainDesc = styled.p`
  font-size: 14px;
`;

export const MainDescNot = styled.p`
  font-size: 14px;
  width: 70px;
  margin:0 10px ;
`;

export const MainDescSellCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f87171;
  width: 70px;
  border-radius: 4px;
  height: 15px;
  margin-bottom: 1px;
`;

export const MainDescSell = styled.p`
  color: #fff;
  font-size: 9px;
`;

export const DateDesc = styled.p`
  font-size: 12px;
`;

export const Sectionfooter = styled.div`
  display: flex;
  padding: 15px 0;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.p`
  margin-left: 10px;
  font-size: 14px;
  color: grey;
`;

export const FooterSelect = styled.p`
  display: flex;
  color: grey;
  align-items: center;
  padding: 5px;
  font-size: 14px;
`;

export const SpanText = styled.span`
  width: 25px;
  height: 25px;
  padding-left: 9px;
  padding-top: 5px;
  background: #3b82f6;
  color: #fff;
  border-radius: 5px;
`;

export const SpanNumber = styled.p`
  padding: 0 7px;
`;
