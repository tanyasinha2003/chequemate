import "../css/styles.css";
import { useState, useEffect } from "react";
import Axios from "../helper/Axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

export default function Home() {
  const navigate = useNavigate();

  const [passErr, setPassErr] = useState(false);
  const [regErr, setRegErr] = useState(false);
  const [userData, setUserData] = useState({});
  const [nav, setNav] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function onSubmit(loginDetails) {
    try {
      const axiosConfig = {
        url: "/login",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify(loginDetails),
      };

      const response = await Axios(axiosConfig);
      const data = await response.data;
      // console.log(data.recordFound);
      if (data.recordFound === false) {
        setRegErr(true);
      } else if (data.recordFound === true) {
        setRegErr(false);
        if (data.passMatch === false) {
          setPassErr(true);
        } else {
          setUserData(data.userData);

          setPassErr(false);
          setNav(true);
        }
      } else {
        setRegErr(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  if (passErr === false && regErr === false && nav === true) {
    navigate("welcome");
  }

  return (
    <div className="login-wrapper">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="heading">Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)} method="post" action="/welcome">
        <div className="form-wrapper">
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            {...register("email", {
              required: { value: true, message: "Email Required" },
            })}
          ></input>
          {errors.email && <p className="error">{errors.email?.message}</p>}
          {regErr && <p className="error">User not registered</p>}
          <input
            type="password"
            placeholder="Enter Password"
            className="mt"
            name="pass"
            {...register("pass", {
              required: { value: true, message: "Password Required" },
            })}
          ></input>
          {errors.pass && <p className="error">{errors.pass?.message}</p>}
          {passErr && <p className="error">Incorrect Password</p>}

          <button type="submit" className="submit mt">
            Submit
          </button>
        </div>
      </form>
      <Link to="/register" className="link">
        New Here? Register Now
      </Link>
    </div>
  );
}
