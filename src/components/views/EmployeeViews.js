    import { Outlet, Route, Routes } from "react-router-dom"
    import { TicketContainer } from "../tickets/TicketContainer.js"
import { EmployeeList } from "../employees/EmployeeList.js"
import { EmployeeDetails } from "../employees/employeeDetails.js"
import { Customerlist } from "../customers/CustomerList.js"
import { CustomerDetails } from "../customers/CustomerDetails.js"

    export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketContainer />} />
                <Route path="employees" element={ <EmployeeList />} />
                <Route path="employees/:employeeId" element={ <EmployeeDetails /> } />
                <Route path="customers" element={ <Customerlist />} />
                <Route path="customers/:customerId" element={ <CustomerDetails/> }></Route>


      
            </Route>
        </Routes>
    )
}

//after establishing Routes for the imported components, make sure to pair them to the "to" in the Link in the EmployeeNavBar