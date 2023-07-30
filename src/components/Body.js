import React from "react";
import logo from "../images/logo192.png"

const points = ["Was first released in 2013","Was originally created by Jorden Walke","Has well over 100K Stars on Github","It is maintained by Google","Powers thousands of enterprise apps, including mobile phones"
]

export default function Body(){
    return(
        <div className="body">
            <div className="body-heading">
                <h1>Fun facts about React</h1>
            </div>
            <div className="body-img-points">
                <ul className="body-ul">
                    {points.map((elem) => <li>{elem}</li>)}
                </ul>
                <img src={logo} alt="Reactlogo"></img>
            </div>
                
        </div>
    )
}