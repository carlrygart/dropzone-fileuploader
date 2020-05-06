import React from 'react'
import ReactDOM from 'react-dom'

import Dropzone from './Dropzone.jsx'

const Main = () => (
  <div className="main-container">
    <h1>Dropzone Fileuploader</h1>
    <div className="dropzone-container">
      <Dropzone/>
    </div>
  </div>
)

ReactDOM.render(<Main />, document.getElementById('app'))
