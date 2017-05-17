import React, { PropTypes } from 'react';
import Tooltip from 'react-tooltip-component';
import _EditBasics from './partials/_EditBasics';
import _EditSkills from './partials/_EditSkills';
import _EditExperiences from './partials/_EditExperiences';
import _EditSummary from './partials/_EditSummary';
import _EditContributions from './partials/_EditContributions';

class EditForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
        <form>
        <_EditBasics resumeData={this.props.resumeData} onChange={this.props.onChange} /><hr />
        <_EditSummary resumeData={this.props.resumeData} onChange={this.props.onChange} /><hr />
        <_EditSkills resumeData={this.props.resumeData} /><hr />
        <_EditExperiences resumeData={this.props.resumeData} /><hr />
        <_EditContributions resumeData={this.props.resumeData} onChange={this.props.onChange} /><hr />
        <Tooltip title="Submit to save" position="top">
            <input type="submit" className="btn btn-primary" style={{borderRadius: '20px'}} onClick={this.props.onSave}/>
        </Tooltip>
        </form>
        </div>
    );
    }
}

EditForm.propTypes = {
    resumeData: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default EditForm;
