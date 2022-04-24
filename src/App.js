import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import "./App.scss";
import { DateRangePicker } from "rsuite";
import { language, skill } from "./Data/Data";
import Dropdown from "./Dropdown";
import { toast, ToastContainer } from "react-toastify";

function App(e) {
  const initialState = {
    username: "",
    email: "",
    date: "",
    about: "",
    company: "",
    post: "",
    location: "",
    desc: "",
    education: "",
    educationAbout: "",
    project: "",
    projectDesc: "",
    role: "",
  };
  const [formValues, setFormValues] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formValues.username ||
      !formValues.email ||
      !formValues.date ||
      !formValues.about ||
      !formValues.company ||
      !formValues.post ||
      !formValues.location ||
      !formValues.desc ||
      !formValues.education ||
      !formValues.educationAbout ||
      !formValues.project ||
      !formValues.projectDesc ||
      !formValues.role
    ) {
      toast.warning("Please fill all the field as it is required");
    } else {
      toast.success("Form is submitted successfully");
      setFormValues(initialState);
    }
  };
  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <h1 className="text-center">Form</h1>
      <form onSubmit={handleSubmit} className="form-container col-md-6 m-auto">
        <div className="field">
          <label>Name</label>
          <br />
          <input
            ref={ref}
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Birthday</label>
          <br />
          <input
            value={formValues.date}
            name="date"
            type="date"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <br />
          <input
            value={formValues.email}
            type="email"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="field">
          <label>About</label>
          <br />
          <textarea
            value={formValues.about}
            onChange={handleChange}
            rows="3"
            cols="30"
            name="about"
          ></textarea>
        </div>
        <div className="experience">
          <h4>Experience</h4>

          <div className="field">
            <label>Company Name</label>
            <br />
            <input
              type="text"
              name="company"
              value={formValues.company}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Job Post</label>
            <br />
            <input
              type="text"
              name="post"
              value={formValues.post}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Location</label>
            <br />
            <input
              type="text"
              name="location"
              value={formValues.location}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <br />
            <input
              type="text"
              name="desc"
              value={formValues.desc}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="education">
          <h4>Education</h4>
          <div className="field">
            <label>Name</label>
            <br />
            <input
              type="text"
              name="education"
              value={formValues.education}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Location</label>
            <br />
            <div className="dropdown-sec">
              <Dropdown />
            </div>
          </div>
          <div className="field">
            <label>About Your Education</label>
            <br />
            <textarea
              name="educationAbout"
              value={formValues.educationAbout}
              onChange={handleChange}
              rows="3"
              cols="30"
            ></textarea>
          </div>
          <div className="dates field mb-4">
            <label className="mb-2">Range of your Qualification</label>
            <br />
            <DateRangePicker />
          </div>
        </div>
        <div className="skill">
          <h4>Skills</h4>
          <Select isMulti options={skill} />
        </div>
        <div className="language mt-3">
          <h4>Multiple Language</h4>
          <Select isMulti options={language} />
        </div>
        <div className="projects mt-3">
          <div className="field">
            <label>Project Name</label>
            <br />
            <input
              name="project"
              value={formValues.project}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="field">
            <label>Project Description</label>
            <br />
            <textarea
              name="projectDesc"
              value={formValues.projectDesc}
              onChange={handleChange}
              rows="3"
              cols="30"
            ></textarea>
          </div>
          <div className="field">
            <label>Your Role on projects</label>
            <br />
            <input
              type="text"
              name="role"
              value={formValues.role}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
