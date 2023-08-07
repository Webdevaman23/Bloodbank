import React from 'react';
import Form from '../../components/shared/Form';

function Login() {
    return (
    <>
        <div className='row g-0'>
            <div className="col-md-8 form-banner">
                <img src="./assests/images/banner1.jpg" alt="LoginImage" />
            </div>
            <div className="col-md-4 form-container">
                <Form 
                    formTitle={"Login"}
                    submitBtn={"Login"}
                    formType={"Login"}
                />
            </div>
        </div>
    </>
    );
}

export default Login;