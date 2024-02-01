import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';

function AddEmployee() {
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

    if (e.target.id == 'remote') {
      setValue({ ...value, [e.target.name]: e.target.checked });
    }
  }

  function resetForm() {
    let inputArr = document.querySelectorAll('input');
    inputArr.forEach((item) => {
      item.value == '';
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
    };

    fetch('http://localhost:3000/setEmployee', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('hi');
        document.querySelector('.formError').textContent = error;
      });
  }

  let navigate = useNavigate();
  function backToLogin() {
    navigate('/', {});
  }

  return (
    <div className="flex bg-gray-300">
      <div className="w-96 m-4 rounded p-2 bg-white ">
        <div className="flex justify-center">
          <img src={logo} alt="Stopwatch Logo" className="w-64  mb-6 rounded" />
        </div>
        <div className="flex flex-col gap:6">
          <div className="p-4 bg-green-500 rounded-lg pl-5 m-4 font-bold text-center cursor-default">Add Employee</div>
          <div className="border-b-2 border-black w-3/5 self-center"></div>
          <div className="p-4  m-4 rounded-lg hover:bg-green-500 transition duration-500  text-center cursor-default">Manage Departments</div>
          <div className="border-b-2 border-black w-3/5 self-center"></div>
          <div className="p-4 m-4 rounded-lg hover:bg-green-500 transition duration-500 text-center cursor-default">Schedule</div>
          <div className="border-b-2 border-black w-3/5 self-center"></div>
          <div className="p-4 m-4 rounded-lg hover:bg-green-500 transition duration-500 text-center cursor-default">Assign Projects</div>
          <div className="border-b-2 border-black w-3/5 self-center"></div>
          <div className="p-4 m-4 rounded-lg hover:bg-green-500 transition duration-500 text-center cursor-default">Visualization</div>

          <div
            className="w-28 h-14 rounded-lg fixed bottom-10 left-28 font-bold text-red-500 hover:bg-red-500 hover:text-white transition duration-500 flex justify-center items-center cursor-default"
            onClick={backToLogin}
          >
            <div>Logout</div>
          </div>
        </div>
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
                value={value.remote}
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
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="C#">C#</option>
                <option value="C++">C++</option>
                <option value="PHP">PHP</option>
                <option value="Swift">Swift</option>
                <option value="Ruby">Ruby</option>
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
              <label htmlFor="salary" className="block text-sm font-medium text-gray-600">
                Current Salary
              </label>
              <input
                id="salary"
                name="salary"
                type="number"
                onChange={changeValue}
                value={value.salary}
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
          <div className="w-full flex justify-center mt-5">
            <div className="formError text-sm text-red-500"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
