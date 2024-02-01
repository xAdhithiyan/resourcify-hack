import { useState } from 'react';

function SignUpPage() {
  const [formValues, setFormValues] = useState({
    employeeId: '',
    name: '',
    grade: '',
    designation: '',
    dateOfJoining: '',
    yearOfJoining: '',
    dateOfBirth: '',
    workLocation: '',
    offshoreOnsite: '',
    businessUnitName: '',
    subBusinessUnit: '',
    projectDetails: '',
    billedUtilization: '',
    languageSkills: '',
    certifications: '',
    reportingManagerDetails: '',
    appraisalRatings: '',
    billingRate: '',
    currentSalary: '',
    remarks: '',
  });

  function changeValue(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-600">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Employee Details</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Employee Id
            </label>
            <input
              id="employeeId"
              name="employeeId"
              type="text"
              className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
              autoComplete="off"
              value={formValues.employeeId}
              onChange={changeValue}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600"></label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={changeValue}
              value={formValues.employeeId}
              className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={changeValue}
              value={formValues.username}
              className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
              autoComplete="off"
            />
          </div>
        </div>

        <button type="submit" className="mt-6 px-4 py-2 bg-green-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
