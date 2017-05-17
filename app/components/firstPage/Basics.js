import React, { Component, PropTypes } from 'react';

class Basics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.basicsInfo;

        return(
            <div>
            <h3>SUMMARY</h3>
            <div>{data.summary}</div>
            </div>
        );
    }
}

Basics.propTypes = {
    basicsInfo: PropTypes.object
};

export default Basics;
