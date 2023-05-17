import React, { useEffect, useState, useContext } from "react";
import AdminNavbar from "./adminNavbar";
import axios from "axios";
import { Context } from "../index";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function AdminHomePage() {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated, loading, admin } = useContext(Context);
  const [applied, setApplied] = useState([]);
  const [formData, setFormData] = useState({
    description: "",
    role: "",
    salary:0 ,
    branch: "",
    deadline: "",
    active:false
  });

  const fetchPost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/company/all/", {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();

    try {
        console.log(formData)
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/company/update/${id}`,
        formData,
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick= async (e,id)=>{
    e.stopPropagation();
    try{
        const response= await axios.delete(`http://localhost:4000/api/v1/company/del/${id}`,
        {
            withCredentials:true,
        })
        console.log(response)
        toast.success(response.data.message);
    }
    catch(err){
        console.log(err)
    }
  }
  
    return (
      <>
     
        <AdminNavbar />
        <div className="container">
          <h1 className="text-center mt-3">
            Hello {admin.name}
          </h1>
          {posts.map((company) => {
            return (
              <div key={company._id} className="card m-4">
                <div className="card-body">
                  <h5 className="card-title">{company.name}</h5>
                  <form onSubmit={(event) => handleSubmit(event, company._id)}>
                    <input
                      className="form-control mb-2"
                      placeholder="Description of Company"
                      defaultValue={company.description }
                    //   value={formData.description}
                      onChange={handleChange}
                      name="description"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Role"
                      defaultValue={company.role }
                    //   value={formData.role}
                      onChange={handleChange}
                      name="role"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Branch Requirement"
                      defaultValue={company.branch }
                    //   value={formData.branch}
                      onChange={handleChange}
                      name="branch"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Package per annum"
                      defaultValue={company.salary }
                    //   value={formData.branch}
                      onChange={handleChange}
                      name="salary"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Deadline"
                      defaultValue={new Date(company.timeline).toLocaleDateString()}
                    //   value={formData.deadline}
                      onChange={handleChange}
                      name="deadline"
                    />
                    <input 
                        className="form-control mb-2"
                      placeholder="Active"
                      defaultValue={company.active}
                    //   value={formData.deadline}
                      onChange={handleChange}
                      name="active"
                    />
                    <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary">Update</button>
                    <button onClick={(event) => handleClick(event, company._id)} className="btn btn-primary">Delete</button>
                    </div>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  
}

export default AdminHomePage;