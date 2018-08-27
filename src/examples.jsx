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
                <h2>
                    Rygarts dra och släpp
                </h2>
                <div className="example">
                    <DefaultExample />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Examples />, document.getElementById('host'));
