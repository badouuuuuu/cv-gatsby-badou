import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'
import downloadIcon from '../../assets/download.svg'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"


const FooterContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const FooterTitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const FooterHeroTitle = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  color: orange;
`

const StyleButton = {
  cursor: "pointer", 
  border: "none", 
  backgroundColor: "#fff5", 
  color:"orange", 
  borderRadius: ".5rem", 
  width: "32px",
  height: "32px",
  padding: ".5rem",
  outline: "none",
}


class FooterHero extends React.Component {

  render() {
    const { title, className } = this.props

    return (
      <FooterContainer className={className}>
        <FooterTitleContainer>
          <FooterHeroTitle>{title}</FooterHeroTitle>
         
          <div id="footer"><a href="https://drive.google.com/file/d/1XYVN2qqVQKUsb4TNzdw4vaFXd5kQTCMT/view?usp=sharing" target="_blank" rel="noopener noreferrer"  ><button className="button_footer" style={StyleButton}><img src={downloadIcon} alt="download"/></button></a></div>
          <div className="social">
                  {siteConfig.social.github && <a className="social-link github" href={siteConfig.social.github}>
                    <FaGithub className="social-icon" size="24" />
                  </a>}
                  {siteConfig.social.linkedin && <a className="social-link linkedin" href={siteConfig.social.linkedin}>
                    <FaLinkedin className="social-icon" size="24"  />
                  </a>}
                  {siteConfig.social.twitter && <a className="social-link twitter" href={siteConfig.social.twitter}>
                    <FaTwitter className="social-icon" size="24" />
                  </a>}
                  {siteConfig.social.email && <a className="social-link email" href={`mailto:${siteConfig.social.email}`}>
                    <FaEnvelope className="social-icon" size="24" />
                  </a>}
                </div>
                  </FooterTitleContainer>
      </FooterContainer>
    )
  }
}

export default styled(FooterHero)`
  
  ${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 25vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;



  .social {
    margin-top: .1rem;
    margin-bottom: 3rem;
  }

  .social-link {
    padding: .5rem;
    color: #fff;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }

  button:hover {
    color: red;
    background-color: orange;
  }
`
