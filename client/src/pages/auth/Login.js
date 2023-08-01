import React from 'react';
import InputType from '../../components/shared/InputType';

function Login() {
    return (
    <>
        <div className='row'>
            <div className="col-md-8 form-banner">
                <img src="./assests/images/banner1.jpg" alt="LoginImage" />
            </div>
            <div className="col-md-4 form-container">
                <form>
                    <InputType labelText={"Email Address"} labelFor={"ForMail"} inputType={"email"} name={"email"}/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    </>
    );
}

export default Login;