    import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm.js"
import { TicketContainer } from "../tickets/TicketContainer.js"
import { EmployeeViews } from "./EmployeeViews.js"
import { CustomerViews } from "./CustomerViews.js"

 
export const ApplicationViews = () => {

    //defining our current user
    const localHoneyUser = localStorage.getItem("honey_user")//getting hojney user obj from local storage
    const honeyUserObject = JSON.parse(localHoneyUser) //converting the string of the localHoneyUser to an object

    if(honeyUserObject.staff){
        //return employee view
        return <EmployeeViews />
    }
    else {
        //return customer view
        return <CustomerViews />
    }
}