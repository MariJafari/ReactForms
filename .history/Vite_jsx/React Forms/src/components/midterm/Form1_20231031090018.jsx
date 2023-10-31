// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "./form.css";

export default function Form1() 
{
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });
    
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
     const handleSubmit = (event) => {
     event.preventDefault();
     alert(`Name: ${formData.name}, Description: ${formData.description}`);
    };
        
    return (        
        <form onSubmit={handleSubmit} className="multiple">
            <label className="multiple__text" htmlFor="name"> 
            Name:
            </label>
                <input
                type="text"
                id="name"
                className="multiple__input"
                name="name"
                value={formData.name}
                 onChange={handleChange}
                 />
            <label className="multiple__text" htmlFor="description">
            Description:
            </label>
                <input
                type="description"
                id="description"
                className="multiple__input"
                name="description"
                value={formData.email}
                onChange={handleChange}
                />
            
            <button className="multiple__button" type="submit">
             Submit
            </button>
            <button className="multiple__button" type="cancel"
                            onClick={() => {}}>
             Cancel
            </button>
         </form>
        );
}
