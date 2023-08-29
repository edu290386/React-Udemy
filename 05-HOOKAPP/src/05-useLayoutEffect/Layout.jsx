import { useCounter, useFetch } from "../hooks";
import { LoadingPokemon, BioPokemon, Buttons } from "../03-examples";

export const Layout = () => {
    const { counter, increment, reset, decrement } = useCounter(10);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  const { id, name, sprites } = !!data && data;

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingPokemon />
      ) : (
        <BioPokemon sprites={sprites} id={id} name={name} />
      )}{" "}
      <Buttons
        increment={() => increment()}
        decrement={() => decrement()}
        reset={reset}
      />
    </>
  );
};
