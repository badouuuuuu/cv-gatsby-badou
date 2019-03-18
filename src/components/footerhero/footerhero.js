import React from 'react'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'
import {LinkedinShareButton, TwitterShareButton, EmailShareButton, EmailIcon, TwitterIcon, LinkedinIcon} from 'react-share'

const FooterContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: contrast(100%);
  img:hover{

    outline: none;

  }
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

const shareUrl = "https://www.badou.be"
const hashTag = "#webdevelopper #becode.org #stage #liege #bruxelles"
const shareTitle = "Junior Web Developpeur - Recherche Stage"
const bodyShare = "Voici un Développeur Web Junior à la recherche d'un stage sur la région de Liège / Bruxelles - El Hirech Youssef - CV disponible sur https://www.badou.be"

class FooterHero extends React.Component {

  render() {
    const { title, className } = this.props




    return (
      
      <FooterContainer className={className}>
        <FooterTitleContainer>
          <FooterHeroTitle>{title}</FooterHeroTitle>

        {/* <p className="download_cv">  Télécharger mon CV </p>
        <a href="https://drive.google.com/file/d/1XYVN2qqVQKUsb4TNzdw4vaFXd5kQTCMT/view?usp=sharing" target="_blank" rel="noopener noreferrer"  > <button className="button_footer" style={StyleButton}><img src={downloadIcon} alt="download"/></button></a>
           */}
          <div className="social">


          <h1>Share</h1>

          <LinkedinShareButton url={shareUrl}>


  <LinkedinIcon size={24} round={true}/>
</LinkedinShareButton>
          
<TwitterShareButton  url={shareUrl} hashtag={hashTag}>


<TwitterIcon size={24} round={true} title={shareTitle}  />
</TwitterShareButton>

<EmailShareButton subject={shareTitle} body={bodyShare} url={shareUrl}>


<EmailIcon size={24} round={true} />
</EmailShareButton>



                  {/* {siteConfig.social.github && 
                  <a className="social-link envelop" href={"mailto:?&subject=Web Developpeur - Stagiaire&body=Voici%20le%20site%20de%20Youssef%20El%20Hirech,%20D%C3%A9veloppeur%20Junior%20a%20la%20recherche%20d'un%20stage%20sur%20la%20r%C3%A9gion%20de%20Li%C3%A8ge%20ou%20Bruxelles.%0A%0A"} target="_blank">
                    <FaEnvelope className="social-icon" size="18" />
                  </a>}
                  {siteConfig.social.linkedin && 
                  <a className="social-link linkedin" href={"https://www.linkedin.com/shareArticle?mini=true&url=www.badou.be&title=Web%20D%C3%A9veloppeur%20Junior%20-%20Stage&summary=Youssef%20est%20%C3%A0%20la%20recherche%20d'un%20stage%20en%20tant%20que%20Web%20Developpeur%20Junior&source="} target="_blank">
                    <FaLinkedin className="social-icon" size="18"  />
                  </a>}

                     
                  {siteConfig.social.twitter && <a className="social-link twitter" href="https://twitter.com/home?status=%40badouuuuuu%20est%20%C3%A0%20la%20recherche%20d'un%20stage%20en%20tant%20que%20Web%20D%C3%A9veloppeur%20Junior.%20Allez%20voir%20son%20CV%20sur%20www.badou.be%20" target="_blank">
                    <FaTwitter className="social-icon" size="18" />
                  </a>} */}
                </div>
                  </FooterTitleContainer>
      </FooterContainer>
    )
  }
}

export default styled(FooterHero)`
  
  ${p => `background-image: url(${p.heroImg || siteConfig.siteCover});`}

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 8rem;

h1 {
  font-size: .9rem;
  margin-bottom: 1rem;
  color: orange;
}


  .social {
    
    margin-bottom: 3.15rem;




  }

  .SocialMediaShareButton {
    display: inline-flex;
    left: 50%;
    right: 50%;
    margin-right: .8rem;
    text-align: center;
    margin-left: 1rem;
    cursor: pointer;
  }

  
  .social-link {
    padding: .5rem;
    color: grey;
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
