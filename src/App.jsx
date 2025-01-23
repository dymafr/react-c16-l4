import React, { lazy, Suspense } from "react";
import styles from "./App.module.scss";
import { createContext } from "react";

export async function fetchCocktails() {
  const response = await fetch("https://restapi.fr/api/acocktails");
  return response.json();
}

export const infoContext = createContext("infos !");

const ComposantA = lazy(
  () =>
    new Promise((res) =>
      setTimeout(() => res(import("./pages/ComposantA/ComposantA")), 3000)
    )
);

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <div className="flex-fill p-20">
        <Suspense fallback={<h3>Chargement...</h3>}>
          <ComposantA fetchCocktails={fetchCocktails} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
