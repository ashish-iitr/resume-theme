import React, { Component, PropTypes } from 'react';

class Technologies extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.technologiesInfo;

        return(
            <div className="technologies">
            <h3>TECHNOLOGIES</h3>
            { data.map(technologies => <span key={technologies}>{technologies}</span>)}
            </div>
        );
    }
}

Technologies.propTypes = {
    technologiesInfo: PropTypes.array
};

export default Technologies;
