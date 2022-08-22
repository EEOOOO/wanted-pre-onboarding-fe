import React, { useState } from 'react';
import style from '../login_input_form/login_input_form.module.css';
const LoginInputForm = ({handleSubmit, submitContent, checkValid, inputValidation}) => {
    
    return (
    <form className={style.inputForm} onSubmit={handleSubmit} onKeyDown ={checkValid}>
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
        {console.dir(inputValidation)}
        <button type="submit" className={style.submitButton}>{submitContent}</button>
    </form>
    );
};

export default LoginInputForm;