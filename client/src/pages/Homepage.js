import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/layout/Layout";

function Homepage() {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (<Spinner />) : (
        <>
          <div className="container">
            <h4 className="ms-4">
            <i className="fa-solid fa-plus text-success py-4"></i>
              Add Inventory
            </h4>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Homepage;
