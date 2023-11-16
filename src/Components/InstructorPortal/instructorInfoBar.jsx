import React from 'react';

function InstructorInfoBar({ data }) {
	return (
		<div className="row text-capitalize p-5 bg-black bg-opacity-25 rounded g-3">
			<div className="col-12 col-lg-4">
				<div className="d-flex gap-2 align-items-center">
					<div className="instructor-info-squire rounded fs-1 shadow ">1</div>
					<h4>Upcoming Exams</h4>
				</div>
			</div>
			<div className="col-12 col-lg-4">
				<div className="d-flex gap-2 align-items-center">
					<div className="instructor-info-squire rounded fs-1 shadow ">1</div>
					<h4>Ongoing Exams</h4>
				</div>
			</div>
			<div className="col-12 col-lg-4">
				<div className="d-flex gap-2 align-items-center">
					<div className="instructor-info-squire rounded fs-1 shadow ">1</div>
					<h4>Completed Exams</h4>
				</div>
			</div>
		</div>
	);
}

export default InstructorInfoBar;
