import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Dashboard.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Dashboard = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.auth.current);
  React.useEffect(() => {
    document.title = "Dashboard | Couchsurfers";
  }, []);
  const handleCountry = (country) => {
    history.push(`/country/${country}`);
  };
  console.log(currentUser);
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.dashboard__container}>
        <div className={styles.dashboard__container__left}>
          <div>
            <div>
              {" "}
              <h3>
                {currentUser.first_name} {currentUser.last_name}
              </h3>
              <p>Delhi, India</p>
            </div>
            <div className={styles.dashboard__container__left__hr}></div>
            <div>
              <select>
                <option value="">Accepting Guest</option>
                <option value="">Maybe Accepting Guest</option>
                <option value=""> Accepting Guest</option>
              </select>
            </div>
          </div>
          <div>
            <h3>MY PROFILE</h3>
            <div className={styles.dashboard__container__left__hr}></div>
            <div className={styles.dashboard__container__left__graph}>
              <img src="https://i.imgur.com/gx5qf6i.png" alt="logo" />
            </div>
            <h5>Complete My Profile</h5>
          </div>
          <div>
            <p>
              Find my Facebook friends <br /> on Couchsurfing:
            </p>
            <button>
              <img src="https://i.imgur.com/i1d8pPG.png" alt="facebook" />
            </button>
          </div>
        </div>
        <div>
          <div className={styles.dashboard__container__right}>
            <div>
              <div className={styles.dashboard__container__right__logo}>
                {" "}
                <img src="https://i.imgur.com/TkZ3kB9.png" alt="logo" />
                <h4> EXPLORE ANCIENT CIVILIZATIONS WITH COUCHSURFERS...</h4>
              </div>
              <div className={styles.dashboard__container__right__hr}></div>
              <div className={styles.dashboard__container__right_image}>
                <div onClick={() => handleCountry("India")}>
                  <h3>India</h3>
                  <p>600+ hosts</p>
                </div>
                <div onClick={() => handleCountry("USA")}>
                  <h3>USA</h3>
                  <p>100+ hosts</p>
                </div>
                <div onClick={() => handleCountry("Germany")}>
                  <h3>Germany</h3>
                  <p>1600+ hosts</p>
                </div>
              </div>
              <div className={styles.dashboard__container__right__search}>
                <p>Find hosts wherever I’m going:</p>{" "}
                <input type="text" placeholder="Where are you going?" />
              </div>
            </div>
          </div>
          <div className={styles.dashboard__container__right}>
            <div>
              <div className={styles.dashboard__container__right__logo}>
                {" "}
                <img src="https://i.imgur.com/qpnKUCF.png" alt="logo" />
                <h4> MY TRAVEL PLANS</h4>
              </div>
              <div className={styles.dashboard__container__right__hr}></div>
              <div className={styles.dashboard__container__right__logo__plans}>
                <p>You have no upcoming trips.</p>
              </div>
              <div className={styles.dashboard__container__right__hr}></div>
              <div
                className={
                  styles.dashboard__container__right__logo__plans__links
                }
              >
                <p>Create a Public Trip</p> <p>My Public Trips</p>
                <p> My Couch Requests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
