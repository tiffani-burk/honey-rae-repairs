
import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm.js"
import { TicketList } from "../tickets/TicketList.js"
import "./Views.css"

export const CustomerViews = () => {
    return (
        <Routes>

            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>
                    <Outlet />
                </>
            }>

                <Route path="/" element={
                    <>
                        <div className="intro">
                            <div>
                                <img className="hero-img" src="./computer.jpg" alt="" />
                            </div>
                            <div className="intro2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam purus mi, posuere sed porttitor sed, aliquam at neque. Proin dignissim nec eros sit amet aliquam. Aenean laoreet dapibus sem, sit amet consectetur eros cursus vitae. Maecenas scelerisque nisi velit, eu porta mi aliquam nec. Donec fermentum purus massa, ac condimentum velit commodo tincidunt. Nam semper interdum odio, non vulputate nulla faucibus ultricies. Quisque eget consequat enim, vel convallis enim. In in suscipit neque. Mauris vel ipsum ligula. Aenean a erat eget felis congue tempor tempor eu nisi. In eget aliquam tellus, in semper justo. </p>
                                <div className="callBtn">
                                <button className="calltoaction"><strong>Call To Action</strong></button>
                                </div>
                            </div>
                        </div>
                    </>
                } />
                <Route path="tickets" element={<TicketList />} />
                <Route path="ticket/create" element={<TicketForm />} />
            </Route>
        </Routes>
    )
}