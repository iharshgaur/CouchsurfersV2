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
  return <></>;
};
export default Dashboard;
