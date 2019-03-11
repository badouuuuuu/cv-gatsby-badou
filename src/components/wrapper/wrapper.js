import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 3px;
  width: 80%;
  max-width: 960px;
  border-bottom: 1px solid #ebf2f6;
  word-wrap: break-word;
  background-color: #ffa1;
  text-align:center;
  color: white;
  margin: 0px auto 30px auto;
  top: -100px;
  padding: 50px;
  box-shadow: 5px 10px 20px 0 #4f5b62

  , 10px 40px 32px rgba(0, 0, 0, 0.1);
  min-height: 200px;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

export default Wrapper
