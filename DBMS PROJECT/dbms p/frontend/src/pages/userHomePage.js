import React, { useEffect, useState, useContext } from "react";
import UserNavbar from "./userNavbar";
import axios from "axios";
import { Context } from "../index";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function UserHomePage() {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated, loading, user } = useContext(Context);
  const [applied, setApplied] = useState([]);

  const fetchPost = async () => {
    try {
      console.log(isAuthenticated)
      const response = await axios.get("http://localhost:4000/api/v1/company/all", {
        withCredentials: true,
      });
      setPosts(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const clickHandler = async (event, id,branch) => {
    event.stopPropagation();
    try {
      if(user.branch===branch){
      const {data} = await axios.put(`http://localhost:4000/api/v1/company/${id}`, {},{
        withCredentials: true,
      });
    //   console.log(response.data);
      toast.success(data.message);
      setApplied((prevState) => [...prevState, id]);}
      else{
        toast.error("required branch is not there")
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  // if (!isAuthenticated) return <Navigate to={"/userLogin"} />;
  if(posts&&posts.length>0){
    
  return (
    <>
      <UserNavbar />
      <div className="container">
  <h1 className="text-center mt-3">Welcome {user.name}</h1>
  <div className="row">
    {posts.map((company) => {
      if (company.active) {
        const alreadyApplied = applied.includes(company._id);
        const deadlineDate = new Date(company.timeline).toLocaleDateString();
        return (
          <div key={company._id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{company.name}</h4>
                <p className="card-text">{company.description}</p>
                <ul className="list-unstyled">
                  <li><strong>Role:</strong> {company.role}</li>
                  <li><strong>Branch required:</strong> {company.branch}</li>
                  <li><strong>Package(per annum):</strong> {company.salary}</li>
                  <li><strong>Deadline:</strong> {deadlineDate}</li>
                </ul>
                <button
                  className="btn btn-primary"
                  onClick={(event) => clickHandler(event, company._id,company.branch)}
                  disabled={alreadyApplied}
                >
                  {alreadyApplied ? "Applied" : "Apply"}
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    })}
  </div>
</div>

    </>
  );}
  else{
    return(<>
    <UserNavbar />
      <h1 className="text-center mt-3">Welcome {user.name}</h1>
      <p>Sorry, currently no company is hiring</p>
    </>)
  }
}

export default UserHomePage;



