import InputComponent from "./InputComponent"

function Form(props) {
    const handlesubmit = function(event) {
        event.preventDefault();
        console.log(event.target.getElementsByTagName('input'))
        for (const item of event.target.getElementsByTagName('input')) {
            console.log(item.value)
          }

    }

    return (
    <form onSubmit={handlesubmit}>
        <InputComponent name="name" type="text" label="Name"></InputComponent>
        <InputComponent name="age" type="number" label="Age"></InputComponent>
        <InputComponent name="email" type="email" label="Email"></InputComponent>
        <InputComponent name="address" type="text" label="Address"></InputComponent>
        <InputComponent name="phone" type="text" label="Phone"></InputComponent>
        <button type="submit">Submit</button>
    </form>)
}
export default Form