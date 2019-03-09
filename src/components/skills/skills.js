import React, { Fragment } from 'react'



const listStyleRight = {
  color: "#555",
  listStyle: "none",
  margin: "0 auto",
  fontSize: ".8rem",
  gridColumn: "1/2",
  display: "grid"
}

const listStyleleft = {
  color: "#555",
  listStyle: "none",
  margin: "0 auto",
  fontSize: ".7rem",
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
      <hr style={{  backgroundColor: "orange", width: "10rem", margin: "0 auto", marginBottom: "1rem" }} />
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
