
export const getImagen = async() => {

    try {

        const apiKey = 'tD5ETZAxIU61RoM0XqW7DV3IVN0zOzB3';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        console.error(error)
        return "No se encontró la imagen"
    }
    
    
    
}

 getImagen();



