function ListCars(props) {
    return (
        <div>
            <h1>This is listcars component. we have the following cars:</h1>
            <ul>
                { props.cars.map(function(car) { return <li>{car.id} {car.brand} {car.name} {car.year} {car.origin}</li> }) }
            </ul>
        </div>   
    )
}

export default ListCars