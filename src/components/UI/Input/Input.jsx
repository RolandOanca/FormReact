import classes from './Input.module.scss';


const Input = props => {
    return (
      <div className={classes.input}>
          <label >{props.label}</label>
          <input {...props.input} />
      </div>
    );
};

export default Input;