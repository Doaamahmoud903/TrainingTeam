import React from "react";
import { Link } from 'react-router-dom';

const MainSideBar = ({hide}) =>{
    return (    
  <div className="text-white bg-black bg-opacity-25 rounded pt-4 pb-2 col-3" style={{maxWidth: "18rem"}}>
    <div className="bg-black bg-opacity-25 rounded mx-2 py-1">
        <p className="fs-5 fw-bold ms-3 ">Users</p>
    </div>
    <ul className="mx-3 mb-5 mt-2">
        <li className="list-unstyled">
          <Link className="text-white text-decoration-none text-capitalize" to="/users/admins">Admins</Link>
        </li>
        <li className="list-unstyled">
          <Link className="text-white text-decoration-none text-capitalize" to="/users/instractors">Instractors</ Link>
        </li>
        <li className="list-unstyled">
          <Link className="text-white text-decoration-none text-capitalize" to="/users/students">Students</Link>
        </li>
    </ul>
  <div className="bg-black bg-opacity-25 rounded mx-2 py-1">
    <p className="fs-5 fw-bold ms-3">Articles</p>
  </div>
    <ul className="mx-3 mb-5 mt-2">
        <li className="list-unstyled">
          <Link className="text-white text-decoration-none text-capitalize" to="/articles/published-articles">Published Articles</Link>
        </li>
        <li className="list-unstyled">
          <Link className="text-white text-decoration-none text-capitalize" to="/articles/schedules-articles">Schedules Articles</Link>
        </li>
        <li className="list-unstyled">
          <Link className="text-white text-decoration-none text-capitalize" to="/articles/saved-drafts">Saved Drafts</Link>
        </li>
    </ul>

  <div className="bg-black bg-opacity-25 rounded mx-2 py-1">
    <p className="fs-5 fw-bold ms-3">Jobs</p></div>
    <ul className="mx-3 mb-5 mt-2">
        <li className="list-unstyled">
          <Link className="text-white text-decoration-none text-capitalize" to="/jobs/published-jobs">Published Jobs</Link>
          </li>
        <li className="list-unstyled">
          <Link className="text-white text-decoration-none text-capitalize" to="/jobs/saved-drafts">Saved Drafts</Link>
          </li>
    </ul>

  <div className="bg-black bg-opacity-25 rounded mx-2 py-1">
    <p className="fs-5 fw-bold ms-3">Courses</p>
  </div>
    <ul className="mx-3 mb-5 mt-2">
                <li className="list-unstyled">
                  <Link className="text-white text-decoration-none text-capitalize" to="/courses/published-courses">Published Courses</Link>
                  </li>
                <li className="list-unstyled">
                  <Link className="text-white text-decoration-none text-capitalize" to="/courses/shedules-courses">Schedules Courses</Link>
                  </li>
                <li className="list-unstyled">
                  <Link className="text-white text-decoration-none text-capitalize" to="/courses/saved-drafts">Saved Drafts</Link>
                  </li>
    </ul>
      <div className="button-card text-center mt-4 mb-4">
        <Link type="button" className="btn btn-primary text-white " style={{width: "80%"}} to="uploadcertificate">
          Update Cretifacules
        </Link>
      </div>
  </div>
     
    )
}
export default MainSideBar