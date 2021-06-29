import React from "react";

export default function FIlterRowsButton() {
  return (
    <select name="rows mr-1" defaultValue={"Default"}>
      <option value="Default" disabled>
        Rows
      </option>
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  );
}
