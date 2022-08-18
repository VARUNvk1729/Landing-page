import React from 'react'
import styled from 'styled-components'
import {FiFacebook ,FiInstagram,FiTwitter} from 'react-icons/fi';
const FooterStyle = styled.div`
  padding-top: 1rem;
  .container {
    display: flex;
    gap: 3rem;
    background-color: #696969
  }
  .footer-col1 {
    flex: 0.5;
  }
  .footer-col2
  {
      flex: 1;
  }
  .footer-col3,
  .footer-col4 {
    flex: 1;
  }
  .logos{
    position: relative;
    float: left;
    width:  250px;
    height: 270px;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .rlink {
    font-size: 1rem;
    text-decoration: none;
    color: black;
    text-align: auto;
    padding: 0px;
    margin: 0px 0px;
    border-style: solid;
    border-width: 0px 0px 0px 0px;
    border-color: transparent;
    transition: 250ms;
  }
  .rlink:hover {
    border-color: white;
    transition: 250ms;
  }

  
  @media only screen and (max-width: 800px) {
    .container {
     
        flex-direction: column;
        gap: 0rem;
         & > div {
          margin-top: 5rem;
          margin-left: auto;
          margin-right: auto;
          width: 8em
      }
    }
  }
`;

const Footer = ( {imageSrc} ) => {
  return (
    <FooterStyle>
        <div className="container">
        <div className="footer-col1">
            <img src={imageSrc} alt="logo" className="logos" />
        </div>
        <div className="footer-col2">
        <h1 className="footer-title">Address</h1>
            <h3>Road Number:10</h3>
            <h3>Jubilee Hills</h3>
            <h3> Hyderabad </h3>
            <h3>Telangana 500045</h3>
        </div>
        <div className="footer-col3">
            <h1>Contact info</h1>
            <h3>Name:Varun</h3>
            <h3>Number:8096150904</h3>
            <h3>123@gmail.com</h3>
        </div>
        <div className="footer-col4">
           <h1>Social Media</h1>
           {/* <a className="navbarlink" href={item.url}>
                        {item.title}
                    </a> */}
           <a className="rlink" href="https://www.facebook.com/"><h3>Facebook <FiFacebook/> </h3> </a>
           <a className="rlink" href="https://www.instagram.com/"><h3>Instagram <FiInstagram/> </h3> </a>
           <a className="rlink" href="https://www.twitter.com/"><h3>Twitter <FiTwitter/> </h3> </a>
           
        </div>
    </div>
    </FooterStyle>
  )
}

export default Footer