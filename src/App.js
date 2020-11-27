import React, { Component } from "react";
import { ReactReader } from "react-reader";

class App extends Component {
  render() {
    return (
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        {" "}
        {/* Container needs a height.. */}
        <ReactReader
          url={"/alice.epub"}
          title={"Alice in wonderland"}
          location={0}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    );
  }
}

export default App;
