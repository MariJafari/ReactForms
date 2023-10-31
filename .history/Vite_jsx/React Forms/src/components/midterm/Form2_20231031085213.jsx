// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "./form.css";

export default function Form2() 
{
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: "",
    });
    
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
     const handleSubmit = (event) => {
     event.preventDefault();
     alert(`Name: ${formData.name}, Description: ${formData.description},Category: ${formData.category},Quantity: ${formData.quantity},Price: ${formData.price}`);
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
                type="text"
                id="description"
                className="multiple__input"
                name="description"
                value={formData.email}
                onChange={handleChange}
                />
             <label className="multiple__text" htmlFor="category">
            Description:
            </label>
                <input
                type="text"
                id="category"
                className="multiple__input"
                name="category"
                value={formData.email}
                onChange={handleChange}
                />
                 <label className="multiple__text" htmlFor="quantity">
            Description:
            </label>
                <input
                type="text"
                id="quantity"
                className="multiple__input"
                name="quantity"
                value={formData.email}
                onChange={handleChange}
                />
                 <label className="multiple__text" htmlFor="price">
            Description:
            </label>
                <input
                type="text"
                id="price"
                className="multiple__input"
                name="price"
                value={formData.email}
                onChange={handleChange}
                />
            <button className="multiple__button" type="submit">
             Submit
            </button>
            <button className="multiple__button" type="cancel">
             cancel
            </button>
         </form>
        );
}
