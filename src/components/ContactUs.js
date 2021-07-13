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

const Section = styled.section`
  height: 100vh;
  max-height: 1100px;
  ${
    "" /* position: relative;
  overflow: hidden; */
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${"" /* justify-content: center; */}
  max-width: 1600px;
  width: calc{100% - 100px};
  padding: 100px
  
`;

const ContactUs = () => {
  return (
    <Section>
      <Content>
        <h1>Contact Us</h1>
        <br />
        <p>Hanna, Mitchell & Associates</p>
        <p>15901 Hawthorne Blvd # 310</p>
        <p>Lawndale, CA.</p>
        <p>Phone 310-371-8886</p>
      </Content>
    </Section>
  );
};

export default ContactUs;
