import React from 'react';
import Form from '../../components/shared/Form';

function Register() {
    return (
        <>
        <div className='row g-0'>
            <div className="col-md-8 form-banner">
                <img src="./assests/images/banner2.jpg" alt="registerImage" />
            </div>
            <div className="col-md-4 form-container">
                <Form 
                    formTitle={"Register Here!"}
                    submitBtn={"Register"}
                    formType={"Register"}
                />
            </div>
        </div>
        </>
    );
}

export default Register;