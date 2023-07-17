// import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Axios from "../helper/Axios";

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function onSubmit(sendingData) {
    try {
      const axiosConfig = {
        url: "/api/foo",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify(sendingData),
      };
      console.log(JSON.stringify(sendingData));
      const response = await Axios(axiosConfig);
      const data = await response.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  return (
    <>
      <Container>
        <h1 className="heading">Register</h1>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={4} sm={12}>
              <div className="group-data">
                <span className="label">Enter First Name</span>
                <input
                  type="text"
                  {...register("fName", {
                    required: {
                      value: true,
                      message: "First name is required",
                    },
                    pattern: { value: /^(\D+)$/, message: "no digits" },
                  })}
                ></input>
                {errors.fName && (
                  <p className="error">{errors.fName?.message}</p>
                )}
                {errors.fName?.type === "pattern" && (
                  <p className="error">{errors.fName?.pattern?.message}</p>
                )}
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="group-data">
                <span className="label">Enter Last Name</span>
                <input
                  type="text"
                  {...register("lName", {
                    required: { value: true, message: "Last name is required" },
                    pattern: { value: /^(\D+)$/, message: "no digits" },
                  })}
                ></input>
                {errors.lName && (
                  <p className="error">{errors.lName?.message}</p>
                )}
                {errors.lName?.type === "pattern" && (
                  <p className="error">{errors.lName?.pattern?.message}</p>
                )}
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="group-data">
                <span className="label">Enter Age</span>
                <input type="text" {...register("age")}></input>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} sm={12}>
              <div className="group-data">
                <span className="label">Enter Email</span>
                <input
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Address is required",
                    },
                    pattern: { value: /^\S+@\S+$/, message: "invalid email" },
                  })}
                ></input>
                {errors.email && (
                  <p className="error"> {errors.email?.message}</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="error">{errors.email?.pattern?.message}</p>
                )}
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="group-data">
                <span className="label">Enter Mobile Number</span>
                <input
                  type="text"
                  {...register("mobile", {
                    required: {
                      value: true,
                      message: "Mobile number is required",
                    },
                    pattern: { value: /^\d{10}$/, message: "10 digits only" },
                  })}
                ></input>
                {errors.mobile && (
                  <p className="error">{errors.mobile?.message}</p>
                )}
                {errors.mobile?.type === "pattern" && (
                  <p className="error">{errors.mobile?.pattern?.message}</p>
                )}
                {errors.mobile?.type === "minLength" && (
                  <p className="error">{errors.mobile?.minLength?.message}</p>
                )}
                {errors.mobile?.type === "maxLength" && (
                  <p className="error">{errors.mobile?.maxLength?.message}</p>
                )}
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="group-data">
                <span className="label">Enter Password</span>
                <input
                  type="password"
                  {...register("pass", {
                    required: { value: true, message: "Password is required" },
                    pattern: {
                      value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                      message: "atleast 1 uppercase,1 lowercase,1 digit",
                    },
                  })}
                ></input>
                {errors.pass && <p className="error">{errors.pass?.message}</p>}
                {errors.pass?.type === "pattern" && (
                  <p className="error">{errors.pass?.pattern?.message}</p>
                )}
              </div>
            </Col>
          </Row>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </Container>
    </>
  );
}

// email regex /^\S+@\S+$/
// ?=. for atleast one
