import React, { useState, useEffect, useContext } from "react";
import { Context } from "../index";
import axios from "axios";
import UserNavbar from "./userNavbar";

function UserAppliedCompanies() {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated, user } = useContext(Context);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/company/all", {
        withCredentials: true,
      });

      console.log(data);

      const filteredCompanies =await data.result.filter((company) =>
        company.appliedUsers.includes(user._id)
      );
      console.log(filteredCompanies)
      setPosts(filteredCompanies);

      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  };
useEffect(()=>{
    fetchPost()
},[posts])
  

return (
    <>
      <UserNavbar />
      <div className="container mt-5">
        <h1 className="text-center mt-3">Hello {user.name}, here are the companies you've applied to:</h1>
        <div className="card-deck mt-5">
          {posts.map((company) => (
            <div className="card" key={company._id}>
              <div className="card-body">
                <h4 className="card-title">{company.name}</h4>
                <p className="card-text">{company.description}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Role:</strong> {company.role}</li>
                  <li className="list-group-item"><strong>Salary:</strong> {company.salary}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
}

export default UserAppliedCompanies;

