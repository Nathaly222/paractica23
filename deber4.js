function validarvehicle(currentYear = 2023) {

    let vehicle = {
        make: 'Audi',
        model: 'R8',
        color: 'negro',
        year: prompt("Ingrese year"),
        licencePlate: 'ABC-456',
    }

    alert(vehicle.make +' '+ vehicle.model +' ' + vehicle.color +' ' + vehicle.year +' ' + vehicle.licencePlate);

    if((currentYear-vehicle.year) < 10){
        alert(Boolean(true))
        return Boolean(true)

    }
    else{
        alert(Boolean(false))
        return Boolean(false)
     }
}
validarvehicle();


