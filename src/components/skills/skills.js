import React, { Fragment } from 'react'



const listStyleRight = {
  color: "orange",
  listStyle: "none",
  margin: "1rem auto",
  fontSize: "1rem",
  display: "grid"
}

const listStyleleft = {
  color: "orange",
  listStyle: "none",
  margin: "1rem auto",
  fontSize: "1rem",
  gridColumn: "2",
  display: "grid"
}


const gridList = {
  display: "grid",
  gridTemplateColumn: "1fr auto 1fr"
}

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <h1 style={{  margin: "0 auto"}}>{title}</h1>
      <hr/>
      <div style={gridList}>
          <ul style={listStyleRight} >
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>PHP</li>

          </ul>
          <ul style={listStyleleft}>
          <li>Laravel</li>
                <li>VueJS</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
          </ul>
   </div>
   
    </Fragment>
  )
}
