import React from 'react';
import style from '../login_input_form/login_input_form.module.css';
const LoginInputForm = ({handleSubmit}) => {
    return (
    <form className={style.inputForm} onSubmit={handleSubmit}>
        <div className={style.email}>
            <label className={style.titleEmail}>Email</label>
            <input 
            type="text" 
            className={style.inputEmail} 
            placeholder='Email'></input>
        </div>
        <div className={style.password}>
            <label className={style.titlePassword}>Password</label>
            <input 
            type="text" 
            className={style.inputPassWord}
            placeholder='Password'></input>            
        </div>
        <button type="submit" className={style.submitButton}>submit</button>
    </form>
    );
};

export default LoginInputForm;