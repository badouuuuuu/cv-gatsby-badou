import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa"
import siteConfig from '../../../data/siteConfig'


const FooterWrapper = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #000a12;
  opacity: 6 ;



`

const FooterNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 40px;
  display: flex;
  font-size: .7rem;

  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #000a12;
  
`

const GithubLink = styled(({ className }) => (
  <a 
    className={className}
    href={`https://github.com/${siteConfig.githubUsername}`}
    target='_blank'
    rel="noopener noreferrer">
    <FaGithub size={20} />
  </a>
))`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;

  min-width: 32px;
  z-index: 10;

`

class Footer extends React.Component {
  render () {

    return (
      <FooterWrapper>
        <FooterNav>
      
          <footer style={{margin: "0 auto", paddingTop: ".3rem"}}>
            <p className="websitefooter" style={{color: "white", margin: "0 auto",  fontSize: ".7rem", textAlign: "center"}}>
            www.badou.be
            </p>
   
          </footer>
          <GithubLink />
        </FooterNav>
      </FooterWrapper>
    )
  }
}

export default Footer