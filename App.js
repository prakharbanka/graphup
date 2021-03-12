import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [myfile, setfile] = useState(null);
  const onChange = (e) => {
    setfile(e.target.files[0]);
  };

  const handle = (e) => {
    console.log(myfile);
    let a = new FormData();
    a.append("file", myfile);
    a.append("name", myfile.name);
    console.log(a);

    axios({
      url: "/postfile",
      method: "POST",
      data: a,
    }).then(
      (res) => {},
      (err) => {}
    );
  };

  return (
    <div className="App">
      <div className="upload_Box">
        <input type="file" name="file" onChange={(e) => onChange(e)} />
        <button onClick={(e) => handle(e)}>upload</button>
      </div>
    </div>
  );
}

export default App;
