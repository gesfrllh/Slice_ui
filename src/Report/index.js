import React from "react";
import {
  ReportContainer,
  ReportHeader,
  ReportWrapper,
  HeaderTitle,
  HeaderRight,
  HeaderHours,
  ReportMain,
  ReportMainWrapper,
  ReportTitle,
  ArrowWrap,
  MainDescContainer,
  MainDescWrapper,
  ReportDesc,
  Sectionfooter,
  FooterText,
  FooterSelect,
  Active,
  SpanText,
  SpanNumber,
} from "./reportElement";
import Select from "react-select";
import { HiArrowTrendingUp, HiArrowTrendingDown} from "react-icons/hi2";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Report = () => {
  const options = [
    { value: "Report", label: "GET REPORT" },
    { value: "Result", label: "GET RESULT" },
  ];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#EFF6FF",
      border: "none",
      color: "gray",
      fontSize: "14px",
    }),
  };

  const text = ["2", "3", "4", "...", "10"];

  return (
    <>
      <ReportContainer>
        <ReportWrapper>
          <ReportHeader>
            <HeaderTitle>My Currencies</HeaderTitle>
            <HeaderRight>
              <HeaderHours>24H</HeaderHours>
              <Select
                options={options}
                defaultValue={options[0]}
                styles={colorStyles}
              />
            </HeaderRight>
          </ReportHeader>
          <ReportMain>
            <ReportMainWrapper>
              <ReportTitle>Coin Name</ReportTitle>
              <ReportTitle>Price</ReportTitle>
              <ReportTitle>24h Change</ReportTitle>
              <ReportTitle>Total Balance</ReportTitle>
              <ReportTitle>Total Coin</ReportTitle>
              <ReportTitle>Actions</ReportTitle>
            </ReportMainWrapper>
          </ReportMain>
          <MainDescContainer>
            <MainDescWrapper style={{borderTop: '1px solid #94A3B8'}}>
              <ReportDesc>Order ID</ReportDesc>
              <ReportDesc>$48,568.025</ReportDesc>
              <ArrowWrap style={{color: '#16A34A'}}>
              <HiArrowTrendingUp />
              <ReportDesc>5.26</ReportDesc>
              </ArrowWrap>
              <ReportDesc>$53,914.025</ReportDesc>
              <ReportDesc>1.25634801</ReportDesc>
              <ReportDesc style={{color: '#3B82F6'}}>Trede</ReportDesc>
            </MainDescWrapper>
          </MainDescContainer>
          <MainDescContainer>
            <MainDescWrapper>
              <ReportDesc>Order ID</ReportDesc>
              <ReportDesc>$87,142.027</ReportDesc>
              <ArrowWrap style={{color: '#DC2626'}}>
              <HiArrowTrendingDown />
              <ReportDesc>3.07</ReportDesc>
              </ArrowWrap>
              <ReportDesc>$75,854.127</ReportDesc>
              <ReportDesc>2.85472161</ReportDesc>
              <ReportDesc style={{color: '#3B82F6'}}>Trede</ReportDesc>
            </MainDescWrapper>
          </MainDescContainer>
          <MainDescContainer>
            <MainDescWrapper>
              <ReportDesc>Order ID</ReportDesc>
              <ReportDesc>$33,847.961</ReportDesc>
              <ArrowWrap style={{color: '#16A34A'}}>
              <HiArrowTrendingUp />
              <ReportDesc>7.13</ReportDesc>
              </ArrowWrap>
              <ReportDesc>$44,152.185</ReportDesc>
              <ReportDesc>1.45612347</ReportDesc>
              <ReportDesc style={{color: '#3B82F6'}}>Trede</ReportDesc>
            </MainDescWrapper>
          </MainDescContainer>
          <MainDescContainer>
            <MainDescWrapper>
              <ReportDesc>Order ID</ReportDesc>
              <ReportDesc>$73,654.421</ReportDesc>
              <ArrowWrap style={{color: '#16A34A'}}>
              <HiArrowTrendingUp />
              <ReportDesc>0.97</ReportDesc>
              </ArrowWrap>
              <ReportDesc>$48,367.125</ReportDesc>
              <ReportDesc style={{marginRight: '-5px'}}>0.35734601</ReportDesc>
              <Active>
              <ReportDesc>Trede</ReportDesc>
              </Active>
            </MainDescWrapper>
          </MainDescContainer>
          <MainDescContainer>
            <MainDescWrapper>
              <ReportDesc>Order ID</ReportDesc>
              <ReportDesc>$66,742.077</ReportDesc>
              <ArrowWrap style={{color: '#DC2626'}}>
              <HiArrowTrendingDown />
              <ReportDesc>1.08</ReportDesc>
              </ArrowWrap>
              <ReportDesc>$53,487.083</ReportDesc>
              <ReportDesc>3.62912570</ReportDesc>
              <ReportDesc style={{color: '#3B82F6'}}>Trede</ReportDesc>
            </MainDescWrapper>
          </MainDescContainer>
          <MainDescContainer>
            <MainDescWrapper>
              <ReportDesc>Order ID</ReportDesc>
              <ReportDesc>$34,736.209</ReportDesc>
              <ArrowWrap style={{color: '#16A34A'}}>
              <HiArrowTrendingUp />
              <ReportDesc>4.52</ReportDesc>
              </ArrowWrap>
              <ReportDesc>$15,203.347</ReportDesc>
              <ReportDesc>1.85412740</ReportDesc>
              <ReportDesc style={{color: '#3B82F6'}}>Trede</ReportDesc>
            </MainDescWrapper>
          </MainDescContainer>
          <MainDescContainer>
            <MainDescWrapper>
              <ReportDesc>Order ID</ReportDesc>
              <ReportDesc>$56,357.313</ReportDesc>
              <ArrowWrap style={{color: '#DC2626'}}>
              <HiArrowTrendingDown />
              <ReportDesc>2.87</ReportDesc>
              </ArrowWrap>
              <ReportDesc>$61,843.173</ReportDesc>
              <ReportDesc>1.87732061</ReportDesc>
              <ReportDesc style={{color: '#3B82F6'}}>Trede</ReportDesc>
            </MainDescWrapper>
          </MainDescContainer>
          <MainDescContainer>
            <MainDescWrapper>
              <ReportDesc>Order ID</ReportDesc>
              <ReportDesc>$62,375.649</ReportDesc>
              <ArrowWrap style={{color: '#16A34A'}}>
              <HiArrowTrendingUp />
              <ReportDesc>3.45</ReportDesc>
              </ArrowWrap>
              <ReportDesc>$54,843.173</ReportDesc>
              <ReportDesc>0.95632087</ReportDesc>
              <ReportDesc style={{color: '#3B82F6'}}>Trede</ReportDesc>
            </MainDescWrapper>
          </MainDescContainer>
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
        </ReportWrapper>
      </ReportContainer>
    </>
  );
};

export default Report;
