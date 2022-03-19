import React from "react";
import PaginatedTable from "./components/PaginatedTable";
import rows from "./dessertsData.json";

const columns = [
  "Dessert (100g serving)",
  "Calories",
  "Fat&nbsp;(g)",
  "Carbs&nbsp;(g)",
  "Protein&nbsp;(g)",
];

function App() {
  return (
    <div>
      <PaginatedTable columns={columns} />
    </div>
  );
}

export default App;
