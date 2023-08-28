

export const Buttons = ({reset, increment, decrement}) => {
  return (
    <div className="text-center">
        <button
          onClick={() => increment()}
          style={{ width: 160 }}
          className="btn btn-primary m-3"
        >
          Next Pokemon
        </button>
        <button
          onClick={reset}
          style={{ width: 160 }}
          className="btn btn-primary m-3"
        >
          Reset
        </button>
        <button
          onClick={decrement}
          style={{ width: 160 }}
          className="btn btn-primary m-3"
        >
          Previous Pokemon
        </button>
      </div>
  )
}
