import React, { Component, PropTypes } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.projectInfo;

        return(
            <div className="project">
                <h3>PROJECTS</h3>
                    {data.map(project =>
                    <div key={project.title}>
                        <div className="title">{project.title}</div>
                        <div className="description">{project.description}</div>
                    </div>
                    )}
            </div>
        );
    }
}

Project.propTypes = {
    projectInfo: PropTypes.array
};

export default Project;
