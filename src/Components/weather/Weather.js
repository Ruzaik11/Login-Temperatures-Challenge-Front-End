import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import styles from "./Weather.module.css";
import Moment from 'moment';

const Weather = (props) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [loader, setLoader] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("logged-user"));
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getMyWeatherHistory();
  }, [count]);

  const getMyWeatherHistory = () => {
    setLoader(true);

    const config = {
      headers: { Authorization: `Bearer ${loggedUser.token}` },
    };

    console.log("Fetching weather Api");
    axios
      .get(BASE_URL + "/api/weather/history", config)
      .then((response) => {
        console.log("Fetched weather Api");
        console.log(response.data.data);
        setWeather(response.data.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log("Error on weather Api");
        alert("Something Went Wrong");
      });
  };

  const getHottestWeatherHistory = () => {
    setLoader(true);

    const config = {
      headers: { Authorization: `Bearer ${loggedUser.token}` },
    };

    console.log("Fetching weather Api");
    axios
      .get(BASE_URL + "/api/weather/history?hottest_first=true", config)
      .then((response) => {
        console.log("Fetched weather Api");
        console.log(response.data.data);
        setWeather(response.data.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log("Error on weather Api");
        alert("Something Went Wrong");
      });
  };

  return (
    <div className="container">
      <div className="row pull-right">
        <div className="col-md-12 ">
          <button onClick={getHottestWeatherHistory} type="button" className="btn btn-danger">
            Hottest First
          </button>
          <button onClick={getMyWeatherHistory}
            style={{ marginLeft: "20px" }}
            type="button"
            className="btn btn-primary ml-5"
          >
            Reset Order
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>
            <b>Melbourne</b>
          </h2>
          <div className="row mt-lg-2">
            {loader ? (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            ) : (
              weather.map((item) => {
                return (
                    (item.city=='Melbourne')?(''):(
                        <React.Fragment>
                        <div className="col-md-6">
                          <p> { Moment(item.date).format('LLLL') } </p>
                        </div>
                        <div className="col-md-3">
                          <p>{item.celcius} °C</p>
                        </div>
                        <div className="col-md-3">
                          <p>{item.farenheit} °F</p>
                        </div>
                      </React.Fragment>
                    )
                );
              })
            )}
          </div>
        </div>
        <div className="col-md-6">
          <h2>
            <b>New York</b>
          </h2>
          <div className="row mt-lg-2">
            {loader ? (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            ) : (
              weather.map((item) => {
                return (
                    (item.city=='New York')?(''):(
                        <React.Fragment>
                        <div className="col-md-6">
                          <p> { Moment(item.date).format('LLLL') } </p>
                        </div>
                        <div className="col-md-3">
                          <p>{item.celcius} °C</p>
                        </div>
                        <div className="col-md-3">
                          <p>{item.farenheit} °F</p>
                        </div>
                      </React.Fragment>
                    )
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
