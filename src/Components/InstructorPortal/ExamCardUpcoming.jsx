import React from 'react';

function ExamCardUpcoming({ data }) {
	return (
		<div className="d-flex gap-3 p-3 text-light">
			<div className="text-uppercase bg-black bg-opacity-75 pb-1 rounded-bottom">
				<h5 className="mb-0 px-3">7th</h5>
				<h5 className="mb-0 px-3">Jun</h5>
				<h5 className="mb-0 px-3 bg_primary rounded-bottom">Wed</h5>
			</div>

			<div className="">
				<h4>introduction to react js</h4>
				<p className="m-0">
					<span className="text_primary">Instructor:</span> Tariq Ali
				</p>

				<div className="d-flex justify-content-between align-items-end">
					<h6 className="mb-0">LEV.{data?.level} exam</h6>

					<h6 className="mb-0">
						<i class="fa-regular fa-clock fa-lg me-2 text-secondary"></i>
						12:30 PM
					</h6>
				</div>
			</div>
			
			<div className="clickable text_primary">
				<i class="fa-solid fa-pen-to-square fa-lg mt-3"></i>
			</div>
		</div>
	);
}

export default ExamCardUpcoming;
