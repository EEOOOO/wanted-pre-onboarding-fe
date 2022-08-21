import React from 'react';
import style from '../login_input_form/login_input_form.module.css';
const LoginInputForm = ({handleSubmit, submitContent}) => {
    return (
    <form className={style.inputForm} onSubmit={handleSubmit}>
        <div className={style.email}>
            <input 
            type="text" 
            className={style.inputEmail} 
            placeholder='Email'></input>
        </div>
        <div className={style.password}>
            <input 
            type="text" 
            className={style.inputPassWord}
            placeholder='Password'></input>            
        </div>
        <button type="submit" className={style.submitButton}>{submitContent}}</button>
    </form>
    );
};

export default LoginInputForm;