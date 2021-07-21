import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import BusinessOne from "../images/img16.jpg";
import BusinessTwo from "../images/img17.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  ${"" /* display: block; */}
  ${
    "" /* flex-direction: column;
  justify-content: center;  */
  }
  ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */};
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 320px) {
    margin-bottom: 6rem;
  }
  ${"" /* padding: 2rem 1rem; */}
  ${
    "" /* background: #fff;
  padding: 3rem 2rem; */
  }
  ${"" /* max-height: 1200px; */}
  ${"" /* margin: 0 auto; */}

  @media screen and (max-width: 768px) {
    ${
      "" /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; */
    }
    ${"" /* line-height: 1.4; */}
    ${"" /* padding: 0rem 2rem; */}
    ${"" /* order: ${({ reverse }) => (reverse ? "2" : "1")}; */}
  }
`;
const Heading = styled.div`
  ${
    "" /* display: grid;
  grid-template-columns: 1fr; */
  }
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  padding: 4rem 1rem 0rem 1rem;

  h1 {
    margin-top: 2rem;
  }
  ${"" /* margin-bottom: 40px; */}
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const InfoRow = styled.div`
  ${
    "" /* display: grid;
  grid-template-columns: 1fr;
  justify-content: center; */
  }
  font-size: 1.5rem;
  padding: 2.5rem 1rem;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  margin: auto;

  ${"" /* justify-content: space-between; */}

  ${"" /* padding: 1rem 0rem; */} @media screen and (max-width: 768px) {
    ${
      "" /* flex-direction: column;
    justify-content: space-around; */
    }
    ${"" /* justify-content: flex-start; */}
    ${"" /* align-items: flex-start; */}
  }
  @media screen and (max-width: 768px) {
    max-width: 700px;
    ${
      "" /* display: grid;
    grid-gap: 1rem;
    justify-content: flex-start; */
    }
  }
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: center;

  ${"" /* display: inline-block; */}
  ${"" /* margin: 0 0 0 12rem; */}
  
  ${
    "" /* justify-content: space around;
  margin: auto; */
  }
  padding: 0rem 1rem 0 1rem;
  min-height: 270px;
  max-height: 500px;
  width: 100vw;
  height: 100%;
  margin-bottom: 0;

  ${"" /* h2 { */}
  ${"" /* margin-bottom: 1rem; */}
    ${"" /* font-weight: 400; */}
    ${
    "" /* display: block;
    justify-content: space-around;
    margin: auto; */
  }
  ${"" /* } */}
  @media screen and (max-width: 768px) {
    ${"" /* margin-bottom: 0rem; */}
  }
`;
const Image = styled.img`
  ${
    "" /* display: flex;
  justify-content: space-around;
  margin: auto; */
  }
  width: 100%;
  height: 100%;
  max-width: 600px;
  ${"" /* max-height: 400px; */}
  object-fit: cover;
  ${
    "" /* display: flex;
  justify-content: center; */
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 5rem 0 0;
  }

  @media screen and (max-width: 540px) {
    padding: 0 2rem 0 0;
  }

  ${
    "" /* @media screen and (max-width: 280px) {
    object-fit: contain; */
  }
    ${
      "" /* width: 100%;
    height: 100%;
    object-fit: cover; */
    }
    ${
      "" /* displau: grid;
    grid-template-columns: 1fr; */
    }
    ${
      "" /* min-width: 100px;
    max-width: 450px; */
    }
    ${"" /* flex-direction: column; */}
    

    ${
      "" /* a {
      background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
      white-space: nowrap;
      outline: none;
      border: none;
      min-width: 100px;
      max-width: 200px;
      cursor: pointer;
      text-decoration: none;
      transition: 0.3s; */

      /* display: flex;
      justify-content: center; */

      /* align-items: center;
      padding: 16px 40px;
      color: #000d1a;
      font-size: 20px;

      &:hover {
        transform: translateY(-2px);
      }
    } */
    }
  }
  ${"" /* margin-bottom: 1rem; */}
`;
// const InfoLink = styled(Link)`
// display: flex;
// align-items: center;
// text-decoration: none;
// color: #000d1a;
// width: 140px;
// transition: 0.3s
// &:hover {
//   transform: translateY(-2px)
// };`;

const Footer = styled.div`
  display: flex;
  justify-content: center;

  a {
    background: #cd853f;
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
    padding: 14px 24px;
    color: #000d1a;
    font-size: 14px;
    margin-top: 2rem;

    &:hover {
      transform: translateY(-2px);

     
  }
  
`;

/* display: grid;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 2rem 0; */

//   display: flex;
//   ${"" /* flex-direction: column; */}
//   justify-content: center;
//   align-items: center;
//   line-height: 1.4;
//   padding: 8rem 2rem 8rem;

//   a {background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
// white-space: nowrap;
// outline: none;
// border: none;
// min-width: 100px;
// max-width: 200px;
// cursor: pointer;
// text-decoration: none;
// transition: 0.3s;
// display: flex;
// justify-content: center;
// align-items: center;
// padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
// color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
// font-size: ${({ big }) => (big ? "20px" : "14px")};

// &:hover {
//   transform: translateY(-2px);
// }}

//   @media screen and (max-width: 768px) {
//     margin-bottom: 2rem;
// `;

const Listings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1>View Career Opportunities</h1>
        </Heading>
        <InfoRow>
          <InfoWrap>
            <Image src={BusinessTwo} alt="home" />
          </InfoWrap>
          <Footer>
            <a
              href="https://www2.pcrecruiter.net/pcrbin/regmenu.aspx?uid=hanna%20mitchell%20and%20associates.hannamitchellandassociates"
              rel="noopener noreferrer"
              target="_blank"
            >
              Click Here
            </a>
          </Footer>
        </InfoRow>

        {
          "" /* <Footer>
          <a
            href="https://www2.pcrecruiter.net/pcrbin/regmenu.aspx?uid=hanna%20mitchell%20and%20associates.hannamitchellandassociates"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn More
          </a>
        </Footer> */
        }
      </Container>
    </Section>
  );
};

export default Listings;
