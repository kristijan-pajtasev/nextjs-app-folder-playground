"use client" // must be client side
export default function Error({
                                error,
                                reset,
                              }) {
  console.log(error, reset)

  return (
    <div>
      <h2>Something went wrong in the todo details page!</h2>
    </div>
  );
}