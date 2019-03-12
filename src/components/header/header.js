import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-scroll'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  width: 100%;
  z-index: 1000;
  background-color: #000a12;

  overflow:hidden;



.navbaritems a {
  color:white;
  text-decoration: none;
  margin: 0 auto;
  color: white;
  font-weight: 200;
  outline: none;
  margin-top: .8rem;
  padding-right: 2em;

}
.navbaritems a:hover {
  color: orange;
}
.navbaritems a:active {
  color: orange;
}

`

const HeaderNav = styled.nav`

  width: 100%;


  min-height: 2rem;
  padding: .1rem;
  font-size: .9rem;

  max-width: 100%;
  z-index: 1000;


  overflow-x: auto;
  overflow-y: hidden;
  background-color: #000a12;
`

const HeaderLinkGroup = styled.div`

  display: flex;
  flex-direction: row;
` 





class Header extends React.Component {
  render () {

    return (
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLinkGroup>
          
   
          </HeaderLinkGroup>

      <div className="navbaritems" style={{display: 'flex', listStyle: 'none'}}>
    <Link 
    activeClass="active"
  to="skills"
  spy={true}
  smooth={true}
 duration={500} onSetActive={this.handleSetActive}
 offset={-50} 
>

    <p style={{ cursor: "pointer"}}>Moi</p> 
    </Link>

    <Link 
    activeClass="active"
  to="skills"
  spy={true}
  smooth={true}
  offset={-50} duration={900} onSetActive={this.handleSetActive}
>

    <p style={{ cursor: "pointer"}}>Skills</p> 
    </Link>
    <Link 
    activeClass="active"
  to="xp"
  spy={true}
  smooth={true}
  offset={-100} duration={900} onSetActive={this.handleSetActive}
>

    <p style={{ cursor: "pointer"}}>Expérience</p> 
    </Link>
    <Link 
    activeClass="active"
  to="github"
  spy={true}
  smooth={true}
  offset={-100} duration={900} onSetActive={this.handleSetActive}
>

    <p style={{ cursor: "pointer"}}>Projet</p> 
    </Link>

    <Link 
    activeClass="active"
  to="footer"
  spy={true}
  smooth={true}
  duration={700} onSetActive={this.handleSetActive}
>

    <p style={{ cursor: "pointer"}}>CV</p> 
    </Link>
    </div>

        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header