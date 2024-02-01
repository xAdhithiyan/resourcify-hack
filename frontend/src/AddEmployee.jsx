import { useState } from 'react';
import logo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
  let navigate = useNavigate();

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
    currentSalray: '',
    remarks: '',
    joinDate: '',
    endDAte: '',
    designation: '',
    projectName: '',
    projectId: '',
  });

  function changeValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });

    if (e.target.id == 'remote') {
      setValue({ ...value, [e.target.name]: e.target.checked });
    }
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(value);
  }

  return (
    <div className="flex bg-gray-300">
      <div className="w-96 m-4 rounded p-2 bg-white ">
        <div className="flex justify-center">
          <img src={logo} alt="Stopwatch Logo" className="w-64  mb-6 rounded" />
        </div>
        <div className="p-4 bg-green-500 rounded pl-5 m-4 border-2 border-black">Add Employee</div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-300 w-full">
        <form onSubmit={submitForm} className="bg-white p-8 rounded shadow-md ">
          <h2 className="text-2xl font-bold mb-6 text-center">Employee Details</h2>

          <div className="grid grid-cols-3 gap-6 ">
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
              <label htmlFor="DOB" className="block text-sm font-medium text-gray-600">
                DOB
              </label>
              <input
                id="DOB"
                name="DOB"
                type="date"
                onChange={changeValue}
                value={value.DOB}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                onChange={changeValue}
                value={value.location}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="remote" className="block text-sm font-medium text-gray-600">
                Remote
              </label>
              <input
                id="remote"
                name="remote"
                type="checkbox"
                onChange={changeValue}
                value={value.joinDate}
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
              <label htmlFor="projectId" className="block text-sm font-medium text-gray-600">
                Project Id
              </label>
              <input
                id="projectId"
                name="projectId"
                type="text"
                onChange={changeValue}
                value={value.projectId}
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

            <div className="mb-4 col-start-1 col-end-4">
              <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-600">
                Project Details
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                onChange={changeValue}
                value={value.projectDetails}
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
                Date of joining
              </label>
              <input
                id="endDate"
                name=""
                type="date"
                onChange={changeValue}
                value={value.joinDate}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="language" className="block text-sm font-medium text-gray-600">
                Tech Stack
              </label>
              <select
                id="language"
                name="language"
                onChange={changeValue}
                value={value.language}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              >
                <option value="">Select a language</option>
                <option value="english">JavaScript</option>
                <option value="spanish">Python</option>
                <option value="french">C#</option>
                <option value="german">C++</option>
                <option value="italian">PHP</option>
                <option value="italian">Swift</option>
                <option value="italian">Ruby</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="billing" className="block text-sm font-medium text-gray-600">
                Billing
              </label>
              <input
                id="billing"
                name="billing"
                type="number"
                onChange={changeValue}
                value={value.billing}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="salaray" className="block text-sm font-medium text-gray-600">
                Current Salary
              </label>
              <input
                id="joinDate"
                name="joinDate"
                type="number"
                onChange={changeValue}
                value={value.currentSalray}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="remarks" className="block text-sm font-medium text-gray-600">
                Remarks
              </label>
              <input
                id="remarks"
                name="remarks"
                type="text"
                onChange={changeValue}
                value={value.remarks}
                className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button type="submit" className="mt-6 px-4 py-2 col-start-1 col-end-4 justify-self-centers bg-green-600 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
