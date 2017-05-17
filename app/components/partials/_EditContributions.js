import React, { PropTypes } from 'react';
import TextInput from '../TextInput';
import Tooltip from 'react-tooltip-component';

class _EditContributions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            info: {
                name: '',
                link: ''
            },
            error: ''
        };
        this.toggleContributionEdit = this.toggleContributionEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.saveContribution = this.saveContribution.bind(this);
    }

    toggleContributionEdit(e) {
        e.preventDefault();
        this.setState({isEditing: !this.state.isEditing});
        this.setState({ info: { ...this.state.info, name: '', link: '' } });
        this.setState({error: ''});
    }

    onChange(e) {
        this.setState({ info: { ...this.state.info, [e.target.name]: e.target.value } });
        this.setState({error: ''});
    }

    saveContribution() {
        if(!this.state.info.name || !this.state.info.link) {
            this.setState({error: 'Please enter a valid detail'});
            return;
        }
        const newObject = {
            name: this.state.info.name,
            link: this.state.info.link,
        };
        this.props.resumeData.contributions.push(newObject);
        this.setState({isEditing: !this.state.isEditing});
        this.setState({ info: { ...this.state.info, name: '', link: '' } });
    }

    render() {
        const { error } = this.state;
        const {name, link} = this.state.info;
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <h4>CONTRIBUTIONS
                        <Tooltip title="Add new contribution" position="top">
                            <span className="btn-group-xs">
                            <button type="button" className="btn btn-default bmd-btn-fab " onClick={this.toggleContributionEdit}>
                            <i className="material-icons">add</i>
                            </button>
                            </span>
                        </Tooltip>
                        </h4>
                        {/* <Tooltip title="Add new contribution" position="top">
                            <button className="btn btn-warning btn-xs" onClick={this.toggleContributionEdit}>ADD NEW</button>
                        </Tooltip>*/}
                    </div>
                </div>
                {this.props.resumeData.contributions.map((data, index) =>
                    <div className="row" key={index}>
                        <div className="col-md-6">
                            <TextInput
                                name={`[contributions][${index}][name]`}
                                value={data.name}
                                onChange={this.props.onChange}/>
                        </div>
                        <div className="col-md-6">
                            <TextInput
                                name={`[contributions][${index}][link]`}
                                value={data.link}
                                onChange={this.props.onChange}/>
                        </div>
                    </div>
                )}
                {this.state.isEditing ?
                (<div className="row">
                    <div className="col-md-6"><TextInput name="name" placeholder="Name" value={name}
                    onChange={this.onChange}/>
                    { (error && !name) ? (<p className="error">{error}</p>) : <p></p>}
                    </div>
                    <div className="col-md-6"><TextInput name="link" placeholder="Link" value={link}
                    onChange={this.onChange}/>
                    { (error && !link) ? (<p className="error">{error}</p>) : <p></p>}
                    <Tooltip title="Click to save" position="top">
                        <span className="btn-group-xs">
                        <button type="button" className="btn btn-default bmd-btn-fab " onClick={this.saveContribution}>
                        <i className="material-icons save-icon">save</i>
                        </button>
                        </span>
                    </Tooltip>
                    </div>
                </div>) : <div></div>
                }
            </div>
        );
    }
}

_EditContributions.propTypes = {
    resumeData: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default _EditContributions;
