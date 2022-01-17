import React from 'react';
import Input from '../Input/Input';
import classes from './FormButton.module.scss';

const FormButton = props => {
  return (
    <div className={classes.button_wrapper}>

      <div className="d-flex mt-3">
        <Input  input = {{              
          type: 'checkbox',
        }}/>
        
        <p>
          By creating an account, you agree to the <u><b>Terms &amp; Conditions.</b></u>
        </p>
      </div>
      <button type={props.type} className={classes.button} onClick={props.onClick}>
        Create Account
      </button>
    </div>
    
  );
};

export default FormButton;
