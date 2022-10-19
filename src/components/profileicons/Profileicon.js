import React from "react";
import Viewprofile from "../../pages/Viewprofile";
import classes from "../profileicons/Profileicon.module.css";
const Profileicon = ({ id, name, imgSrc }) => {
  return (
    <div className={classes.Profileicon}>
      <img className={classes.profilepic} src={imgSrc} />
      <div key={id} className={classes.cardText}>
        <h1>{name}</h1>
        <a className={classes.cardButon} href={`Viewprofile/${name}`}>
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Profileicon;
