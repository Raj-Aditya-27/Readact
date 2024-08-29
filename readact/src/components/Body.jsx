import React from "react";

function Body() {
  return (
    <div className="body">
      <div className="heading">Readact: Your Data Protector</div>
      <div className="files">
        <div className="inside-files">
          <div className="input">
            <div className="icons">
              <i className="bi bi-file-earmark-image"></i>
              <i className="bi bi-arrow-right-short"></i>
              <i className="bi bi-filetype-pdf"></i>
            </div>
            {/* <input type="file" name="file" id="file" /> */}
            <input type="file" id="file-input" class="file-input" />
            <label for="file-input" class="file-input-label">
              CHOOSE FILES
            </label>
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
