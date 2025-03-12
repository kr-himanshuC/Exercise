import React, { useState } from "react";
import './Form.css';




// The data is handled by the components, all the data is stored in the component state. we prevent default behavior of form.
const Form = () => {

    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your name is ${inputs.name} and you are ${inputs.age} years old`);
    }

    const handleChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;

        setInputs((values)=>({...values, [key]:value}))
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Enter your name: 
                    <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} required/>
                </label>

                <label htmlFor="age"> Enter your age: 
                    <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} required/>
                </label>

                {/* boostrap button */}
                <button className="button btn btn-outline-secondary" type="submit">Submit</button>
            </form>
        </ div>
    )
}

export default Form;