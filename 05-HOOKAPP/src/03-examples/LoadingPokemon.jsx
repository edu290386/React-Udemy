import { Spinner } from "react-bootstrap";

export const LoadingPokemon = () => {
  return (
    <div> <span className="m-4 " style={{ color: "red", fontSize: "18px" }}>
    <Spinner animation="border" role="status" />
    Loading...
  </span></div>
  )
}
