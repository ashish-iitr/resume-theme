import React, { Component, PropTypes } from 'react';

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.projectDetail;

        return(
            <div className="project-detail">
                <h3>PROJECT DETAILS</h3>
                {/* {data.map(work => Object.keys(work).map(key =>
                    <div key= {key}>{work[key]}</div>
                ))}*/}
                {data.map(project =>
                    <div className="row" key={project.title}>
                        <div className="col-md-4 left">{project.title}</div>
                        <div className="col-md-8 right">{project.description}</div>
                    </div>
                )}
            </div>
        );
    }
}

ProjectDetail.propTypes = {
    projectDetail: PropTypes.array
};

export default ProjectDetail;
