import React from "react";

interface PropPreviewPage {
  preview: string;
}

function PreviewPage(props: PropPreviewPage) {
  return (
    <div className="w-1/2 ml-8">
      <h2 className="text-2xl mb-4 text-center font-bold">Preview</h2>
      <div className="bg-gray-100 rounded-md p-4">{props.preview}</div>
    </div>
  );
}

export default PreviewPage;
