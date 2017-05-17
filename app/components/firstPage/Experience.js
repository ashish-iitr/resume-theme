import React, { Component, PropTypes } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.experienceInfo;

        return(
            <div className="experience">
                <h3>EXPERIENCE</h3>
                {/* {data.map(work => Object.keys(work).map(key =>
                    <div key= {key}>{work[key]}</div>
                ))}*/}
                {data.map(work =>
                    <div key={work.company}>
                        <div className="company">{work.company}, {work.position}</div>
                        <div className="year">{work.startDate} - {work.endDate}, {work.city}</div>
                        <div className="detail">{work.summary}</div>
                    </div>
                )}
            </div>
        );
    }
}

Experience.propTypes = {
    experienceInfo: PropTypes.array
};

export default Experience;
