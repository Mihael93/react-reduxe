// import React, { Component } from 'react';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
   //let data store
   let state = props.dialogsPage;

   //let elements to make HTML
   let dialogsElements = state.dialogsData.map((dialog) => {
      return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
   });
   let messagesElements = state.messagesData.map((mes) => {
      return <MessageItem key={mes.id} id={mes.id} message={mes.message} />
   })
   let newMessageBody = state.newMessageBody;

   //get referance for symbols insert
   const messageElement = React.useRef();

   let sendMessage = () => {
      props.sendMessage();
   }

   let onNewMessageChange = (event) => {
      let body = event.target.value;
      props.updateNewMessageBody(body);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogs__items}>
            <span>Dialogs</span>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
         <div>Use messgaes here =&gt;&gt;&gt;&gt;&gt;</div>
         <div>
            <textarea
               onChange={onNewMessageChange}
               placeholder="Enter message"
               ref={messageElement}
               value={newMessageBody} />
            <div>
               <button onClick={sendMessage}>Send</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;
