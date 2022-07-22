import { Link } from "react-router-dom"

export const Employee = ({ id, fullName, email}) => {
    return <section className="employee" >
    <div>
    <strong>Name:</strong> {fullName} 
    </div>
    <div> <strong>Email: </strong> {email}</div>
    <Link to={`/employees/${id}`}>View Employee Details</Link>
</section>
}