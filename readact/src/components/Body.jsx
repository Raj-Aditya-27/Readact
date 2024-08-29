import React from "react";

function Body() {
  return (
    <div className="body">
      <div className="heading">Redactify: Your Data Protector</div>
      <div className="files">
        <div className="inside-files">
            <input type="file" name="file" id="file" />
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
