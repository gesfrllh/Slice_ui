import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SideLogo1,
  SideDocWrap,
  Wrap,
  SideDesc,
  Circle,
  SideNotif,
  DropdownContainer,
  DropdownWrapper,
  Menu,
  SideNotifM,
  SideNotif1
} from "./SidebarElement";
import { RxCalendar, RxDashboard } from "react-icons/rx";
import { BiWindows } from "react-icons/bi";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { RiEmotionLaughLine, RiEmotionNormalLine } from "react-icons/ri";
import {SiGooglemaps} from 'react-icons/si'

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [change, setChange] = useState(true);
  const [changeOne, setChangeOne] = useState(true);
  const oneClick1 = () => {
    setClick(!click);
  };

  const oneClick2 = () => {
    setChange(!change);
  };

  const oneClick3 = () => {
    setChangeOne(!changeOne);
  };

  const list = [" Finance", "Sass", "Finance", "Finance", "Sass"];

  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SideLogo1>Main</SideLogo1>
          <SideDocWrap>
            <RxDashboard />
            <SideDesc>Dashboard</SideDesc>
            <SideNotif1>5</SideNotif1>
          </SideDocWrap>
          <SideDocWrap>
            <RxCalendar />
            <SideDesc>Calender</SideDesc>
          </SideDocWrap>
          <SideLogo1>Components</SideLogo1>
          <SideDocWrap onClick={oneClick1}>
            <BiWindows />
            <SideDesc>
              Menu 1
              {click ? (
                <FaAngleUp style={{ fontSize: "12px", marginLeft: "25px" }} />
              ) : (
                <FaAngleRight
                  style={{ fontSize: "12px", marginLeft: "25px" }}
                />
              )}
            </SideDesc>
          </SideDocWrap>
          <SideDocWrap onClick={oneClick2}>
            <Wrap>
              {change ? <RiEmotionLaughLine /> : <RiEmotionNormalLine />}
              <SideDesc>
                Menu 2
                {change ? (
                  <FaAngleUp style={{ fontSize: "12px", marginLeft: "25px" }} />
                ) : (
                  <FaAngleRight
                    style={{ fontSize: "12px", marginLeft: "25px" }}
                  />
                )}
              </SideDesc>
              {change && (
                <DropdownContainer>
                  <DropdownWrapper>
                    {list.map((menu) => (
                      <Menu key={menu}>
                        <Circle>●</Circle>
                        {menu}
                      </Menu>
                    ))}
                    <SideNotif>2</SideNotif>
                  </DropdownWrapper>
                </DropdownContainer>
              )}
            </Wrap>
          </SideDocWrap>
          <SideDocWrap onClick={oneClick3}>
            <SiGooglemaps style={{paddingBottom: '1px'}}/>
            <SideDesc>Maps</SideDesc>
            <SideNotifM>3</SideNotifM>
          </SideDocWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
