import pencil from '../assets/pencil.svg';
import Modal from 'react-modal';
import { useState } from 'react';

// eslint-disable-next-line
function TableCreation({ uniqueId, uniqueKey, uniqueName, designation, grade, projectName, joinDate, endDate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState({
    employeeId: '',
    name: '',
    grade: '',
    DOB: '',
    location: '',
    remote: '',
    projectDetails: '',
    billing: '',
    language: '',
    salary: '',
    remarks: '',
    joinDate: '',
    endDate: '',
    designation: '',
    projectName: '',
    projectId: '',
  });
  function changeValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function editButton(e) {
    let arr = Array.from(e.target.parentNode.parentNode.children);
    let updatedValue = { ...value };
    arr.forEach((item) => {
      let key = item.className.split(' ')[item.className.split(' ').length - 1];
      updatedValue[key] = item.textContent;
    });
    updatedValue['uniqueId'] = e.target.className;
    setValue(updatedValue);
    setIsModalOpen(true);
  }

  function closeModal() {
    const filteredEntries = Object.entries(value).filter(([key, value]) => key !== 'uniqueId' && value !== '');
    const newObj = Object.fromEntries(filteredEntries);
    const regId = value.uniqueId;

    /* change database */
    const requestOptions = {
      method: 'PUT', // Use PUT method for updating data
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newObj), // Include the updated data in the request body
    };

    fetch(`http://localhost:3000/employee/${regId}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to update employee');
        }
      })
      .then((data) => {
        console.log('Success:', data);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error updating employee:', error.message);
      });

    setIsModalOpen(false);
  }

  /* setting background */
  const isEndDatePassed = new Date(endDate) > new Date();
  let backgroundColor = '';
  if (!isEndDatePassed) {
    backgroundColor = 'rgba(239,68, 68, 0.8)';
    let proj = document.querySelector('.projects');
    proj.style.color = 'rgb(239 68 68)';
  }

  const customStyles = {
    content: {
      width: '50vw',
      margin: 'auto', // To center the modal horizontally
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <tr className="text-center text-1xl " style={{ backgroundColor: backgroundColor }}>
      <td className="py-2 px-4 employeeId">{uniqueKey}</td>
      <td className="py-2 px-4 name">{uniqueName}</td>
      <td className="py-2 px-4 designation">{designation}</td>
      <td className="py-2 px-4 grade">{grade}</td>
      <td className="py-2 px-4 projectName">{projectName}</td>
      <td className="py-2 px-4 joinDate">{joinDate}</td>
      <td className="py-2 px-4 endDate">{endDate}</td>
      <td className="py-2 px-4">
        <img className={uniqueId} src={pencil} alt="edit" onClick={editButton} />
      </td>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Edit Modal" ariaHideApp={false}>
        <div className="h-full pt-5 pr-5 pl-5">
          <div className="flex flex-col h-full justify-between">
            <div className="mb-4">
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-600">
                Employee Id
              </label>
              <input
                id="employeeId"
                name="employeeId"
                type="text"
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
                value={value.employeeId}
                onChange={changeValue}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={changeValue}
                value={value.name}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="designation" className="block text-sm font-medium text-gray-600">
                Designation
              </label>
              <input
                id="designation"
                name="designation"
                type="text"
                onChange={changeValue}
                value={value.designation}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="grade" className="block text-sm font-medium text-gray-600">
                Grade
              </label>
              <input
                id="grade"
                name="grade"
                type="number"
                onChange={changeValue}
                value={value.grade}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-600">
                Project Name
              </label>
              <input
                id="projectName"
                name="projectName"
                type="text"
                onChange={changeValue}
                value={value.projectName}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="joinDate" className="block text-sm font-medium text-gray-600">
                Date of joining
              </label>
              <input
                id="joinDate"
                name="joinDate"
                type="date"
                onChange={changeValue}
                value={value.joinDate}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="joinDate" className="block text-sm font-medium text-gray-600">
                End Date
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                onChange={changeValue}
                value={value.endDate}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>
            <button onClick={closeModal}>Submit</button>
          </div>
        </div>
      </Modal>
    </tr>
  );
}

export default TableCreation;

// eslint-disable-next-line
