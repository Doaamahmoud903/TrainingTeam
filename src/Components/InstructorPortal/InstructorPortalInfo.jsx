import React from 'react';
import InstructorInfoBar from './instructorInfoBar';
import CourseCardOngoing from './CourseCardOngoing';
import CourseCardUpcoming from './CourseCardUpcoming';
import { Link } from 'react-router-dom';
import ExamCardUpcoming from './ExamCardUpcoming';

function InstructorPortalInfo({ data }) {
	return (
		<div className="container text-capitalize d-flex flex-column gap-4">
			<div className="d-flex justify-content-between mb-3">
				<h3>
					welcome Back{' '}
					<span className="text_primary">{` ${data?.firstName || 'sdvsdv'} ${
						data?.lastName || 'dsvsd'
					}`}</span>{' '}
				</h3>

				<button className="btn btn-primary px-3 flex-shrink-0">View Profile</button>
			</div>

			<InstructorInfoBar data={data} />
			<div
				className="d-flex align-items-center gap-2 fs-4 text-uppercase p-4 bg-secondary bg-opacity-25 rounded"
				style={{ width: 'fit-content' }}
			>
				<i class="fa-regular fa-circle-check fa-xl"></i>
				ALL CLEAR, YOU DON'T HAVE ANY EXAMS TODAY.
			</div>

			<div className="row justify-content-between my-5">
				<div className="col-12 col-lg-5 ">
					<div>
						<h3 className="mb-4">Ongoing courses</h3>
						<div className="d-flex flex-column gap-4">
							<CourseCardOngoing data={data} />
							<CourseCardOngoing data={data} />
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-5 mt-5 mt-lg-0">
					<div>
						<div className="d-flex justify-content-between">
							<h3 className="mb-4">Upcoming Exams</h3>
							<Link className="btn btn-primary px-3 height-fit" to="#">
								CREATE NEW
							</Link>
						</div>
						<ExamCardUpcoming data={data} />
					</div>
				</div>
			</div>

			<div>
				<h3 className="mb-4">Ongoing courses</h3>
				<div className="row g-3">
					<div className="col-12 col-lg-6">
						<CourseCardUpcoming data={data} />
					</div>
					<div className="col-12 col-lg-6">
						<CourseCardUpcoming data={data} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default InstructorPortalInfo;
