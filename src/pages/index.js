import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"
import siteConfig from '../../data/siteConfig'
import { Link } from 'react-scroll'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'
import Footer from '../components/footer'
import FooterHero from '../components/footerhero'
import { Flipper, Flipped } from "react-flip-toolkit";
import { Document, Page }  from 'react-pdf'
import downloadIcon from '../assets/download.svg'
import GoTop from '../assets/gotop.svg'
import { withPrefix } from 'gatsby'


const StyleButton = {
  cursor: "pointer", 
  border: "none", 
  backgroundColor: "#fff5", 
  color:"orange", 
  borderRadius: ".5rem", 
  width: "40px",
  height: "40px",
  margin: "1rem",
  outline: "none",
}



class Home extends React.Component {
  state = { 
    fullScreen: false,
    numPages: null,
    pageNumber: 1,
    Hello:  <p>{"Voir mon CV"}</p>,
    DownloadCv:         <a href="./images/cv_el_hirech_youssef.pdf" target="_blank" rel="noopener noreferrer"  download> 
      <p className="download_cv">  Télécharger mon CV </p>
   </a>
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  
  toggleFullScreen = () => {
    this.setState(prevState => ({
      fullScreen: !prevState.fullScreen,
      Hello:  <p>{"Voir mon CV"}</p>,
      
    }));

    if(this.state.fullScreen ===  false) {

      this.setState({
        Hello : <Document
        file="./images/cv.pdf"
        onLoadSuccess={this.onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
        




      </Document>



      })


    } else {
      this.setState({
        Hello : <p>{"Voir mon CV"}</p>
      })
    }


  };

  render () {
    const title = 'Je suis Youssef'
    return (

      <Layout location={this.props.location}>
        <SEO
          title={title}
          keywords={['gatsbyjs', 'react', 'curriculum', 'belgium', 'stage', 'work', 'web', 'developper', 'developpeur', 'becode', 'becode.org', 'badouuuuuu', 'Youssef', 'el', ]}
        />
 
        <Hero
          heroImg={siteConfig.siteCover}
          title={title}
        />

        <Wrapper className={this.props.className} >
          <Container className="page-content" fluid>
     
              <Col xs={4} className='avatar'>
                <img
                  className='avatar__image'
                  src='./images/avatar2.jpeg'
                  alt='user avatar'
                />

                <div id="skills"></div>
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
 
              </Col>
            <Row>
              <Col xs={4} sm={4}>
                <About title='A propos' text={siteConfig.authorDescription}/>
              </Col>
            
         
              <Col xs={4} sm={4}>
                <Skills title='Mes skills' skills={siteConfig.skills} />
              </Col>
            </Row>
     
            <Timeline />
            <div id="github"></div>
            <Repositories />
          </Container>
          <Link 
    activeClass="active"
  to="top"
  spy={true}
  smooth={true}
  duration={700} onSetActive={this.handleSetActive}
>

<img className="topicon" src={GoTop} alt="icon_back_top"/>
    </Link>
    <Flipper flipKey={this.state.fullScreen}>
    
        <Flipped flipId="square">
          <div
            className={this.state.fullScreen ? "full-screen-square" : "square"}
            onClick={this.toggleFullScreen}
          > 
          
          {this.state.Hello}

           </div>
        </Flipped>
      </Flipper>

      {this.state.DownloadCv}
 
        </Wrapper>

        <FooterHero/>
        <div  id="footer" ></div>
        <Footer/>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }


.square {
  width: 7rem;
  cursor: pointer;
  border-radius: 1rem;
  margin: 0 auto;
  color: white;
  background-color: #000a12;
  p {
    font-size: .8rem;
  }
}

.square:hover {
  color: orange;
}

.full-screen-square {
  position: relative;
  height: 100%;
  width: 110%;
  cursor: pointer;

    text-align: center;
    overflow: hidden;

    a {
      text-decoration: none;
    }

      p {
        cursor: pointer;
        border-radius: 1rem;
        margin: 0 auto;
        color: white;
        background-color: #000a12;
        width: 7rem;
        font-size: .8rem;
      }
      p:hover {
        color: orange;
      }

}


.download_cv {
  
    cursor: pointer;
    border-radius: 1rem;
    margin: 0 auto;
    color: white;
    background-color: #000a12;
    width: 7rem;
    font-size: .8rem;

}

.download_cv:hover {
  color: orange;
}

a {
  text-decoration: none;
}

.topicon {
  width: 20px;
  cursor: pointer;
}

  hr {
    background-color: orange;
    width: 35%;
    margin: 1.2rem auto;
    padding: .07rem;
    
  }

  .avatar {
    align-items: center;
  margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
    max-width: 130px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
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
`
