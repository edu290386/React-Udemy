const Promises = () => {
  const apiKey = "tD5ETZAxIU61RoM0XqW7DV3IVN0zOzB3";
  const url = `api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
  
  const petition = fetch(`https://63dc3850c45e08a04356e2c8.mockapi.io/Todo`)
  petition
    .then((resp) => resp.json())
    .then(({data}) => {
      const {url} = data.images.original;
      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
    })
    .catch(console.warn);

    // const getImagen = async () => {
    //  try {
    //   const resp = await fetch(`https://63dc3850c45e08a04356e2c8.mockapi.io/Todo`)
    //   const {data} = await resp.json()
    //   const {url} = data.images.original;
    //     const img = document.createElement("img");
    //     img.src = url;
    //  } catch (e) {
    //   console.warn(e) 
    // }
  return <div>Promises</div>;
};

export default Promises;
