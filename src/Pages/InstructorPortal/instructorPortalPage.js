import React from 'react';
import HeaderTitle from '../../Components/Global/HeaderTitle';
import './instructorPortalStyle.css';
import InstructorPortalInfo from '../../Components/InstructorPortal/InstructorPortalInfo';

function InstructorPortalPage() {
	return (
		<>
			<div className="container my-5">
				<HeaderTitle title={'Instructor Portal'} />
			</div>
			<section>
				<InstructorPortalInfo />
			</section>
		</>
	);
}

export default InstructorPortalPage;
