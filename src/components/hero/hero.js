import React from 'react'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

import { Link } from 'react-scroll'
const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: contrast(130%);

  .clicktoscroll p:hover{
    color: red;
  }
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  margin: 10px 60px;

  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  color: orange;
`




class Hero extends React.Component {

  render() {
    const { title, className } = this.props

    return (
      <>
      <div id="top"></div>
      <HeroContainer className={this.props.className}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>

          <Link 
    activeClass="active"
  to="skills"
  spy={true}
  smooth={true}
 duration={500} onSetActive={this.handleSetActive}
 offset={-350} 
>

    <p className="clicktoscroll" style={{ cursor: "pointer", color:"orange" }}>Click to scroll</p> 
    </Link> 


      <br/>

        </TitleContainer>
      </HeroContainer>
      </>
    )
  }
}

export default styled(Hero)`
  
  ${p => `background-image: url(${p.heroImg || siteConfig.siteCover});`}
  height: 110vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;




`
