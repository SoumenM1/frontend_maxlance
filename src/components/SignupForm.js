import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {storage} from '../firebase';


const uploadImageAndGetURL = async (imageFile) => {
    const imageRef = ref(storage, `images/${imageFile.name}`);
    await uploadBytes(imageRef, imageFile);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  };



const SignupForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    image: null
  });
  const [message, setMessage] = useState('');
  const history = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
        name: `${formData.fname} ${formData.lname}`, // Combine first name and last name into name property
        email: formData.email,
        password: formData.password,
        imgUrl: null // Initialize imgUrl as null
      };

    // Create form data object
    const formDataObj = new FormData();
    formDataObj.append('fname', formData.fname);
    formDataObj.append('lname', formData.lname);
    formDataObj.append('email', formData.email);
    formDataObj.append('password', formData.password);
    formDataObj.append('image', formData.image);

    // Upload image to Firebase storage and get URL
    const imageUrl = await uploadImageAndGetURL(formData.image);
     userData.imgUrl = imageUrl; 
    try {
      // Call your API to update the database
      const response = await fetch('https://backend-maxlance.onrender.com/register', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json' // Specify content type as JSON
          }
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Please check your email to verify your account.');
      setFormData({
        fname: '',
        lname: '',
        email: '',
        password: '',
        image: null
      });
      } else {
        // Registration failed
        if (data.error === 'User already exists') {
          // Redirect to login page
          history('/login')
        }
      }
      // Handle success, redirect to login page or show a success message
    } catch (error) {
      console.error('Error updating database:', error);
      // Handle error, display an error message to the user
    }
  };

  return (
    <div className="wrapper">
      <section className="form signup">
        <header>Registration Form</header>
        <form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
          <div className="error-text"></div>
          <div className="name-details">
            <div className="field input">
              <label>First Name</label>
              <input type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="First name" required />
            </div>
            <div className="field input">
              <label>Last Name</label>
              <input type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last name" required />
            </div>
          </div>
          <div className="field input">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          </div>
          <div className="field input">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter new password" required />
            <i className="fas fa-eye"></i>
          </div>
          <div className="field image">
            <label>Select Image</label>
            <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" onChange={handleFileChange} required />
          </div>
          <div className="field button">
            <input type="submit" name="submit" value="Continue to Registration" />
          </div>
          {message && <div className="message">{message}</div>}
        </form>
        <div className="link">Already signed up? <a href="/login">Login now</a></div>
      </section>
    </div>
  );
};

export default SignupForm;
