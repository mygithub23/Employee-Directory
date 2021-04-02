import React from "react";
import Employee from "./Employee";


function EmployeeList ({ data }) { // another fancy destructuring to avoid typing props.data.map down below
    return (
        data.map(employee => (
            <EmployeeCard
                key={employee.id}
                image={employee.image}
                name={employee.name}
                dept={employee.department}
                email={employee.email}
                phone={employee.phone}
            />
            ))
    )
}

export default EmployeeList;