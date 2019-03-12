import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 3px;
  width: 75%;
  max-width: 720px;
  word-wrap: break-word;
  background-color: #ffa1;
  text-align:center;
  color: white;
  margin: 0px auto 30px auto;
  top: -40px;
  padding: 50px;
  box-shadow: 5px 1px 15px 3px #4f5b62

  , 10px 40px 32px rgba(0, 0, 0, 0.1);
  min-height: 200px;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

export default Wrapper
