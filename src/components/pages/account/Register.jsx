import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  return (
    <>
      {isErr ? (
        <div class="alert alert-danger">
          <strong>Error!</strong> Invalid Login!
        </div>
      ) : (
        ""
      )}
      {isCorrect ? (
        <div class="alert alert-success">
          <strong>Error!</strong> Invalid Login!
        </div>
      ) : (
        ""
      )}
      <div className="fix-m-header">
        <img src="./assets/cell-phone.png" alt="Android" />
        <span>Get Facebook for Android and browse faster</span>
      </div>
      <div className="container-fluid login-container">
        <div className="content">
          <div className="left-content">
            <div className="f-logo">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                alt="Facebook"
              />
            </div>
            <h2 className="f-quote">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>

          <div className="right-content">
            <div className="card">
              <div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="username"
                    onChange={(event) => setUsername(event.target.value)}
                    required
                    minLength="3"
                    maxLength="20"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    maxLength="20"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    minLength="4"
                  />
                </div>

                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(event) => setCpassword(event.target.value)}
                  />
                </div>
                <div className="login-btn-container">
                  <button
                    className="login-btn"
                    type="submit"
                    onClick={async () => {
                      var fd = new FormData();
                      if (password === cpassword) {
                        fd.append("username", username);
                        fd.append("email", email);
                        fd.append("password", password);

                        var result = await fetch(
                          "https://codebookserver.herokuapp.com/auth/register",
                          {
                            method: "POST",
                            body: fd,
                          }
                        );

                        var data = await result.json();
                        setIsErr(false);
                        setIsCorrect(true);
                        window.location = "/";
                        //  console.log(data);
                      } else {
                        setIsErr(true);
                        setIsCorrect(false);
                        console.log(`Passworad are not same`);
                      }
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="forgotten-password">
                <Link to="">
                  <span>Forgotten Password?</span>
                </Link>
              </div>

              <div className="divider"></div>

              <div className="" style={{ textAlign: "center" }}>
                <Link className="crt-new-ac" to="/login">
                  Log In to Account
                </Link>
              </div>
            </div>
            <div className="crt-page">
              <p href="#">Create a Page</p>
              <span>for a celebrity, band or business.</span>
            </div>
          </div>
        </div>
      </div>
      <footer class="f-lg-footer">
        <ul>
          <li>
            <p>English (UK)</p>
          </li>
          <li>
            <p>বাংলা</p>
          </li>
          <li>
            <p>हिन्दी</p>
          </li>
          <li>
            <p>اردو</p>
          </li>
          <li>
            <p>नेपाली</p>
          </li>
          <li>
            <p>ଓଡ଼ିଆ</p>
          </li>
          <li>
            <p>Español</p>
          </li>
          <li>
            <p>Português (Brasil)</p>
          </li>
          <li>
            <p>Français (France)</p>
          </li>
          <li>
            <p>Deutsch</p>
          </li>
          <li>
            <p>Italiano</p>
          </li>
        </ul>
      </footer>
      <div class="divider"></div>
      <div class="m-footer">
        <div class="m-f-lang">
          <ul>
            <li>
              <p>English (UK)</p>
            </li>
            <li>
              <p>বাংলা</p>
            </li>
            <li>
              <p>हिन्दी</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>"اردو</p>
            </li>
            <li>
              <p>नेपाली</p>
            </li>
            <li>
              <p>ଓଡ଼ିଆ</p>
            </li>
          </ul>
        </div>

        <div style={{ clear: "both" }}></div>

        <div class="links" style={{ textAlign: "center" }}>
          <p>About</p>
          <p>Help</p>
          <p>More</p>
        </div>

        <div
          style={{
            fontWeight: 600,
            textAlign: "center",
            margin: "10px 0",
            color: "#777",
          }}
        >
          Facebook Inc
        </div>
      </div>
    </>
  );
};

export default Register;
