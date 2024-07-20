import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const CreateContact = () =>{
    const {store,actions} =useContext(Context);
    const [fullName, setFullName] =useState("")


    return(

        <div>
            
            <button onClick={()=>actions.handleSendData(fullName, email, phone, address)}></button>


        </div>
    )
}