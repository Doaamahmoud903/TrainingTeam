import React from "react";
import { Link } from 'react-router-dom';
import HeaderTitle from "../Global/HeaderTitle";
import MainSideBar from "../Global/MainSideBar";
import Search from "../Global/Search";
import UsersInfo from "./UserInfo";
import MainNavbar from '../Global/MainNavbar';
import UpperNav from '../Global/UpperNav';
import PaginationBar from '../Global/PaginationBar';
import Footer from '../Global/Footer';



const UsersStudent= () =>{
    return(
      <>
      <UpperNav />
			<MainNavbar />
      <div className="container">
        <HeaderTitle title={'Admin Panel'} />
        <aside className="button-create-section-1 d-flex justify-content-end">
            <Link type="button" className="btn btn-primary text-white rounded" 
            style={{marginBottom : "5rem"}} to="/adduser">CREATE NEW
              USER</Link>
          </aside>
        <div className="row">
          <MainSideBar />

      <div className=" col-9">
        <div className="mt-3">
          <div>
            <Search placeholder={'Search in Users '} />
            <h5 className="text-white">Users - Students</h5>
            <hr style={{border:" 1px solid #bf9b30", width: "150px",opacity:"1"}}></hr>
            <div className="linear lin1 mt-2"></div>
          </div>

          <div className="row text-white mt-5 ms-3">
            <div className="col-md-3 ms-3">
              <h6>Name</h6>
            </div>
            <div className="col-md-2 ms-3">
              <h6>Position</h6>
            </div>
            <div className="col-md-2 ms-3">
              <h6>Status</h6>
            </div>
            <div className="col-md-2 ms-3 ">
              <h6>Posted At</h6>
            </div>
            <div className="col-2"></div>
          </div>
          <UsersInfo status={'Active'} role={'Student'} userId={'1520'} username={'Ahmed'}/>
          <UsersInfo status={'Active'} role={'Student'} userId={'1200'} username={'Mohammed'}/>
          <UsersInfo status={'In Active'} role={'Student'} userId={'1200'} username={'Mahmoud'}/>
        </div>
      </div>
      </div>
      </div>

      <PaginationBar />
			<Footer />
      </>
    )

}
export default UsersStudent;