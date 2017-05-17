import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../actions';
import { bindActionCreators } from 'redux';
import Title from '../components/firstPage/Title';
import Basics from '../components/firstPage/Basics';
import Technologies from '../components/firstPage/Technologies';
import Education from '../components/firstPage/Education';
import Experience from '../components/firstPage/Experience';
import Contribution from '../components/firstPage/Contribution';
import Project from '../components/firstPage/Project';
import { updateCat } from '../actions';
import EditForm from '../components/EditForm';
import { set } from 'lodash';
import Tooltip from 'react-tooltip-component';
import ProjectDetail from '../components/secondPage/ProjectDetail';

class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            userData: this.props.data
        };
        this.updateUserState = this.updateUserState.bind(this);
        this.saveCat = this.saveCat.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    componentDidMount() {
        this.props.getUserData();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({userData: nextProps.data});
    }

    saveCat(event) {
        event.preventDefault();
        // console.log(this.state.userData);
        this.toggleEdit();
        // this.props.updateCat(this.state.userData);
    }

    updateUserState(event) {
        const field = event.target.name;
        // console.log(typeof((event.target.name).charAt(event.target.name.length - 2)));
        const userData = this.state.userData;
        set(userData, field, event.target.value);
        return this.setState({userData: userData});
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing});
    }

    render() {
        const { data } = this.props;

        if(!data.basics) {
            return <div>Loading..</div>;
        }

        if(this.state.isEditing) {
            return(
                <div>
                    <div className="back-btn" onClick={this.toggleEdit}>
                        <Tooltip title="Go Back" position="top">
                            <i className="material-icons">arrow_back</i>
                        </Tooltip>
                    </div>
                    <h3>EDIT DETAILS</h3>
                    <hr />
                    <EditForm
                    resumeData={this.state.userData}
                    onSave={this.saveCat}
                    onChange={this.updateUserState} />
                </div>
            );
        }
        return(
            <div>
                <div className="first-page">
                    <Title titleInfo={data.title} />
                    <div className="left-part">
                        <Technologies technologiesInfo={data.skills[0].keywords} />
                        <Education educationInfo={data.education[0]} />
                    </div>
                    <div className="right-part">
                        {/* <Tooltip title="Click to edit" position="top">
                            <button className="btn btn-primary <btn-sm></btn-sm>" onClick={this.toggleEdit}>edit</button>
                        </Tooltip>*/}
                        <Basics basicsInfo={data.basics} />
                        <Experience experienceInfo={data.work} />
                        <Contribution contributionInfo={data.contributions}/>
                        <Project projectInfo={data.projects}/>
                    </div>
                </div>
                <div className="second-page">
                    <ProjectDetail projectDetail={data.projects} />
                </div>
                <Tooltip title="Click to edit" position="top">
                    <button className="btn btn-primary <btn-xs></btn-xs>" style={{borderRadius: '20px'}} onClick={this.toggleEdit}>edit</button>
                </Tooltip>
            </div>
        );
    }
}

UserData.propTypes = {
    data: PropTypes.object,
    getUserData: PropTypes.func,
    updateCat: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        data: state.user.userData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getUserData: bindActionCreators(getUserData, dispatch)
        getUserData: () => dispatch(getUserData()),
        updateCat: bindActionCreators(updateCat, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserData);
