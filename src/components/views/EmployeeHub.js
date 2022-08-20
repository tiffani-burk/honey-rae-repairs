import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./EmployeeHub.css"

export const EmployeeHub = () => {

    //if the id of the user matches the id of the logged in user, rendor their name

    //defining our current user
    const localHoneyUser = localStorage.getItem("honey_user")//getting honey user obj from local storage
    const honeyUserObject = JSON.parse(localHoneyUser) //converting the string of the localHoneyUser to an object

    return (
        <>
            <div className="backOfHub">
            <div className="employHub">
                <div className="hubHeader">
                <h3> Employee Hub</h3>
                </div>
                <div className="theHub">
                    <div className="list">
                    <ul>
                        <li>View Request Tickets</li>
                        <li>View Customer Info</li>
                        <li>View Employee Info</li>
                    </ul>
                    </div>
                    <img className="bizMan" src="./bixMan.gif" alt="" />
                </div>
            </div>
            </div>
        </>
    )
}

