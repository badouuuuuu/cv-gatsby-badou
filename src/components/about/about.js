import React, { Fragment } from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <hr/>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </Fragment>
  )
}
