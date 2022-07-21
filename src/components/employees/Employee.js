import { Link } from "react-router-dom"

export const Employee = ({ id, fullName, email}) => {
    return <section className="employee" >
    <div>
        <Link to={`/employees/${id}`}><strong>Name:</strong>{fullName}</Link>
    </div>
    <div> <strong>Email: </strong> {email}</div>
</section>
}