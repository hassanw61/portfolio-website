import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function CurriculumVitaeCV() {
	const [numPages, setNumPages] = React.useState(null);
	const [pageNumber, setPageNumber] = React.useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div>
			<iframe className="w-full h-[90vh]" src="/assets/documents/Faiq-Nadeem-CV.pdf" />
			{/* <Document file="/assets/documents/Faiq-Nadeem-CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document> */}
		</div>
	);
}

export default CurriculumVitaeCV;
