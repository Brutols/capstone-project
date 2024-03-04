import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const [timer, setTimer] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
          navigate("/")
        }, 5000)
    }, [])

    useEffect(() => {
      let countDown = setInterval(() => {setTimer(timer - 1)}, 1000)
        
      return () => {clearInterval(countDown)}
    }, [timer])

  return (
    <div>
      This page does not exists! You will be redirected in {timer} <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default ErrorPage;
