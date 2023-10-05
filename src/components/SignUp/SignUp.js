import "./SignUp.css";

export default function SignUp(props) {
  const { id, label, onChange, ...inputProps } = props;
  return (
    <>
      <div className="signUp" > 
        <label>{label}</label>
        <br />
        <input {...inputProps} onChange={onChange} />
      </div>
    </>
  );
}
