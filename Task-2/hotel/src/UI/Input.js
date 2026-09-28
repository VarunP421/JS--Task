import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={classes.formGroup}>
            <label htmlFor={props.id} className={classes.label}>
                {props.label}
            </label>
            <input
                name={props.id}
                className={classes.input}
                type={props.type}
                id={props.id}
                min={props.min}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;
