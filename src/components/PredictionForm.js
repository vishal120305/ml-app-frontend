// src/components/PredictionForm.js
import React, { useState } from 'react';

const PredictionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    gender: '',
    race_ethnicity: '',
    parental_level_of_education: '',
    lunch: '',
    test_preparation_course: '',
    writing_score: '',
    reading_score: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="prediction-form" onSubmit={handleSubmit}>
      <h2>Student Information</h2>
      
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select 
          id="gender" 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="race_ethnicity">Race/Ethnicity:</label>
        <select 
          id="race_ethnicity" 
          name="race_ethnicity" 
          value={formData.race_ethnicity} 
          onChange={handleChange}
          required
        >
          <option value="">Select Race/Ethnicity</option>
          <option value="group A">Group A</option>
          <option value="group B">Group B</option>
          <option value="group C">Group C</option>
          <option value="group D">Group D</option>
          <option value="group E">Group E</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="parental_level_of_education">Parental Education:</label>
        <select 
          id="parental_level_of_education" 
          name="parental_level_of_education" 
          value={formData.parental_level_of_education} 
          onChange={handleChange}
          required
        >
          <option value="">Select Education Level</option>
          <option value="high school">High School</option>
          <option value="some high school">Some High School</option>
          <option value="some college">Some College</option>
          <option value="associate's degree">Associate's Degree</option>
          <option value="bachelor's degree">Bachelor's Degree</option>
          <option value="master's degree">Master's Degree</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="lunch">Lunch Type:</label>
        <select 
          id="lunch" 
          name="lunch" 
          value={formData.lunch} 
          onChange={handleChange}
          required
        >
          <option value="">Select Lunch Type</option>
          <option value="free/reduced">Free/Reduced</option>
          <option value="standard">Standard</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="test_preparation_course">Test Preparation:</label>
        <select 
          id="test_preparation_course" 
          name="test_preparation_course" 
          value={formData.test_preparation_course} 
          onChange={handleChange}
          required
        >
          <option value="">Select Preparation Status</option>
          <option value="none">None</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="writing_score">Writing Score (0-100):</label>
        <input
          type="number"
          id="writing_score"
          name="writing_score"
          min="0"
          max="100"
          value={formData.writing_score}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="reading_score">Reading Score (0-100):</label>
        <input
          type="number"
          id="reading_score"
          name="reading_score"
          min="0"
          max="100"
          value={formData.reading_score}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="predict-button">
        Predict Math Score
      </button>
    </form>
  );
};

export default PredictionForm;