// import React, { Component } from 'react';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

   let dialogsElements = props.data.dialogsData.map((dialog) => {
      return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
   });

   let messagesElements = props.data.messagesData.map((mes) => {
      return <MessageItem key={mes.id} id={mes.id} message={mes.message} />
   })

   const messageElement = React.useRef();

   function sendMessage() {
      let text = messageElement.current.value;
      console.log(text);
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
         <div>Use messgaes here =`&gt &gt`</div>
         <div>
            <textarea name="" id="" cols="10" rows="5" ref={messageElement}></textarea>
            <div>
               <button onClick={sendMessage}>Send</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;
