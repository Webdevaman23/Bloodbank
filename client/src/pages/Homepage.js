import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/layout/Layout";

function Homepage() {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      <Layout />
      {error && <span>{alert(error)}</span>}
      {loading ? <Spinner /> : <h1>Homepage</h1>}
    </>
  );
}

export default Homepage;
