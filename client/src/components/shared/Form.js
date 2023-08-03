import React, { useState } from 'react';
import InputType from "./InputType";

function Form({formTitle , submitBtn}) {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    return (
        <div>
            <form>
                <h1 className='text-center'>{formTitle}</h1>
                <InputType 
                labelText={'Email'}
                labelFor={"ForEmail"}
                inputType={'email'}
                name={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />

                <InputType 
                labelText={'Password'}
                labelFor={"ForPassword"}
                inputType={'password'}
                name={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />

                <div className='d-flex'>
                    <button className='btn btn-success' type='submit'>
                        {submitBtn}
                    </button>
                </div> 
            </form>
        </div>
    );
}

export default Form;