import styled from "styled-components";

export const ReportContainer = styled.div`
  width: 85%;
  height: 680px;
  padding: 25px;
  float: right;
`;
export const ReportWrapper = styled.div`
  width: 100%;
  height: 630px;
  font-family: "Archivo";
  background: #fff;
  box-shadow: 0px 3px 8px rgba(9, 30, 66, 0.16),
    0px 0px 1px rgba(9, 30, 66, 0.31);
  border-radius: 5px;
`;

export const Active = styled.div`
  margin-right: -5px;
  background: #eff6ff;
  width: 45px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #3b82f6;
`;

export const ReportHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const HeaderTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const HeaderHours = styled.p`
  background: #eff6ff;
  color: #2563eb;
  width: 40px;
  height: 25px;
  font-size: 14px;
  padding: 5px;
`;

export const ReportMain = styled.div`
  display: flex;
`;

export const ReportMainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: #eff6ff;
  border-top: 1px solid #94a3b8;
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const ReportTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
`;

export const MainDescContainer = styled.div`
  display: flex;
`;

export const MainDescWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const ArrowWrap = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-around;
  margin-left: -20px;
`;

export const ReportDesc = styled.p`
  font-size: 14px;
`;

export const Sectionfooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
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
