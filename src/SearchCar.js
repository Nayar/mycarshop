function SearchCar(props) {
    return <div>
        <h1>This is search car component</h1>
        <input type="text" placeholder="filter" onChange={props.onChange}></input>
    </div>
}
export default SearchCar
