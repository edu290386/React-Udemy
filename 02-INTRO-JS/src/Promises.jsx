const Promises = () => {
  const apiKey = "tD5ETZAxIU61RoM0XqW7DV3IVN0zOzB3";
  const url = `api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
  
  const petition = fetch(`https://63dc3850c45e08a04356e2c8.mockapi.io/Todo`);
  petition
    .then((resp) => resp.json())
    .then(({data}) => {
      const {url} = data.images.original;
      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
    })
    .catch(console.warn);

  return <div>Promises</div>;
};

export default Promises;
