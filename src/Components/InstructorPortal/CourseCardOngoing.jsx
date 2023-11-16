import React from 'react';
import { Link } from 'react-router-dom';

function CourseCardOngoing({ data }) {
	return (
		<div className="card p-3 bg-black bg-opacity-50 text-light">
			<h4>introduction to react js</h4>
			<div className="d-flex justify-content-between align-items-end mt-4">
				<h3 className="mb-0">LEV.{data?.level}</h3>

				<h6 className="mb-0">
					<i class="fa-regular fa-user me-2 text_primary"></i>
					20 students
				</h6>

				<Link className="btn btn-primary px-3" to="#">
					View Details
				</Link>
			</div>
		</div>
	);
}

export default CourseCardOngoing;
