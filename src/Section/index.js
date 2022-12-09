import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  SectionCard,
  SectionHeader,
  Tittle,
  Setting,
  ImgWrap,
  SectionMain,
  ImgMain,
  MainDesc,
  MainDescSell,
  MainDescSellCon,
  Text,
  DateDesc,
  Img,
  MainWrapper,
  Sectionfooter,
  FooterText,
  FooterSelect,
  SpanText,
  SpanNumber,
  SecSide,
  SecPersen,
  SecPrice,
  TitleWrapperLeft,
  TitleWrapperLeftO,
  TitleWrapperCenter,
  TitleWrapperRight,
  TitleWrapperRightO,
  MainDescNot,
  PersenTitle,
} from "./SecElement";
import img1 from "../Images/poto1.jpg";
import img2 from "../Images/poto2.jpg";
import img3 from "../Images/poto3.jpg";
import img4 from "../Images/poto4.jpg";
import img5 from "../Images/poto5.jpg";
import img6 from "../Images/poto6.jpg";
import img7 from "../Images/poto7.jpg";
import img8 from "../Images/poto8.jpg";
import img9 from "../Images/poto9.jpg";
import img10 from "../Images/poto10.jpg";

import Select from "react-select";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlinePoll,
} from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const Section = () => {
  const options = [
    { value: "Day", label: "Today" },
    { value: "Week", label: "1 Month Ago" },
    { value: "Years", label: "1 Years Ago" },
  ];

  const select = [
    { value: "report", label: "Report" },
    { value: "daily", label: "Daily Report" },
    { value: "weeks", label: "Weeks Report" },
  ];

  const text = ["2", "3", "4", "...", "10"];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#EFF6FF",
      border: "none",
      color: "gray",
      fontSize: "14px",
    }),
  };

  const stylesColor = {
    control: (styles) => ({
      ...styles,
      border: "none",
      outline: "none",
    }),
  };

  return (
    <>
      <SectionContainer>
        <SectionWrapper>
          <SectionCard>
            <SectionHeader>
              <Tittle>Best Sellings Products</Tittle>
              <Setting>
                <Text>Sort By :</Text>
                <Select
                  options={options}
                  defaultValue={options[0]}
                  styles={stylesColor}
                />
                <BsThreeDotsVertical />
              </Setting>
            </SectionHeader>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img1} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeftO>
                  <MainDesc>Branded T-Shirts</MainDesc>
                  <DateDesc>24 Apr 2021</DateDesc>
                </TitleWrapperLeftO>
                <TitleWrapperCenter>
                  <MainDesc>$29,00</MainDesc>
                  <DateDesc>Price</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDesc>62</MainDesc>
                  <DateDesc>Orders</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDesc>510</MainDesc>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperRightO>
                  <MainDesc>$1,798</MainDesc>
                  <DateDesc>Amoun</DateDesc>
                </TitleWrapperRightO>
              </MainWrapper>
            </SectionMain>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img2} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeftO>
                  <MainDesc>Bentwood Chair</MainDesc>
                  <DateDesc>19 Mar 2021</DateDesc>
                </TitleWrapperLeftO>
                <TitleWrapperCenter>
                  <MainDesc>$85.20</MainDesc>
                  <DateDesc>Price</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDesc>35</MainDesc>
                  <DateDesc>Orders</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDescSellCon>
                    <MainDescSell>Out of stock</MainDescSell>
                  </MainDescSellCon>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperRightO>
                  <MainDesc>$2,982</MainDesc>
                  <DateDesc>Amoun</DateDesc>
                </TitleWrapperRightO>
              </MainWrapper>
            </SectionMain>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img3} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeftO>
                  <MainDesc>Borosil Paper Cup</MainDesc>
                  <DateDesc>01 Mar 2021</DateDesc>
                </TitleWrapperLeftO>
                <TitleWrapperCenter>
                  <MainDesc>$14,00</MainDesc>
                  <DateDesc>Price</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDesc>80</MainDesc>
                  <DateDesc>Orders</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDesc>749</MainDesc>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperRightO>
                  <MainDesc>$1,120</MainDesc>
                  <DateDesc>Amoun</DateDesc>
                </TitleWrapperRightO>
              </MainWrapper>
            </SectionMain>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img4} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeftO>
                  <MainDesc>One Seater Sofa</MainDesc>
                  <DateDesc>11 Feb 2021</DateDesc>
                </TitleWrapperLeftO>
                <TitleWrapperCenter>
                  <MainDesc>$127.50</MainDesc>
                  <DateDesc>Price</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDesc>56</MainDesc>
                  <DateDesc>Orders</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDescSellCon>
                    <MainDescSell>Out of stock</MainDescSell>
                  </MainDescSellCon>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperRightO>
                  <MainDesc>$7,140</MainDesc>
                  <DateDesc>Amoun</DateDesc>
                </TitleWrapperRightO>
              </MainWrapper>
            </SectionMain>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img5} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeftO>
                  <MainDesc>Stillbird Helmet</MainDesc>
                  <DateDesc>17 Jan 2021</DateDesc>
                </TitleWrapperLeftO>
                <TitleWrapperCenter>
                  <MainDesc>$54</MainDesc>
                  <DateDesc>Price</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDesc>74</MainDesc>
                  <DateDesc>Orders</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperCenter>
                  <MainDesc>805</MainDesc>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperCenter>
                <TitleWrapperRightO>
                  <MainDesc>$3,996</MainDesc>
                  <DateDesc>Amoun</DateDesc>
                </TitleWrapperRightO>
              </MainWrapper>
            </SectionMain>
            <Sectionfooter>
              <FooterText>Showing 5 of 25 results</FooterText>
              <FooterSelect>
                <MdKeyboardArrowLeft />
                <SpanText>1</SpanText>
                {text.map((number) => (
                  <SpanNumber key={number}>{number}</SpanNumber>
                ))}
                <MdKeyboardArrowRight />
              </FooterSelect>
            </Sectionfooter>
          </SectionCard>
          <SectionCard>
            <SectionHeader>
              <Tittle>Top Sellers</Tittle>
              <Setting>
                <Select
                  options={select}
                  defaultValue={select[0]}
                  styles={colorStyles}
                />
                <BsThreeDotsVertical />
              </Setting>
            </SectionHeader>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img6} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeft>
                  <MainDesc>iTest Factory</MainDesc>
                  <DateDesc>Oliver Tyler</DateDesc>
                </TitleWrapperLeft>
                <MainDescNot>Branded T-Shirts</MainDescNot>
                <MainDescNot>Bags and Wallets</MainDescNot>
                <TitleWrapperRight>
                  <MainDesc>8547</MainDesc>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperRight>
                <SecSide>
                  <SecPrice>$541200</SecPrice>
                  <SecPersen>
                    <PersenTitle>32%</PersenTitle>
                    <MdOutlinePoll
                      style={{ fontSize: "18px", color: "#4ade80" }}
                    />
                  </SecPersen>
                </SecSide>
              </MainWrapper>
            </SectionMain>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img7} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeft>
                  <MainDesc>Digitech Galaxy</MainDesc>
                  <DateDesc>John Roberts</DateDesc>
                </TitleWrapperLeft>
                <MainDescNot>Branded T-Shirts</MainDescNot>
                <MainDescNot>Watches</MainDescNot>
                <TitleWrapperRight>
                  <MainDesc>895</MainDesc>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperRight>
                <SecSide>
                  <SecPrice>$75030</SecPrice>
                  <SecPersen>
                    <PersenTitle>79%</PersenTitle>
                    <MdOutlinePoll
                      style={{ fontSize: "18px", color: "#4ade80" }}
                    />
                  </SecPersen>
                </SecSide>
              </MainWrapper>
            </SectionMain>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img8} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeft>
                  <MainDesc>Nesta Technologies</MainDesc>
                  <DateDesc>Harley Fuller</DateDesc>
                </TitleWrapperLeft>
                <MainDescNot>Branded T-Shirts</MainDescNot>
                <MainDescNot>Bike Accessories</MainDescNot>
                <TitleWrapperRight>
                  <MainDesc>3470</MainDesc>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperRight>
                <SecSide>
                  <SecPrice>$45600</SecPrice>
                  <SecPersen>
                    <PersenTitle>90%</PersenTitle>
                    <MdOutlinePoll
                      style={{ fontSize: "18px", color: "#4ade80" }}
                    />
                  </SecPersen>
                </SecSide>
              </MainWrapper>
            </SectionMain>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img9} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeft>
                  <MainDesc>Zoetic Fashion</MainDesc>
                  <DateDesc>James Bowen</DateDesc>
                </TitleWrapperLeft>
                <MainDescNot>Branded T-Shirts</MainDescNot>
                <MainDescNot>Clothes</MainDescNot>
                <TitleWrapperRight>
                  <MainDesc>5488</MainDesc>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperRight>
                <SecSide>
                  <SecPrice>$29456</SecPrice>
                  <SecPersen>
                    <PersenTitle>40%</PersenTitle>
                    <MdOutlinePoll
                      style={{ fontSize: "18px", color: "#4ade80" }}
                    />
                  </SecPersen>
                </SecSide>
              </MainWrapper>
            </SectionMain>
            <SectionMain>
              <ImgWrap>
                <ImgMain>
                  <Img src={img10} alt="" />
                </ImgMain>
              </ImgWrap>
              <MainWrapper>
                <TitleWrapperLeft>
                  <MainDesc>Meta4Systems</MainDesc>
                  <DateDesc>Zoe Dennis</DateDesc>
                </TitleWrapperLeft>
                <MainDescNot>Branded T-Shirts</MainDescNot>
                <MainDescNot>Furniture</MainDescNot>
                <TitleWrapperRight>
                  <MainDesc>4100</MainDesc>
                  <DateDesc>Stock</DateDesc>
                </TitleWrapperRight>
                <SecSide>
                  <SecPrice>$11260</SecPrice>
                  <SecPersen>
                    <PersenTitle>57%</PersenTitle>
                    <MdOutlinePoll
                      style={{ fontSize: "18px", color: "#4ade80" }}
                    />
                  </SecPersen>
                </SecSide>
              </MainWrapper>
            </SectionMain>
            <Sectionfooter>
              <FooterText>Showing 5 of 25 results</FooterText>
              <FooterSelect>
                <MdKeyboardArrowLeft />
                <SpanText>1</SpanText>
                {text.map((number) => (
                  <SpanNumber key={number}>{number}</SpanNumber>
                ))}
                <MdKeyboardArrowRight />
              </FooterSelect>
            </Sectionfooter>
          </SectionCard>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Section;
