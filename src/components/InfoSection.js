import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 3.5rem 0rem;
`;

const Container = styled.div`
  padding: 3 rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 0rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1-rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
  a {
    background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
    color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
    font-size: ${({ big }) => (big ? "20px" : "14px")};

    &:hover {
      transform: translateY(-2px);
    }
  }
`;
const ColumnRight = styled.div`
  ${"" /* margin-top: 6rem; */}
  padding: 1rem 0rem 0rem 0rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
      margin-top: 75px;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <br />
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <a
            href="https://www2.pcrecruiter.net/pcrbin/regmenu.aspx?uid=hanna%20mitchell%20and%20associates.hannamitchellandassociates"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn More
          </a>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="recruiting" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
