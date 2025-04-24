function ListCars(props) {
    const allcars = props.cars
    const filteredcars = allcars.filter(car => car.brand.includes(props.filter))
    if(props.filter.includes("@")){
        throw new Error("@ is entered")
    }
    return (
        <div>
            <h1>This is listcars component. we have the following cars:</h1>
            <ul>
                { filteredcars.map(function(car) { 
                    return <li>{car.id} {car.brand} {car.name} {car.year} {car.origin}</li> }) 
                }
            </ul>
        </div>   
    )
}

export default ListCars