import React from 'react'
// import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <table className="table mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><i className="fas fa-edit" > </i>  <i className="fas fa-trash-alt"></i> </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Home