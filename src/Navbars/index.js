import React from "react";
import {
  NavContainer,
  NavWrapper,
  NavBar,
  NavLeft,
  NavLogo,
  Input,
  NavInput,
  NavRight,
  NavLogin
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";
import {MdOutlineNotificationAdd, MdOutlineSearch, MdSettings} from 'react-icons/md'
import {TiMessages} from 'react-icons/ti'

const Navbar = () => {
  return (
    <>
    
      <NavContainer>
        <NavWrapper>
          <NavLeft>
            <NavLogo>FE-Dev</NavLogo>
            <NavBar>
              <FaBars style={{color: '#3B82F6', marginTop: '8px'}}/>
            </NavBar>
            <Input>
              <NavInput type='text' placeholder='Search'/>
              <MdOutlineSearch style={{ marginRight:'10px'}}/>
            </Input>
          </NavLeft>
          <NavRight>
            <MdOutlineNotificationAdd style={{color: '#3B82F6', fontSize: '20px'}}/>
            <TiMessages style={{color: '#3B82F6', fontSize: '20px'}}/>
            <MdSettings style={{color: '#3B82F6', fontSize: '20px'}}/>
            <NavLogin>
              MK
            </NavLogin>
          </NavRight>
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default Navbar;
