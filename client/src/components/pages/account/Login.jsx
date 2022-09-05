import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <strong>Success!</strong> Success Login!
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
                    placeholder="Email address or phone number"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="login-btn-container">
                  <button
                    className="login-btn"
                    style={{ cursor: `pointer` }}
                    onClick={async () => {
                      var fd = new FormData();

                      fd.append("email", email);
                      fd.append("password", password);

                      var result = await fetch(
                        "http://localhost:5000/auth/login",
                        {
                          method: "POST",
                          body: fd,
                        }
                      );
                      var data = await result.json();
                      console.log(data);
                      if (
                        data.err === `Invalid Password!` ||
                        data.err === `User Not Found!`
                      ) {
                        localStorage.removeItem("jtoken");
                        setIsErr(true);
                        setIsCorrect(false);
                      } else {
                        localStorage.setItem(`jtoken`, data.accessToken);
                        setIsErr(false);
                        setIsCorrect(true);
                        window.location = "/";
                        // console.log(data.accessToken);
                      }
                    }}
                  >
                    Log In
                  </button>
                </div>
              </div>

              <div className="forgotten-password">
                <Link to="/">Forgotten Password?</Link>
              </div>

              <div className="divider"></div>

              <div className="" style={{ textAlign: "center" }}>
                <Link className="crt-new-ac" to="/register">
                  Create New Account
                </Link>
              </div>
            </div>
            <div className="crt-page">
              <a href="#">Create a Page</a>
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
              <p>اردو</p>
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

export default Login;
