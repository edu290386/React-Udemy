import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  console.log(images);

  return (
    <div className="card-grid">
      {images.map(({id, title, url}) => (
        <div className="card" key={id}>
          <img src={url} alt="" />
        </div>
      ))}
    </div>
  );
};
