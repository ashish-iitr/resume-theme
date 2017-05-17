import React, { PropTypes } from 'react';
import TextInput from '../TextInput';
import NumberInput from '../NumberInput';

class _EditBasics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <h4>BASICS</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <TextInput
                            name="[title][designation]"
                            value={this.props.resumeData.title.designation}
                            onChange={this.props.onChange}/>
                    </div>
                    <div className="col-md-6">
                        <NumberInput
                            name="[title][experience]"
                            value={this.props.resumeData.title.experience}
                            onChange={this.props.onChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

_EditBasics.propTypes = {
    resumeData: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default _EditBasics;
