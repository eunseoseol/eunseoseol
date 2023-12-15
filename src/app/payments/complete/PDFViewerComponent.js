import React from 'react';
import { Document, Page } from '@react-pdf/renderer';



export default function PDFViewerComponent() {
  return (
    <div>
      <Document file="/book.pdf">
        <Page pageNumber={3} />
      </Document>
    </div>
  );
}
