export default function Login(props) {
    const {id, label, onChange, ...inputProps} = props
    return (
        <>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
        </>
    )
}