import { useEffect, useState } from "react"
import { Employee } from "./Employee"
import "./employees.css"

// set the initial state, then in the initial state useEffect, fetch all employees from the API, then the JSX will rendor the name and email of the employees 
export const EmployeeList = () => {
    //set up intial state variable
    const [employees, setEmployees] = useState([])

    //set up a useEffect to watch for initial state and fetch the employees
    useEffect(
        () => {
             fetch(`http://localhost:8088/users?isStaff=true`) //add querystring param to check give back only users that meet the condition "isStaff=true"
                .then(response => response.json())
                .then((employeeArray) => {
    setEmployees(employeeArray)  //update state variable and pass it the employeeArray
    })
        },
    []
    )
//return JSX
//we need a unique react key, since we are iterating. 
return <>
<h3>Employee List:</h3>
    <article className="employees-list">
        { 
            employees.map(employee => <Employee 
                key={`employee--${employee.id}`}
                id={employee.id} 
                fullName={employee.fullName} 
                email={employee.email} />)
        }
    </article>

</>
}