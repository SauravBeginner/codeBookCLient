import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [uname, setUname] = useState("");
  const [user, setUser] = useState({});

  const getUser = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      var resp = await fetch("http://localhost:5000/user/finduser", {
        headers: {
          Token: "Bearer " + token,
        },
      });

      var data = await resp.json();
      //console.log(data);
      setUname(data.username);
      setUser(data);
      setIsLogin(true);

      if (data.err) {
        window.location = "/login";
      }
    } else {
      setUname("");
      setUser("");
      setIsLogin(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <header className="header">
        <div className="logoSearch">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo mr-3">
              <i className="fab fa-facebook-f"></i>
            </div>
          </Link>
          <div className="search">
            <div className="svg">
              <img src="../svg/search.svg" alt="Search" />
            </div>
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>

        <div className="mainMenu">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="svg active">
              <img src="../svg/home.svg" alt="Facebook Home" srcset="" />
            </div>
          </Link>
          <div className="svg">
            <img src="../svg/tv.svg" alt="Facebook Watch" srcset="" />
          </div>
          <div className="svg">
            <img src="../svg/store.svg" alt="Facebook Store" srcset="" />
          </div>
          <div className="svg">
            <img src="../svg/users.svg" alt="Facebook Groups" srcset="" />
          </div>
          <div className="svg">
            <img src="../svg/map.svg" alt="Facebook Play" srcset="" />
          </div>
        </div>

        <div className="profileTools">
          {isLogin ? (
            <Link
              to={`/profile/${user._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="profile">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${
                      user.profilePicture
                        ? user.profilePicture
                        : "../assets/person/noAvatar.png"
                    })`,
                  }}
                ></div>
                <span className="username">{uname}</span>
              </div>
            </Link>
          ) : (
            ""
          )}
          <div className="tools">
            <div className="svg">
              <img src="../svg/plus.svg" alt="Add" />
            </div>
            <div className="svg">
              <img src="../svg/blackberry-messenger.svg" alt="Messages" />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="svg">
              <img src="../svg/bell.svg" alt="Notifications" />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="svg">
              <img src="../svg/down-arrow.svg" alt="Dropdown" />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
