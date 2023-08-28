import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "react-bootstrap";

export const MultipleCustomHooks = () => {
  const { counter, increment, reset, decrement } = useCounter(10);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const { id, name, sprites } = !!data && data;

  return (
    <div>
      <h1 className="text-center m-4">Pokemon App</h1>
      <div className="text-center">
        {isLoading ? (
          <span className="m-4 " style={{ color: "red", fontSize: "18px" }}>
            <Spinner animation="border" role="status" />
            Loading...
          </span>
        ) : (
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
        )}
      </div>
      <div className="text-center">
        <button
          onClick={() => increment()}
          style={{ width: 160 }}
          className="btn btn-primary m-4"
        >
          Next Pokemon
        </button>
        <button
          onClick={reset}
          style={{ width: 160 }}
          className="btn btn-primary m-4"
        >
          Reset
        </button>
        <button
          onClick={decrement}
          style={{ width: 160 }}
          className="btn btn-primary m-4"
        >
          Previous Pokemon
        </button>
      </div>
    </div>
  );
};
