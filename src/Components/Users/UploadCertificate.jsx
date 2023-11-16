import React from "react";
import Form from 'react-bootstrap/Form';
import HeaderTitle from "../Global/HeaderTitle";
import MainSideBar from "../Global/MainSideBar";
import MainNavbar from '../Global/MainNavbar';
import UpperNav from '../Global/UpperNav';
import Footer from '../Global/Footer';
import { Link } from "react-router-dom";
import upload from '../../Images/upload-img.png';

const UploadCertificate =() =>{
return(
    <>
    <UpperNav />
	<MainNavbar />
    <div className="container">
        <HeaderTitle title={'Upload Certificate'} />
        <div style={{marginBottom : "5rem"}}></div>
     <div className="row">
     <MainSideBar />
     <div className=" col-9">
        <div className="mt-3 ms-4">
            <h5 className="text-white">Certificate Details</h5>
            <hr style={{border:" 1px solid #bf9b30", width: "150px",opacity:"1"}}></hr>
            <div className="linear lin1 mt-2"></div>
        </div>

   <div className="row mt-5 ms-4">
     <Form className="text-white text-capitalize row">
     <Form.Group className="mb-3 col-md-4"> 
      <Form.Label>Student Name</Form.Label>
      <Form.Select style={{height:"37px"}} className="rounded content1 border-0 text-white" aria-label="select example">
      <option></option>
      <option value="1">Esraa</option>
      <option value="2">Doaa</option>
      <option value="3">Other</option>
    </Form.Select>
    </Form.Group>

      <Form.Group className="mb-3 col-md-4" controlId="formFirstname">
        <Form.Label>Date Acquired</Form.Label>
        <Form.Control className="bgGray border-0 rounded px-2" type="date"/>
      </Form.Group>

      <Form.Group className="mb-3 col-md-4" controlId="formLastname">
        <Form.Label>Upload Date</Form.Label>
        <Form.Control className="bgGray border-0 rounded" type="date" />
      </Form.Group>

    <Form.Group className="mb-3 col-md-12"> 
      <Form.Label>Courses</Form.Label>
      <Form.Select style={{height:"37px"}} className="rounded content1 border-0 text-white" aria-label="select example">
      <option></option>
      <option value="1">Frontend</option>
      <option value="2">Backend</option>
      <option value="3">Fullstack</option>
    </Form.Select>
    </Form.Group>
        <div className="col-12">
            <h6>Upload Certificate</h6>
            <div className="row  mt-3 ">
                <div className="col-12">
                    <div className="col-12 bg text-center py-4 rounded" style={{border:"1px dashed #bf9b30",backgroundColor:"rgb(28, 27, 27)"}}>
                    <img src={upload} />
                        <h6>Drog & drop files or <span className="mainColor"
                            style={{cursor: "pointer", textDecoration: "underline"}}>Browse</span>
                        </h6>
                        <p style={{fontSize: "14px", color: "gray"}}>Supported formotes:JPEG, PNG, GIF, MP4, PDF, PSD, AL, Word, PPT</p>
                          </div>
                      </div>
            </div>
        </div>

    <div className="container-sm  mt-5 d-flex justify-content-end ms-3">
          <Link type="button" className=" btn  bg-secondary rounded-1 text-white me-4" href="#" 
          style={{opacity: "0.8",width: "120px"}}>CANCEL</Link>
          <Link type="button" className=" btn btn-primary rounded-1 text-white " to="#" 
          style={{width: "120px"}}>UPLOAD</Link>
          
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
export default UploadCertificate