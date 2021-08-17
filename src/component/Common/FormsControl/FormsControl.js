import formControlStyle from "./FormControl.module.css";

const FormsControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError && formControlStyle.elementError}>
      {props.children}
      {hasError && <span className={formControlStyle.textError}>{meta.error}</span>}
    </div>
  );
}

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  debugger
  return <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormsControl {...props}><textarea {...input} {...restProps}/></FormsControl>
}