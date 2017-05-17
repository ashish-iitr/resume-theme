import React, { Component, PropTypes } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.educationInfo;

        return(
            <div className="education">
                <h3>EDUCATION</h3>
                {Object.keys(data).map(key => <span key= {key}>{data[key]}</span>)}
            </div>
        );
    }
}

Education.propTypes = {
    educationInfo: PropTypes.object
};

export default Education;
