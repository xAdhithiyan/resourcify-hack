import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function SideDash() {
  let navigate = useNavigate();
  function backToLogin() {
    navigate('/', {});
  }

  function changeSection(e) {
    // Reset background color for all sideDash items
    document.querySelectorAll('.allSide div').forEach((item) => {
      item.style.backgroundColor = ''; // Reset to default or set to your desired color
    });

    // Set background color for the clicked sideDash item
    e.target.style.backgroundColor = 'white';

    // Extract the last part of the class list to determine the section
    let lastUrl = e.target.classList.value.split(' ').pop();

    // Use the extracted section for navigation
    navigate(`/${lastUrl}`, {});
  }

  return (
    <>
      <div className="w-[384px] m-4 rounded p-2 bg-white ">
        <div className="flex justify-center">
          <img src={logo} alt="Stopwatch Logo" className="w-64  mb-6 rounded" />
        </div>
        <div className="flex flex-col gap:6 allSide">
          <div className="p-4  m-4 rounded-lg hover:bg-green-500 transition duration-500  text-center cursor-default dashboard" onClick={changeSection}>
            Dashboard
          </div>
          <div className="border-b-2 border-black w-3/5 self-center"></div>
          <div className="p-4 rounded-lg pl-5 m-4 text-center cursor-default hover:bg-green-500 transition duration-500 employee" onClick={changeSection}>
            Add Employee
          </div>
          <div className="border-b-2 border-black w-3/5 self-center"></div>
          <div className="p-4 m-4 rounded-lg hover:bg-green-500 transition duration-500 text-center cursor-default">Schedule</div>
          <div className="border-b-2 border-black w-3/5 self-center"></div>
          <div className="p-4 m-4 rounded-lg hover:bg-green-500 transition duration-500 text-center cursor-default projects" onClick={changeSection}>
            Assign Projects
          </div>
          <div className="border-b-2 border-black w-3/5 self-center"></div>
          <div className="p-4 m-4 rounded-lg hover:bg-green-500 transition duration-500 text-center cursor-default">Analytics</div>

          <div
            className="w-28 h-14 rounded-lg fixed bottom-10 left-28 font-bold text-red-500 hover:bg-red-500 hover:text-white transition duration-500 flex justify-center items-center cursor-default"
            onClick={backToLogin}
          >
            <div>Logout</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideDash;
