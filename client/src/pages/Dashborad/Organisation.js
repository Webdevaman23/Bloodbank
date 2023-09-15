import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/layout/Layout'
import API from '../../services/API';
import moment from 'moment';

const Organisation = () => {
    const [data, setData] = useState([]);

    // find organisation profiles
    const getOrganisation = async () => {
      try {
        const { data } = await API.get("/inventory/get-organisations");
        //   console.log(data);
  
        if (data?.success) {
          setData(data?.organisations);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getOrganisation();
    }, []);
  
    return (
      <Layout>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.organisationName}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    );
}

export default Organisation