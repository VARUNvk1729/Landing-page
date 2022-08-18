import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 155px;
  cursor: pointer;
  text-align: center;
  
`;
const ContactBannerStyles = styled.div`
  .contactBanner__wrapper {
    // background-color: #FAEBD7 ;
    // border-radius: 12px;
    // padding: 0.5rem 0rem;
    // text-align: center;

    display: table;
    margin: 0px auto 0px auto; 
    padding:5px 5px 5px 5px;
    font-size:20px;
    background-color:#FAEBD7;
    color:black;
    
  }
  .contactBanner__heading {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;
export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <h3 className="contactBanner__heading">Confused in choosing bike?</h3>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button>Connect</Button>
        </div>
      </div>
    </ContactBannerStyles>
  );
}