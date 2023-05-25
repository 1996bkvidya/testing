 import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [change, setChange] = useState(false);
  const [test, setTest] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => {
        setTest(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="row w-100">
      {test.map((res) => {
        return (
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/flags/${res.name.common.toLowerCase()}`);
                  }}
                >
                  {res.name.common}
                </h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
