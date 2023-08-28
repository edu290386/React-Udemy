export const BioPokemon = ({ sprites, id, name }) => {
  return (
    <div>
      <blockquote className="blockquote text-center m-4">
        <img
          className="m-4"
          src={sprites.other.dream_world.front_default}
          alt=""
          width="300"
          height="250"
        />
        <p className="mb-2">POKEMON N°{id}</p>
        <footer className="blochquote-footer">
          NAME: {name.toUpperCase()}
        </footer>
      </blockquote>
    </div>
  );
};
