import React from "react";
import Form from 'react-bootstrap/Form';
import HeaderTitle from "../Global/HeaderTitle";
import MainSideBar from "../Global/MainSideBar";
import MainNavbar from '../Global/MainNavbar';
import UpperNav from '../Global/UpperNav';
import PaginationBar from '../Global/PaginationBar';
import Footer from '../Global/Footer';
import { Link } from "react-router-dom";

const AddUserDetails=()=>{
return(
    <>
    <UpperNav />
	<MainNavbar />
    <div className="container">
        <HeaderTitle title={'Create New User'} />
        <div style={{marginBottom : "5rem"}}></div>
     <div className="row">
     <MainSideBar />
     <div className=" col-9">
        <div className="mt-3 ms-4">
            <h5 className="text-white">Add User Details</h5>
            <hr style={{border:" 1px solid #bf9b30", width: "150px",opacity:"1"}}></hr>
            <div className="linear lin1 mt-2"></div>
        </div>
          <div className="float-end" style={{marginTop: "-21px"}} >
           <a type="button" className="btn btn-primary rounded-2 text-white mb-3 " href="#" 
           style={{fontSize: "15px", width: "110px"}} > PUBLISH</a>
         </div> 

   <div className="row mt-5 ms-4">
     <Form className="text-white text-capitalize row">
      <Form.Group className="mb-3 col-md-4" controlId="formFirstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control className="bgGray border-0 rounded px-2" type="text"/>
      </Form.Group>

      <Form.Group className="mb-3 col-md-4" controlId="formLastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control className="bgGray border-0 rounded" type="text" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-4"> 
      <Form.Label>Status</Form.Label>
      <Form.Select style={{height:"37px"}} className="rounded content1 border-0 text-white" aria-label="select example">
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form.Group> 

    <Form.Group className="mb-3 col-md-8" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" className="rounded bgGray border-0 text-white"/>
    </Form.Group>  

    <Form.Group className="mb-3 col-md-4"> 
      <Form.Label>Role</Form.Label>
      <Form.Select style={{height:"37px"}} className="rounded content1 border-0 text-white" aria-label="select example">
      <option value="1">Student</option>
      <option value="2">Admin</option>
      <option value="3">Instructor</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" className="rounded bgGray border-0 text-white"/>
    </Form.Group> 
    <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" className="rounded bgGray border-0 text-white"/>
    </Form.Group> 

    <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" className="rounded bgGray border-0 text-white"/>
    </Form.Group> 
    <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" className="rounded bgGray border-0 text-white"/>
    </Form.Group>

    <Form.Group className="mb-5 col-md-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Score</Form.Label>
        <Form.Control type="text" className="rounded bgGray border-0 text-white"/>
    </Form.Group>

    <div class="container-sm  mt-5 d-flex justify-content-end ms-3">
          <Link type="button" class=" btn  bg-secondary rounded-1 text-white me-4" href="#" 
          style={{opacity: "0.8",width: "120px"}}>CANCEL</Link>
          <Link type="button" class=" btn btn-primary rounded-1 text-white " to="#" 
          style={{width: "120px"}}>SAVE</Link>
          
    </div>


    </Form>
    </div>
</div>
</div>
   </div>


   <Footer />
 </>
)
}
export default AddUserDetails