import { Route, Routes } from "react-router-dom";
import ContactMe from "./views/ContactMe";
import CoverLetter from "./views/CoverLetter";
import Sidebar from "./views/partials/Sidebar";
import Intro from "./views/Intro";

function App() {
	return (
		<div className="App h-screen flex flex-col md:flex-row">
			{/* Sidebar */}
			<div className="bg-[#AC4949] shadow-md overflow-y-auto w-full md:fixed md:top-0 md:left-0 md:h-screen md:w-[20%]">
				<Sidebar />
			</div>

			{/* Routes content */}
			<div className="flex-1 p-6 overflow-y-auto md:ml-[20%]">
				<Routes>
					<Route path="/*" element={<Intro />} />
					<Route path="contact-me" element={<ContactMe />} />
					<Route path="cover-letter" element={<CoverLetter />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
