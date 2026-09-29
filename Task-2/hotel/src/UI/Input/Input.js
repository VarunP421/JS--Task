import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={classes.formGroup}>
            <label htmlFor={props.name} className={classes.label}>
                {props.label}
            </label>
            <input
            className={classes.input}
                {...props}
            />
        </div>
    );
};

export default Input;
