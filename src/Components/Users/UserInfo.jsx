import React from "react";

const UsersInfo =({status , role, userId,username}) =>{
return(
    <div className="row bg-black bg-opacity-25 text-white mt-4 div-5 h-25 ms-3 rounded">
    <div className="col-md-3 mt-4 ms-3">
      <p>{username}</p>
    </div>
    <div className="col-md-2 mt-4 ms-3">{userId}</div>
    <div className="col-md-2 mt-3 ms-3">
        <a type="button" className=" btn btn-primary rounded-5 text-white mb-3"
        href="#" style={{width :"90px"}}>{status}</a></div>

    <div className="col-md-2 mt-4 ms-3">
      <p>{role}</p>
    </div>
    <div className="col-2 my-4 mr-auto div-icon">
      <i className="far fa-edit mainColor" style={{fontSize:"20px",}}></i>
      <i className="far fa-trash-alt ms-1 mainColor" style={{fontSize:"20px",}}></i>
    </div>
  </div>
)
}
export default UsersInfo