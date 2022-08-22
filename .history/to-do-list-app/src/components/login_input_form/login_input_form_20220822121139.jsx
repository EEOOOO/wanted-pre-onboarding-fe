import React, { useState } from 'react';
import style from '../login_input_form/login_input_form.module.css';
const LoginInputForm = ({handleSubmit, submitContent, checkValid, inputValidation}) => {
    console.log(inputValidation)
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
            className={style.inputPassWord}
            placeholder='Password'></input>            
        </div>
        
        <button 
        type="submit" 
        className={`${inputValidation?'style.submitButton':'style.disableSubmit'}`}>
        {submitContent}
        </button>
    </form>
    );
};

export default LoginInputForm;