import React, { Component, PropTypes } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.titleInfo;

        return(
            <div className="title">
                <div>{data.name}<br /><span className="subtitle">{data.designation},  {data.experience} years</span></div>
            </div>
        );
    }
}

Title.propTypes = {
    titleInfo: PropTypes.object
};

export default Title;
