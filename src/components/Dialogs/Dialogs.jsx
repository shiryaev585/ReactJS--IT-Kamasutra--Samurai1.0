import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.scss";
import { Redirect } from "react-router";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d, index) => (
    <DialogItem name={d.name} key={index} id={d.id} />
  ));
  let messagesElements = state.messages.map((m, index) => (
    <Message message={m.message} key={index} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.dialogs__messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
