import React, { Component, PropTypes } from 'react';

class Contribution extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.contributionInfo;

        return(
            <div className="Contribution">
                <h3>CONTRIBUTIONS</h3>
                <ul>
                    {data.map(contri =>
                    <li key={contri.name}>{contri.name} &nbsp;&nbsp;&nbsp;(<a href="#"> {contri.link} </a>)</li>
                    )}
                </ul>
            </div>
        );
    }
}

Contribution.propTypes = {
    contributionInfo: PropTypes.array
};

export default Contribution;
