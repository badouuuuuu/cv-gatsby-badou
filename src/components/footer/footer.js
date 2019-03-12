import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa"
import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header`
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

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 40px;
  display: flex;
  font-size: .7rem;
  font-weight: bold;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #000a12;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;

` 

const HeaderLink = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`
const GithubLink = styled(({ className }) => (
  <a 
    className={className}
    href={`https://github.com/${siteConfig.githubUsername}`}
    target='_blank'
    rel="noopener noreferrer">
    <FaGithub size={24} />
  </a>
))`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;

`

class Footer extends React.Component {
  render () {
    const { headerLinks } = siteConfig

    return (
      <HeaderWrapper>
        <HeaderNav>
      
          <footer  style={{color: "white", margin: "0 auto", paddingTop: ".5rem", fontSize: ".4rem"}}>
            <code>
            www.badou.be
            </code>
          </footer>
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Footer