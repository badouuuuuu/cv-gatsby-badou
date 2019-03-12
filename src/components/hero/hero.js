import React from 'react'
import { withPrefix } from 'gatsby'
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
  width: "40px",
  height: "40px",
  padding: ".5rem",
  outline: "none",
}



class Hero extends React.Component {

  render() {
    const { title, className } = this.props

    return (
      <HeroContainer className={className}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
      <br/>

        </TitleContainer>
      </HeroContainer>
    )
  }
}

export default styled(Hero)`
  
  ${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 110vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


`
