function validarvehicle(currentYear = 2023) {

    let vehicle = {
        make: 'Audi',
        model: 'R8',
        color: 'negro',
        year: '2010',
        licencePlate: 'ABC-456'
    }

    if((currentYear-vehicle.year) < 10){
        alert(Boolean(true))
        return Boolean(true)

    }
    else{
        alert(Boolean(false))
        return Boolean(false)
    }
}

validarvehicle(vehicle);