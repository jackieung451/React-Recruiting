import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ImageOne from "../images/img19.jpg";

const Section = styled.section`
  background: #000d1a;
  padding: 3.5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;
  line-height: 1.8;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    ${"" /* margin-bottom: 2rem; */}
    font-size: 2 rem;
    display: flex;
    justify-content: center;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  h2 {
    display: flex;
    justify-content: center;
  }
`;
const ColumnRight = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  max-width: 850px;
  height: 100%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    ${"" /* flex: 0 0 100%; */}
    max-width: 100%;
    margin-top: 60px;
  }
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content>
              <h1>About Us</h1>

              <p>
                Hanna, Mitchell & Associates specialize in the Entertainment,
                Financial Services, Manufacturing, Consumer Products,
                Healthcare, and Public Accounting industries, amongst others. We
                work on a variety of positions for all levels of accounting
                (CFO's, Controllers, Accounting Managers, Senior/Staff
                Accountants, Internal Audit, Tax, Payroll, A/R and A/P) and
                finance (VP of Finance, planning, budgeting, forecasting,
                financial analysis, and strategic planning). With our vast
                network of contacts, industry knowledge, proven experience, and
                reputation we provide outstanding recruiting services to clients
                and candidates alike.
              </p>
              <h2>
                <strong>Meet The Team</strong>
              </h2>
              <br />
              <p>
                <strong>Ray Hanna, C.P.A.</strong> <br />
                Prior to the formation of Hanna, Mitchell & Associates Ray Hanna
                was a top producer for a national recruiting firm in Los
                Angeles. In addition to that he worked in private industry as
                Controller for Fry Reglet Corp. and a regional Accounting
                Manager for Media One Corp in El Segundo, CA. He gained his
                earliest experience in Public Accounting. Many of the candidates
                that Ray has represented over the years are current Controllers,
                VPs’ of Finance, and CFOs of both public and private firms in
                industry. Ray possesses a wealth of knowledge, which spans over
                20 years, regarding the current market place and the steps and
                experience needed to compete and achieve success in an ever
                changing landscape. Ray holds a Bachelor Degree in Accounting
                from California State University Northridge and is an inactive
                Certified Public Accountant in the state of California.
              </p>
              <p>
                <strong>Pete Hanna</strong> <br />
                Prior to joining Hanna, Mitchell & Associates, Pete was a top
                producer for a regional recruiting firm, here in Los Angeles. In
                the past, he gained his experience working in private and public
                industry, including hiring on a large scale for a national
                recruiting firm, focusing on the Southern California
                marketplace, and national hiring on a special engagement. Pete
                gained his Bachelor’s Degree from California State University,
                Northridge.
              </p>
              <p>
                <strong>Preston Mitchell</strong> <br /> Prior to the formation
                of Hanna, Mitchell & Associates Preston Mitchell was a top
                producer for a national recruiting firm in Los Angeles. Prior to
                that he worked in various private accounting/finance positions
                at Paramount Pictures. He gained his earliest experience in
                Chicago as an Accounting Manager for Utility Supply of America
                and as an auditor for Arthur Andersen. He holds a BS in
                Accounting from Stonehill College in Massachusetts.
              </p>
              <p>
                <strong>Mike Ellis</strong> <br /> Mike brings over 20 years of
                experience and a reputation as a nationally recognized expert in
                the executive search and staffing industry. He is a hands on
                Recruiter/Account Manager whose focus is on the long term career
                growth of the people he represents, coupled with a logical and
                pragmatic career path plan.. Prior to joining Hanna, Mitchell, &
                Associates, Mike founded and developed a staffing firm at
                Surrex/Quadrant 4 which grew to a $65 million operation with 30
                offices across the US. Previously, he was the top recruiting
                sales professional at Kforce/Source across all divisions
                consisting of over 3000 sales people and twice named President
                of Sales Club. Mike’s approach is collaborative in nature and
                designed to produce successful outcomes for all parties. Mike
                holds a Bachelor’s degree from Rutgers University.
              </p>
              {/* <Button to="/current-opportunities">Learn More</Button> */}
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image src={ImageOne} />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
