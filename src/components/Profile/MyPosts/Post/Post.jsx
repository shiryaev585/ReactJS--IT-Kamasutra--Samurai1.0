import React from "react";
import Button from "../../../common/Button/Button";
import classes from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yQruEZozdBpH--2cCH9jQzkgVcEplyfOGg&usqp=CAU"
        alt="img"
      />
      {props.message}
      <div className={classes.likesWrp}>
        <Button>Like</Button>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
