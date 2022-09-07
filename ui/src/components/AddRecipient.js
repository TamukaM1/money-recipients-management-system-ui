import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipientService from "../services/RecipientService";
import validator from 'validator';

const AddRecipient = () => {
  const [recipient, setRecipient] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });


  const App = () => {
  
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter valid Email!')
      }
    }
  }

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setRecipient({ ...recipient, [e.target.name]: value });
  };

  const saveRecipient = (e) => {
    e.preventDefault();
    RecipientService.saveRecipient(recipient)
      .then((response) => {
        console.log(response);
        navigaye("/recipientList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setRecipient({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    
    <div className="flex max-w-2xl mx-auto shadow border-b">
      
      <div className="px-8 py-8">
      <br/>
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Recipient</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-8">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={recipient.firstName}
            onChange={(e) => handleChange(e)}
            className="form-control "></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={recipient.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={recipient.emailId}
            onChange={(e) => handleChange(e)}
            required="true"
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveRecipient}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipient;
