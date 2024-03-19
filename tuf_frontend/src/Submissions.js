import Navigation from "components/Nav";
import "styles/Submissions.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Record = ({ timestamp, code, stdin, language, username }) => {
  return (
    <div className="record">
      <div className="record_main">
        <p className="record_text">{timestamp}</p>
        <p className="record_text">{username}</p>
        <p className="record_text">{language}</p>
      </div>

      <div className="record_code">
        <textarea>{code}</textarea>
        <textarea>{stdin}</textarea>
      </div>
    </div>
  );
};

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tuf-adil.onrender.com/submissions/all"
        );
        setSubmissions(response.data.data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation isEditor={false} />
      <div className="submissions">
        <h3>Submissions</h3>
        {submissions.map((item) => {
          console.log(item);
          return (
            <Record
              key={item.id}
              code={item.code}
              username={item.username}
              timestamp={item.entry_timestamp}
              stdin={item.stdin}
              language={item.language}
            />
          );
        })}
      </div>
    </>
  );
};

export default Submissions;
