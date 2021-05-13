import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <main>
      <div className="wrapperFileUpload">
        <input type="file" className="btn" accept="image/x-png,image/gif,image/jpeg" />
        <span><button className="btn btn-primary">
          Upload
        </button></span>
      </div>
    </main>
  );
};

export default Home;