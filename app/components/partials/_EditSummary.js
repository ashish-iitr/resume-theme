import React, { PropTypes } from 'react';
import TextAreaInput from '../TextAreaInput';

class _EditSummary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <div className="row">
                <div className="col-md-4">
                    <h4>SUMMARY</h4>
                </div>
            </div>
                <div className="col-md-12"><TextAreaInput
                name="[basics][summary]"
                row="5"
                width="field col-md-12"
                placeholder="Add New Skill"
                value={this.props.resumeData.basics.summary}
                onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }
}

_EditSummary.propTypes = {
    resumeData: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default _EditSummary;
