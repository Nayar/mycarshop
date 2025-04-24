import InputComponent from "./InputComponent"

function Form(props) {
    return (
    <form>
        <InputComponent name="name" type="text" label="Name"></InputComponent>
        <InputComponent name="age" type="number" label="Age"></InputComponent>
        <InputComponent name="email" type="email" label="Email"></InputComponent>
        <button type="submit">Submit</button>
    </form>)
}
export default Form