import React from "react";

const PaginationBar = () =>{
 return (
 <div className="container justify-content-end d-flex text-white mt-5 "
    style={{marginLeft: "55px", fontSize: "1.2rem",}}>
    <div className="row">
      <div className=" border border-warning rounded-circle col-md-1"><i className="fas fa-chevron-left"
          style = {{marginLeft: "-6px", color:  "#f1c40fca"}}></i></div>
      <div className=" col-md-1" style={{marginLeft: "-5px"}}>1</div>
      <div className=" col-md-1" style={{marginLeft: "-5px"}}>2</div>
      <div className=" col-md-1" style={{marginLeft: "-5px"}}>3</div>
      <div className=" col-md-1 me-3" style={{marginLeft: "-5px"}}>.....</div>
      <div className=" col-md-1 border border-warning rounded-circle "><i className="fas fa-chevron-right"
          style={{marginLeft: "-6px", color:  "#f1c40fca"}}></i></div>
    </div>
 </div>
  )
}
export default PaginationBar