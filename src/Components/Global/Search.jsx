import React from "react";



const Search =({placeholder}) =>{
return(
    <div className="float-end ">
    <input type="search" placeholder={placeholder}
      className="p-1 text-center rounded-5 bg-light bg-opacity-10  border-0 text-white"
      style={{width:"300px", height: "40px", marginTop: "-100px", outline: "none"}}/>
      <i className="fas fa-search "
      style={{marginLeft: "-45px", color: "#f1c40fca"}}></i>
  </div>
)
}
export default Search