import React, { useState } from "react";

function Body() {
  const [fileName, setFileName] = useState("No file chosen");

  function handleFileChoose(event) {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  }

  return (
    <div className="body">
      <div className="heading">Readact: Your Data Protector</div>
      <div className="files">
        <div className="inside-files">
          <div className="input">
            <div className="icons">
              <i className="bi bi-filetype-pdf"></i>
              <i className="bi bi-arrow-right-short"></i>
              <i class="bi bi-file-earmark-lock"></i>
            </div>
            <input
              type="file"
              id="file-input"
              className="file-input"
              onChange={handleFileChoose}
            />
            <label htmlFor="file-input" className="file-input-label">
              CHOOSE FILES
            </label>
            <span className="file-name">{fileName}</span>
          </div>
        </div>
      </div>
      <div className="scale">
        <button className="high">HIGH</button>
        <button className="medium">MEDIUM</button>
        <button className="low">LOW</button>
      </div>
    </div>
  );
}

export default Body;
