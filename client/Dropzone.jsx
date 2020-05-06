import React from 'react'
import DropzoneComponent from 'react-dropzone-component'

export default class Dropzone extends React.Component {
  constructor(props) {
    super(props)

    this.djsConfig = {
      acceptedFiles: 'image/*,video/*',
      dictDefaultMessage: 'Click here or drag and drop files here to upload. You can choose multiple photos/videos at the same time.',
      maxFilesize: 2048,
    }

    this.componentConfig = {
      postUrl: '/uploadHandler',
    }

    this.dropzone = null
  }

  render() {
    const config = this.componentConfig
    const djsConfig = this.djsConfig

    const eventHandlers = {
      init: dz => this.dropzone = dz,
    }

    return <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig}/>
  }
}
