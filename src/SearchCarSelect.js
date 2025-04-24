function SearchCarSelect(props){
    return (
    <div>
        <h1>SearchCarSelect</h1>
        <select onChange={props.onChange}>
            { props.cars.map(function(car) {return <option value={car.brand}>{car.brand}</option>}) }
        </select>
    </div>)
}

export default SearchCarSelect