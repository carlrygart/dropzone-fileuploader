import React from 'react';
import ReactDOM from 'react-dom';

import DefaultExample from './example_default.jsx';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

class Examples extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.heading}>
                    Rygarts bilduppladdning
                </h1>
                <div className="example">
                    <DefaultExample />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Examples />, document.getElementById('host'));
