import React,{useState} from "react";
import AdminNavbar from "./adminNavbar";
import axios from "axios";
import toast from "react-hot-toast";
function CreateNew(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [role,setRole]=useState("");
    const [branch,setBranch]=useState("");
    const [salary,setSalary]=useState();
    const [pocEmail,setPocEmail]=useState("");
    const [timeline,setTimeline]=useState("");
    const [loading,setLoading]=useState(false);
    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "http://localhost:4000/api/v1/company/new",
            {
              name,
              description,
              role,
              salary,
              branch,
              pocEmail,
              timeline,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
    
          toast.success(data.message);
          setName("")
          setBranch("")
          setSalary()
          setDescription("")
          setPocEmail("")
          setRole("")
          setTimeline("")
          setLoading(false);
        } catch (error) {
          toast.error(error.response.data.message);
         
          setLoading(false);
        }
      };


  return (
    <>
      <AdminNavbar />
      <div className="container" style={{marginTop:"30px"}}>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="description" placeholder="Enter description"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <input value={role} onChange={(e)=>setRole(e.target.value)} type="text" className="form-control" id="role" placeholder="Enter role" />
          </div>
          <div className="mb-3">
            <label htmlFor="branch" className="form-label">Branch</label>
            <input value={branch} onChange={(e)=>setBranch(e.target.value)} type="text" className="form-control" id="branch" placeholder="Enter branch" />
          </div>
          <div className="mb-3">
            <label htmlFor="package per annum" className="form-label">Package(per annum)</label>
            <input value={salary} onChange={(e)=>setSalary(e.target.value)} type="number" className="form-control" id="salary" placeholder="Enter package" />
          </div>
          <div className="mb-3">
            <label htmlFor="timeline" className="form-label">Timeline</label>
            <input value={timeline} onChange={(e)=>setTimeline(e.target.value)} type="date" className="form-control" id="timeline" placeholder="Enter timeline" />
          </div>
          <div className="mb-3">
            <label htmlFor="pocEmail" className="form-label">POC Email</label>
            <input value={pocEmail} onChange={(e)=>setPocEmail(e.target.value)} type="email" className="form-control" id="salary" placeholder="Enter email" />
          </div>
          <button disabled={loading} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreateNew;
