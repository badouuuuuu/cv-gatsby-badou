import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa"
import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #000a12;
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

const headerNavLink = `
display: inline-flex;
color: white;

p {
  color: white;
  margin: 1rem;
  padding: 3rem;
  display: inline-flex;

}
p:hover {
  color: orange;
}

links {
}`

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

class Header extends React.Component {
  render () {
    const { headerLinks } = siteConfig

    return (
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLinkGroup>
            {headerLinks.map((headerLink, i) => (
              <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
                {headerLink.label}
              </HeaderLink>
            ))}
          </HeaderLinkGroup>

      <div style={{headerNavLink}}>
    <Link 
    activeClass="active"
  to="#about"
  spy={true}
  smooth={true}
  offset={50} duration={500} onSetActive={this.handleSetActive}
>

    <p style={{margin: "-.9rem", cursor: "pointer"}}>A propos</p> 
    </Link>

    <Link 
    activeClass="active"
  to="#skills"
  spy={true}
  smooth={true}
  offset={50} duration={500} onSetActive={this.handleSetActive}
>

    <p style={{margin: "-.9rem", cursor: "pointer"}}>Mes skills</p> 
    </Link>
    <Link 
    activeClass="active"
  to="#xp"
  spy={true}
  smooth={true}
  offset={10} duration={500} onSetActive={this.handleSetActive}
>

    <p style={{margin: "-.9rem", cursor: "pointer"}}>Expérience Professionelle</p> 
    </Link>
    <Link 
    activeClass="active"
  to="#github"
  spy={true}
  smooth={true}
  offset={10} duration={700} onSetActive={this.handleSetActive}
>

    <p style={{margin: "-.9rem", cursor: "pointer"}}>Projet Github</p> 
    </Link>

    <Link 
    activeClass="active"
  to="#footer"
  spy={true}
  smooth={true}
  offset={10} duration={700} onSetActive={this.handleSetActive}
>

    <p style={{margin: "-.9rem", cursor: "pointer"}}>CV & Social Media</p> 
    </Link>
    </div>
          <GithubLink />
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header