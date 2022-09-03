import React, { useState } from 'react';
import style from '../login_input_form/login_input_form.module.css';
const LoginInputForm = ({handleSubmit, submitContent, checkValid, inputValidation}) => {

    return (
    <form className={style.inputForm} onSubmit={handleSubmit} onChange ={checkValid}>
        <div className={style.email}>
            <input 
            id="inputEmail"
            type="text" 
            className={style.inputEmail} 
            placeholder='Email'></input>
        </div>
        <div className={style.password}>
            <input 
            id="inputPassword"
            type="text" 
            className={style.inputPassword}
            placeholder='Password'></input>            
        </div>
        {!inputValidation && <p className={style.inputTypeWarning}>
            Please keep email format and make password longer than 8 digit.
        </p>}
        <button 
        type="submit" 
        className={inputValidation? style.submitButton: style.disableSubmit}>
        {submitContent}
        </button>
    </form>
    );
};

export default LoginInputForm;