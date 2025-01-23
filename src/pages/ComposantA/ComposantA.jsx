import React, { use } from "react";
import { infoContext } from "../../App";

export default function ComposantA({ fetchCocktails }) {
  const cocktails = use(fetchCocktails());
  const data = use(infoContext);

  console.log(data);

  return (
    <>
      <h3>Composant A</h3>
      <ul>
        {cocktails.map(({ name, _id }) => (
          <li key={_id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
