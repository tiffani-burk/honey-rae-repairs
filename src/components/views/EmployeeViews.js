    import { Outlet, Route, Routes } from "react-router-dom"
    import { TicketContainer } from "../tickets/TicketContainer.js"
import { EmployeeList } from "../employees/EmployeeList.js"

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

      
            </Route>
        </Routes>
    )
}