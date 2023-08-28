import { useCounter, useFetch } from "../hooks";
import { BioPokemon, LoadingPokemon, Buttons } from "./";

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
          <LoadingPokemon />
        ) : (
          <BioPokemon sprites={sprites} id={id} name={name} />
        )}
      </div>
      <Buttons
        increment={() => increment()}
        decrement={() => decrement()}
        reset={reset}
      />
    </div>
  );
};
