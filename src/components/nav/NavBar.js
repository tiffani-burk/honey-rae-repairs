
import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
      //defining our current user
       const localHoneyUser = localStorage.getItem("honey_user")//getting hojney user obj from local storage
       const honeyUserObject = JSON.parse(localHoneyUser) //converting the string of the localHoneyUser to an object
   
       if(honeyUserObject.staff){
           //return employee view
           return <EmployeeNavBar />
       }
       else {
           //return customer view
           return <CustomerNavBar />
       }

}

