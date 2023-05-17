import React, { useContext } from "react";
import { Context } from "../index";
import AdminNavbar from "./adminNavbar";
function AdminProfilePage(){
const {admin}=useContext(Context)
    return(<>
    <AdminNavbar />
    <div className="card">
        <h1>
        {admin.name}
        </h1>
        <p>{admin.email}</p>
        </div>
    </>)

}

export default AdminProfilePage