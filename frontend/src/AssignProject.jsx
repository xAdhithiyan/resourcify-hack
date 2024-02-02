import { useEffect, useState } from 'react';
import SideDash from './smallerComponents/SideDash';
import TableCreation from './smallerComponents/TableCreation';

function AssignProject() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('http://localhost:3000/employee', requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log('Error');
      })
      .then((data) => {
        console.log('Success:', data);
        setEmployeeData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex bg-gray-300 h-screen">
      <SideDash />
      <div className="flex justify-center items-center  w-full p-4">
        {' '}
        {/* Add padding to the container */}
        <table className="w-4/5 bg-white border-2 border-black  shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 border-b-2 border-black">
            <tr>
              <th className="py-2 px-4">Id</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Designation</th>
              <th className="py-2 px-4">Grade</th>
              <th className="py-2 px-4">Project</th>
              <th className="py-2 px-4">Start Date</th>
              <th className="py-2 px-4">End Date</th>
              <th className="py-2 px-4">Edit</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((i) => (
              <TableCreation
                key={i.id || i.name}
                uniqueId={i._id}
                uniqueKey={i.employeeId}
                uniqueName={i.name}
                designation={i.designation}
                grade={i.grade}
                projectName={i.projectName}
                joinDate={i.joinDate}
                endDate={i.endDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignProject;
