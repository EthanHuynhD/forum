import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  //Component state value -- Fields
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      standing: "",
      skills: "",
      projects: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      bio: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      standing: this.state.standing,
      skills: this.state.skills,
      projects: this.state.projects,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
      bio: this.state.bio
    };

    this.props.createProfile(profileData, this.props.history);
    //doesn't work by default, need import withRouter from react-router-dom
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInput;

    if (displaySocialInputs) {
      socialInput = (
        <div>
          <InputGroup
            placeholder="Linkedin profile"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="Youtube profile"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.instagram}
          />
          <InputGroup
            placeholder="Instagram profile"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    //Select options for status
    const options = [
      { label: "Freshmen", value: "Freshmen" },
      { label: "Sophomore", value: "Sophomore" },
      { label: "Junior", value: "Junior" },
      { label: "Senior", value: "Senior" }
    ];

    return (
      <div>
        <div className="create-profile">
          <div className="container">
            <div className="">
              <h1 className="is-size-1 has-text-centered">
                Create Your Profile
              </h1>
              <p className="has-text-centered">Give me some info</p>
              <small className="column is-7">* = required field</small>

              <form onSubmit={this.onSubmit}>
                {/* profile handle - textfieldgroup */}
                <TextAreaFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL."
                />
                <SelectListGroup
                  placeholder="* Class Standing"
                  name="standing"
                  value={this.state.standing}
                  onChange={this.onChange}
                  options={options}
                  error={errors.standing}
                  info="What year are you?"
                />

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        //Toggle this piece of input
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="button is-info"
                  >
                    Add social network link
                  </button>
                  <span className="has-text-grey-light">Optional</span>
                </div>
                {socialInput}
                <input
                  type="submit"
                  value="Submit"
                  className="button is-info"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//PropTypes
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
