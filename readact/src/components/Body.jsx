import React, { useState } from "react";

function Body() {
  const [fileName, setFileName] = useState("No file chosen");
  const [isFileChosen, setIsFileChosen] = useState(false);
  const [selectedScale, setSelectedScale] = useState("high"); // Set "high" as default
  const [homePage, setHomePage] = useState(true);
  const [file, setFile] = useState(null); // To store the chosen file

  function handleFileChoose(event) {
    const chosenFile = event.target.files[0];
    if (chosenFile) {
      setFile(chosenFile);
      setFileName(chosenFile.name);
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
    setFile(null); // Clear the stored file
  }

  function handleScaleChange(scale) {
    setSelectedScale(scale);
  }

  function handleConvert() {

    console.log("Enter");

    if (!file || !isFileChosen) {
      alert("Please choose a file and scale.");
      return;
    }
    console.log("After condition");
    console.log("File :",file);
    console.log("Scale: ",selectedScale);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("level", selectedScale);

    console.log("After formData");

    fetch("http://localhost:5000/analyze", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.blob())
      .then((blob) => {
        console.log("Enter blob");
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "redacted_file.pdf"); // File name to download
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        setHomePage(false); // Navigate to the next page
      })
      .catch((error) => console.error("Error:", error));
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
                  onClick={handleConvert}
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
          <button className="convert" onClick={handleConvert}>DOWNLOAD AGAIN</button>
          <button className="convert" onClick={() => setHomePage(true)}>
            BACK TO HOME PAGE
          </button>
        </>
      )}
    </div>
  );
}

export default Body;
