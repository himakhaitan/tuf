import React, { useEffect, useState } from "react";
import Navigation from "components/Nav";
import axios from "axios";
import "./styles/App.css";
import CodeEditorWindow from "widgets/CodeEditorWindow";
import Stdin from "widgets/Stdin";
// import Stdout from "widgets/Stdout";
import { languageOptions } from "constants/languageOptions";

function App() {
  const [code, setCode] = useState();
  const [language, setLanguage] = useState(languageOptions[0]);
  const [customInput, setCustomInput] = useState("");
  const [userName, setUsername] = useState("user");

  const onSelectChange = (sl) => {
    setLanguage(sl);
  };

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const onSubmit = async () => {
    let data = {
      code: code,
      language: language.value,
      stdin: customInput,
      username: userName,
    };

    console.log(data);
    try {
      const response = await axios.post(
        `https://tuf-adil.onrender.com/submissions/new`,
        data
      );
      alert("Code Submitted!")
      console.log("Server response:", response.data);
      return response.data; // Return the response data if needed
    } catch (error) {
      console.error("Error posting data:", error);
      throw error; // Throw the error for handling elsewhere
    }
  };

  return (
    <div className="App">
      <Navigation
        language={language}
        onChange={onSelectChange}
        userName={userName}
        setUsername={setUsername}
      />
      <div className="mainContent">
        <div className="left">
          <CodeEditorWindow
            onChange={onChange}
            language={language?.value}
            code={code}
          />
        </div>
        <div className="right">
          <div>
            <h3 className="landingHeader">stdin</h3>
            <Stdin customInput={customInput} setCustomInput={setCustomInput} />
          </div>
          <div>
            <div className="button" onClick={onSubmit}>
              Submit
            </div>
            <a href="/submissions">
              <div className="button">
                View Submissions
              </div>
            </a>
          </div>
          <div>
            {/* <h3 className="landingHeader">stdout</h3> */}
            {/* <Stdout /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
