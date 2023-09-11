import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { base64CV } from "../assets/data/cv";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import { BiCloudDownload } from "react-icons/bi";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function CurriculumVitaeCV() {
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	const renderAllPages = () => {
		const pages = [];
		for (let i = 1; i <= numPages; i++) {
			pages.push(<Page key={i} pageNumber={i} width={1000} renderTextLayer={false} />);
		}
		return pages;
	};

	const handleDownloadPDF = () => {
		const fileName = "Faiq-Nadeem-CV.pdf";

		const byteCharacters = atob(base64CV.split(",")[1]);
		const byteNumbers = new Array(byteCharacters.length);
		for (let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
		}
		const byteArray = new Uint8Array(byteNumbers);
		const blob = new Blob([byteArray], { type: "application/pdf" });

		// Create a download link and trigger the download
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = fileName;
		link.click();
	};

	const handleSharePDF = () => {
		// Replace with your share logic
		// You can use a library like react-share or implement your own share functionality here
	};

	return (
		<Transition appear={true} show={true} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100">
			<div className="flex flex-col items-center mt-6 space-y-5 pb-20">
				<div className="w-full flex justify-center items-center space-x-5">
					<div>
						<button
							onClick={handleDownloadPDF}
							className="flex px-3 py-2 space-x-3 items-center bg-[#ac4949] text-white rounded-md hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-[#922b2b] transition-colors duration-300">
							<BiCloudDownload className="text-xl" />
							<p className="text-md font-medium">Download</p>
						</button>
					</div>
					<div>
						<button
							onClick={handleSharePDF}
							className="flex px-3 py-2 space-x-3 items-center bg-[#ac4949] text-white rounded-md hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-[#922b2b] transition-colors duration-300">
							<AiOutlineShareAlt />
							<p className="text-md font-medium">Share</p>
						</button>
					</div>
				</div>
				<div className="shadow-2xl">
					<Document file={base64CV} onLoadSuccess={onDocumentLoadSuccess}>
						{renderAllPages()}
					</Document>
				</div>
			</div>
		</Transition>
	);
}

export default CurriculumVitaeCV;
