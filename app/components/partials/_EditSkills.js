import React, { PropTypes } from 'react';
import TextInput from '../TextInput';
import Tooltip from 'react-tooltip-component';

class _EditSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            newSkill: '',
            error: ''
        };
        this.toggleSkillEdit = this.toggleSkillEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.saveSkill = this.saveSkill.bind(this);
    }

    toggleSkillEdit(e) {
        e.preventDefault();
        this.setState({isEditing: !this.state.isEditing});
        this.setState({newSkill: ''});
        this.setState({error: ''});
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
        this.setState({error: ''});
    }

    saveSkill() {
        if(!this.state.newSkill) {
            this.setState({error: 'Please enter a valid skill'});
            return;
        }
        this.props.resumeData.skills[0].keywords.push(this.state.newSkill);
        this.setState({isEditing: !this.state.isEditing});
        this.setState({newSkill: ''});
    }

    render() {
        const { error } = this.state;

        return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <h4>SKILLS
                    <Tooltip title="Add new skill" position="top">
                    <span className="btn-group-xs">
                        <button type="button" className="btn btn-default bmd-btn-fab " onClick={this.toggleSkillEdit}>
                            <i className="material-icons">add</i>
                        </button>
                    </span>
                    </Tooltip>
                    </h4>
                    {/* <Tooltip title="Add new skill" position="top">
                        <button className="btn btn-warning btn-xs" onClick={this.toggleSkillEdit}>ADD NEW</button>
                    </Tooltip>*/}
                </div>
            </div>
            <div className="row">
            { this.props.resumeData.skills[0].keywords.map(technology =>
                <div className="col-md-6" key={technology}>
                    <div><ul><li>{technology}</li></ul></div><br />
                </div>)
            }
            {this.state.isEditing ?
                (<div className="col-md-6"><TextInput
                name="newSkill"
                placeholder="Add New Skill"
                value={this.state.newSkill}
                onChange={this.onChange}/>
                { error ? (<p className="error">{error}</p>) : <p></p>}
                <Tooltip title="Click to save" position="top">
                    <span className="btn-group-xs">
                    <button type="button" className="btn btn-default bmd-btn-fab " onClick={this.saveSkill}>
                    <i className="material-icons save-icon">save</i>
                    </button>
                    </span>
                </Tooltip>
                </div>) : <div></div>
            }
            </div>
        </div>
    );
    }
}

_EditSkills.propTypes = {
    resumeData: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

export default _EditSkills;
