import React from 'react'
import styled from 'styled-components'

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
  font-weight: bold;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #000a12;
`


class Footer extends React.Component {
  render () {

    return (
      <FooterWrapper>
        <FooterNav>
      
          <footer  style={{color: "white", margin: "0 auto", paddingTop: ".5rem", fontSize: ".4rem"}}>
            <code>
            www.badou.be
            </code>
          </footer>
        </FooterNav>
      </FooterWrapper>
    )
  }
}

export default Footer