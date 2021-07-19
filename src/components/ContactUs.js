// import React from "react";
// import GoogleMapReact from 'google-map-react';

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     return (<div style={{ height: '100vh', width: '100%' }}>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//       defaultCenter={this.props.center}
//       defaultZoom={this.props.zoom}
//     >
//       <AnyReactComponent
//         lat={59.955413}
//         lng={30.337844}
//         text="My Marker"
//       />
//     </GoogleMapReact>
//   </div>
// );
// }
// }

// export default SimpleMap;
// import React, { Component } from "react";

// class ContactUs extends Component {
//   render() {
//     return (
//       <div>
//         <a href="public/contact.html">Contact Us</a>
//       </div>
//     );
//   }
// }

// export default ContactUs;

import React from "react";
import styled from "styled-components";
import ImageOne from "../images/img11.jpg";

// const Section = styled.section`
//   height: 100vh;
//   ${"" /* max-height: 1100px; */}
//   ${
//     "" /* position: relative;
//   overflow: hidden; */
//   }
// `;

// const Container = styled.div`
//   ${"" /* padding: 3 rem calc((100vw - 1300px) / 2); */}
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 600px;

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ColumnLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   line-height: 1.4;
//   margin: 0rem;
//   padding: 0rem 10rem;
//   ${"" /* order: ${({ reverse }) => (reverse ? "2" : "1")}; */}

//   h1 {
//     margin-top: 4rem;
//     font-size: clamp(1.5rem, 6vw, 2rem);

//     @media screen and (max-width: 768px) {
//       ${
//         "" /* display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center; */
//       }
//       order: ${({ reverse }) => (reverse ? "2" : "1")};
//       ${
//         "" /* iframe {
//         margin: 0; */
//       }
//       h1 {
//         display: block;
//     margin-top: 10px;
//     ${"" /* font-size: clamp(1.5rem, 6vw, 2rem); */}
//       }
//   if

//     ${
//       "" /* iframe {
//       margin: 0;
//     } */
//     }
//   }
// `;
// const ColumnRight = styled.div`
//   margin-top: 0rem;
//   ${"" /* padding: 1rem 0rem 0rem 0rem; */}
//   order: ${({ reverse }) => (reverse ? "1" : "2")};
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     margin-top: 2rem;
//     ${
//       "" /* display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center; */
//     }
//     order: ${({ reverse }) => (reverse ? "2" : "1")};
//     ${"" /* } */}

//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;

//       @media screen and (max-width: 768px) {
//         width: 90%;
//         height: 90%;
//         margin-bottom: 4rem;

//         ${"" /* margin-top: 75px; */}
//       }
//     }
//   }
// `;
// const Content = styled.div`
//    ${
//      "" /* max-width: 1600px;
//   width: calc{100% - 100px};
//   padding: 100px; */
//    }

//   @media screen and (max-width: 768px) {
//     max-height: 140px;
//     padding: 0 0 0 0rem;
//         width: 100%;
//         height: 100%;

//         iframe{
//           padding: 0 0rem 0 30rem;

//         }`;

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

  @media screen and (max-width: 768px) {
    iframe {
      min-width: 200px;
      max-width: 1020px;
    }
  }
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
    justify-content: flex-start;
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
  right: 0px;
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
    padding-bottom: 40px;
  }
`;

const ContactUs = ({ reverse }) => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content>
              <h1>Contact Us</h1>
              <p>Hanna, Mitchell & Associates</p>
              <p>15901 Hawthorne Blvd # 310</p>
              <p>Lawndale, CA.</p>
              <p>Phone 310-371-8886</p>
            </Content>
            <br />
            <br />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3312.108064907632!2d-118.3527012!3d33.8868706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b451eef1dcc1%3A0xa9aa4b6be7a27d0f!2s15901%20Hawthorne%20Blvd%2C%20Lawndale%2C%20CA%2090260!5e0!3m2!1sen!2sus!4v1626485329322!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </ColumnLeft>
          <ColumnRight>
            <Image src={ImageOne} alt="recruiting" />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default ContactUs;
