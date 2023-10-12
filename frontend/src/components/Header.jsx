import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const isUserLoggedIn = () => {
      const token = getCookie('token');
      return !!token;
    };
    setLoggedIn(isUserLoggedIn()); // Kullanıcı giriş yapmışsa loggedIn'i true yap
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 25) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName)) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };
  const token = getCookie('token');
  const userName = getCookie('username');
  const logout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'roles=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/login';
  };

  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg p-3 ${scrolling ? 'scrolling' : ''}`} id="headerNav">
        <div className="container-fluid d-flex">
          <a className="navbar-brand  d-flex" href="/">
            <img src={logo} width={120} />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 d-flex  align-items-center " aria-current="page" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-house-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                  </svg>{' '}
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 d-flex  align-items-center" href="/category">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-film me-2 vertical-align: middle;"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                  </svg>
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 d-flex  align-items-center" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-fire me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                  </svg>
                  Treading
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item ">
                {loggedIn ? (
                  // Kullanıcı giriş yapmışsa kullanıcı adını göster
                  <span className="nav-link mx-2 d-flex align-items-center" onClick={logout}>
                    <button type="button" className="btn join-button">
                      Çıkış Yap
                    </button>
                  </span>
                ) : (
                  // Kullanıcı giriş yapmamışsa "Login" butonunu göster
                  <a href="/login">
                    <button type="button" className="btn join-button">
                      Login
                    </button>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
