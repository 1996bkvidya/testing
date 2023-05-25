import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function Flag() {
  const [test, setTest] = useState([]);
  const params = useParams();

  console.log(params, "parms");
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${params.country}`)
      .then((res) => {
        setTest(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.country]);
  return (
    <div className="row">
      {test.map((res) => {
        return (
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={res.flags.png}
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">{res.name.common}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Flag;
