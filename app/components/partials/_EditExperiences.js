import React, { PropTypes } from 'react';
import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import Tooltip from 'react-tooltip-component';

class _EditExperiences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            info: {
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                city: '',
                summary: ''
            },
            error: ''
        };
        this.toggleExpEdit = this.toggleExpEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.saveExperience = this.saveExperience.bind(this);
    }

    toggleExpEdit(e) {
        e.preventDefault();
        this.setState({isEditing: !this.state.isEditing});
        this.setState({ info: { ...this.state.info, company: '', position: '', startDate: '', endDate: '', city: '', summary: '' } });
        this.setState({error: ''});
    }

    onChange(e) {
        this.setState({ info: { ...this.state.info, [e.target.name]: e.target.value } });
        this.setState({error: ''});
    }

    saveExperience() {
        if(!this.state.info.company || !this.state.info.position || !this.state.info.startDate || !this.state.info.endDate || !this.state.info.city || !this.state.info.summary) {
            this.setState({error: 'Please enter a valid details'});
            return;
        }
        const newObject = {
            company: this.state.info.company,
            position: this.state.info.position,
            startDate: this.state.info.startDate,
            endDate: this.state.info.endDate,
            city: this.state.info.city,
            summary: this.state.info.summary
        };
        this.props.resumeData.work.push(newObject);
        this.setState({isEditing: !this.state.isEditing});
        this.setState({ info: { ...this.state.info, company: '', position: '', startDate: '', endDate: '', city: '', summary: '' } });
    }

    render() {
        const { error } = this.state;
        const {company, position, startDate, endDate, city, summary} = this.state.info;

        return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <h4>EXPERIENCES
                    <Tooltip title="Add new experience" position="top">
                    <span className="btn-group-xs">
                        <button type="button" className="btn btn-default bmd-btn-fab " onClick={this.toggleExpEdit}>
                            <i className="material-icons">add</i>
                        </button>
                    </span>
                    </Tooltip>
                    </h4>
                    {/* <Tooltip title="Add new experience" position="top">
                        <button className="btn btn-success btn-xs" onClick={this.toggleExpEdit}>ADD NEW</button>
                    </Tooltip>*/}
                </div>
            </div>
            <div className="row">
            { this.props.resumeData.work.map(data=>
                <div className="col-md-6" key={data.company}>
                    <div>{data.company}</div>
                    <div>{data.position}</div>
                    <div>{data.startDate} - {data.endDate}, {data.city}</div>
                    <div className="summary">{data.summary}</div>
                    <br />
                </div>)
            }
            {this.state.isEditing ?
                (<div className="col-md-6">
                    <TextInput name="company" placeholder="Company Name" value={company} onChange={this.onChange}/>
                    { (error && !company) ? (<p className="error">{error}</p>) : <p></p>}
                    <TextInput name="position" placeholder="Designation" value={position} onChange={this.onChange}/>
                    { (error && !position) ? (<p className="error">{error}</p>) : <p></p>}
                    <TextInput name="startDate" placeholder="Starting year (Jan 2000)" value={startDate} onChange={this.onChange}/>
                    { (error && !startDate) ? (<p className="error">{error}</p>) : <p></p>}
                    <TextInput name="endDate" placeholder="Ending year (Dec 2000)" value={endDate} onChange={this.onChange}/>
                    { (error && !endDate) ? (<p className="error">{error}</p>) : <p></p>}
                    <TextInput name="city" placeholder="Country / City" value={city} onChange={this.onChange}/>
                    { (error && !city) ? (<p className="error">{error}</p>) : <p></p>}
                    <TextAreaInput name="summary" row="2" width="field col-md-6" placeholder="" value={summary} onChange={this.onChange}/>
                    { (error && !summary) ? (<p className="error">{error}</p>) : <p></p>}
                    <Tooltip title="Click to save" position="top">
                        <span className="btn-group-xs">
                        <button type="button" className="btn btn-default bmd-btn-fab " onClick={this.saveExperience}>
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

_EditExperiences.propTypes = {
    resumeData: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

export default _EditExperiences;
