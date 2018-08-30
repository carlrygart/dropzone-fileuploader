import React from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.djsConfig = {
            acceptedFiles: "image/*,video/*",
            dictDefaultMessage: 'Klicka här eller dra bilder hit för att ladda upp'
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif', '.mp4', '.mov'],
            showFiletypeIcon: true,
            postUrl: '/uploadHandler'
        };

        this.dropzone = null;
    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            // drop: this.callbackArray,
            // addedfile: this.callback,
            // success: this.success,
            // removedfile: this.removedfile
        }

        return <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
    }
}
