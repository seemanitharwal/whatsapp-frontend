import React from "react";

function AddWorkspace() {
  return (
    <div>
      <h2>Add New Workspace</h2>
      <input type="text" placeholder="Workspace name" />
      <br />
      <input type="file" />
      <br />
      <button>Upload Prompt</button>
      <br />
      <button>Scan WhatsApp QR</button>
    </div>
  );
}

export default AddWorkspace;
