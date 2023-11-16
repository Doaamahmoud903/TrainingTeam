import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/homePage';
import InstructorPortalPage from './Pages/InstructorPortal/instructorPortalPage';
import UserStudents from './Components/Users/UserStudents';
import AddUserDetails from './Components/Users/AddUserDetails';
import UploadCertificate from './Components/Users/UploadCertificate';
import Users from './Components/Users/Users';






function App() {
	return (
		<div className="App">
		
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/instructor" element={<InstructorPortalPage />} />
				<Route path="/users/students" element={<UserStudents />} />
				<Route path="/users" element={<Users />} />
				<Route path="/adduser" element={<AddUserDetails />} />
				<Route path="adduser/uploadcertificate" element={<UploadCertificate />} />
			</Routes>
		</div>
	);
}

export default App;
