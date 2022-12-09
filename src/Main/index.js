import React from "react";
import {
  MainContainer,
  MainHeader,
  MainCard,
  CardHeader,
  CardContent,
  CardTitle,
  CardPersen,
  CardButton,
  CardSell,
  ButtonBg
} from "./MainElement";
import { HiArrowTrendingUp } from "react-icons/hi2";
import '../App.css'

const MainSection = () => {
  return (
    <>
      <MainContainer>
        {/* HEADER */}
        <MainHeader>
          <MainCard>
            <CardHeader>
              <CardTitle>Total Profit</CardTitle>
              <CardPersen>
                <HiArrowTrendingUp
                  style={{
                    fontSize: "14px",
                    color: "#4ADE80",
                    paddingTop: '5px',
                    marginRight: '5px',
                  }}
                />{" "}
                +16.24 %
              </CardPersen>
            </CardHeader>
            <CardContent>
              <CardSell>$559.25k</CardSell>
              <ButtonBg>
              <CardButton>$</CardButton>
              </ButtonBg>
            </CardContent>
              <a href="/" className="href">View all orders</a>
          </MainCard>
          <MainCard>
            <CardHeader>
              <CardTitle>Total Profit</CardTitle>
              <CardPersen>
                <HiArrowTrendingUp
                  style={{
                    fontSize: "14px",
                    color: "#4ADE80",
                    paddingTop: '5px',
                    marginRight: '5px',
                  }}
                />{" "}
                +16.24 %
              </CardPersen>
            </CardHeader>
            <CardContent>
              <CardSell>$559.25k</CardSell>
              <ButtonBg>
              <CardButton>$</CardButton>
              </ButtonBg>
            </CardContent>
              <a href="/" className="href">View all orders</a>
          </MainCard>
          <MainCard>
            <CardHeader>
              <CardTitle>Total Profit</CardTitle>
              <CardPersen>
                <HiArrowTrendingUp
                  style={{
                    fontSize: "16px",
                    color: "#4ADE80",
                    paddingTop: '5px',
                    marginRight: '5px',
                  }}
                />{" "}
                +16.24 %
              </CardPersen>
            </CardHeader>
            <CardContent>
              <CardSell>$559.25k</CardSell>
              <ButtonBg>
              <CardButton>$</CardButton>
              </ButtonBg>
            </CardContent>
              <a href="/" className="href">View all orders</a>
          </MainCard>
          <MainCard>
            <CardHeader>
              <CardTitle>Total Profit</CardTitle>
              <CardPersen>
                <HiArrowTrendingUp
                  style={{
                    fontSize: "14px",
                    color: "#4ADE80",
                    paddingTop: '5px',
                    marginRight: '5px',
                  }}
                />{" "}
                +16.24 %
              </CardPersen>
            </CardHeader>
            <CardContent>
              <CardSell>$559.25k</CardSell>
              <ButtonBg>
              <CardButton>$</CardButton>
                  </ButtonBg>
            </CardContent>
              <a href="/" className="href">View all orders</a>
          </MainCard>
        </MainHeader>
      </MainContainer>
    </>
  );
};

export default MainSection;
