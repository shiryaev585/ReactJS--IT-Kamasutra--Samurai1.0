import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.scss";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog + " " + classes.active}>
      <img
        className={classes.dialog__img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yQruEZozdBpH--2cCH9jQzkgVcEplyfOGg&usqp=CAU"
        alt="img"
      />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
