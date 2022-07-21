import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
    const {employeeId} = useParams()
    const [employee, updateEmployee] = useState({})

    useEffect(
        ()=>{
            fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`)
            .then(response => response.json())
            .then((data) => {
                const singleEmployee = data[0]
                updateEmployee(singleEmployee)
            })
        }, 
        [employeeId]
    )

    return <section className="employee">
        <header><h3> Employee Details </h3>  </header>
            <div><strong> Name: </strong>{employee?.user?.fullName}  </div>
            <div><strong>Email: </strong>{employee?.user?.email}</div>
            <div><strong>Specialty:  </strong>{employee.specialty}</div>
            <div><strong>Rate:  </strong>${employee.rate}</div>
     <footer> Currently working on service ticket #{employee?.employeeTickets?.length} </footer>
    </section>
}