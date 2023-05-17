import React, { useEffect, useState, useContext } from "react";
import UserNavbar from "./userNavbar";
import axios from "axios";
import { Context } from "../index";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function PocViewPage() {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated, loading, user } = useContext(Context);
  const [applied, setApplied] = useState([]);
  const [formData, setFormData] = useState({
    description: "",
    role: "",
    branch: "",
    salary: 0 ,
    deadline: "",
    active:false,
  });

  const fetchPost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/poc/all", {
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

  if (posts && posts.length > 0) {
    return (
      <>
        <UserNavbar />
        <div className="container">
          <h1 className="text-center mt-3">
            Hello {user.name}, here are the companies you are POC for:
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
                      defaultValue={company.description}
                      // value={formData.description}
                      onChange={handleChange}
                      name="description"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Role"
                      defaultValue={company.role}
                      // value={formData.role}
                      onChange={handleChange}
                      name="role"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Package(per annum)"
                      defaultValue={company.salary}
                      // value={formData.role}
                      onChange={handleChange}
                      name="salary"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Branch Requirement"
                      defaultValue={company.branch}
                      // value={formData.branch}
                      onChange={handleChange}
                      name="branch"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Deadline"
                      defaultValue={new Date(company.timeline).toLocaleDateString()}
                      // value={formData.deadline}
                      onChange={handleChange}
                      name="deadline"
                    />
                    <input
                      className="form-control mb-2"
                      placeholder="Active"
                      defaultValue={company.active}
                      // value={formData.deadline}
                      onChange={handleChange}
                      name="active"
                    />
                    <button className="btn btn-primary">Update</button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <UserNavbar />
        <h1 className="text-center mt-3">
          You are not POC for any company
        </h1>
      </>
    );
  }
}

export default PocViewPage;



