
const Destructuring = () => {

    const persona = {
        nombre: "Tony",
        edad:45,
        clave: "Iron Man",
        latlng: {lat:14.1233,lng:-12.2323}
    }

    // const {nombre:nombre2} = persona
    // console.log(nombre2)
    const {nombre,edad, latlng:{lat,lng}}=persona
    console.log({nombre,edad})
    console.log(nombre, edad)
    console.log(lat,lng)

  return (
    <div>Destructuring</div>
  )
}

export default Destructuring