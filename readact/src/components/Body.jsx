import React, { useState } from "react";

function Body() {
  const [fileName, setFileName] = useState("No file chosen");
  const [isFileChosen, setIsFileChosen] = useState(false);
  const [selectedScale, setSelectedScale] = useState("high"); // Set "high" as default
  const [homePage, setHomePage] = useState(true);

  function handleFileChoose(event) {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setIsFileChosen(true);
    } else {
      setFileName("No file chosen");
      setIsFileChosen(false);
    }
  }

  function handleFileRemove() {
    setFileName("No file chosen");
    setIsFileChosen(false);
    document.getElementById("file-input").value = ""; // Reset the input value
    setSelectedScale("high");
  }

  function handleScaleChange(scale) {
    setSelectedScale(scale);
  }

  return (
    <div className="body">
      {homePage && (
        <>
          <div className="heading">Readact: Your Data Protector</div>
          <div className="files">
            <div className="inside-files">
              <div className="input">
                <div className="icons">
                  <i className="bi bi-filetype-pdf"></i>
                  <i className="bi bi-arrow-right-short"></i>
                  <i className="bi bi-file-earmark-lock"></i>
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
                <span className="file-name">
                  {fileName}{" "}
                  {isFileChosen && (
                    <span onClick={handleFileRemove}>
                      <i className="bi bi-x-circle"></i>
                    </span>
                  )}
                </span>
                <button
                  className="convert"
                  style={{ visibility: isFileChosen ? "visible" : "hidden" }}
                  onClick={()=>setHomePage(false)}
                >
                  CONVERT
                </button>
              </div>
            </div>
          </div>
          <div className="scale">
            <button
              className={`high ${
                isFileChosen && selectedScale === "high" ? "selected" : ""
              }`}
              onClick={() => handleScaleChange("high")}
            >
              HIGH
            </button>
            <button
              className={`medium ${
                isFileChosen && selectedScale === "medium" ? "selected" : ""
              }`}
              onClick={() => handleScaleChange("medium")}
            >
              MEDIUM
            </button>
            <button
              className={`low ${
                isFileChosen && selectedScale === "low" ? "selected" : ""
              }`}
              onClick={() => handleScaleChange("low")}
            >
              LOW
            </button>
          </div>
        </>
      )}

      {!homePage && (
        <>
          <button className="convert">DOWNLOAD</button>
          <button className="convert" onClick={()=>setHomePage(true)}>BACK TO HOME PAGE</button>
        </>
      )}
    </div>
  );
}

export default Body;
