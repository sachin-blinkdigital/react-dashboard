import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      Page Not Found
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
}
