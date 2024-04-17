import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideDash from './smallerComponents/SideDash';
import { Chart as ChartJS, CategoryScale, LinearScale } from 'chart.js/auto';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale);

function DashBoard() {
  const [totalEmployeeData, setTotalEmployeeData] = useState('');
  const [PieChartData, setPieChartData] = useState({
    labels: ['A', 'B', 'C'],
    datasets: [],
  });
  const [barChartData, setBarChartData] = useState({
    labels: ['A', 'B', 'C'],
    datasets: [],
  });
  const [radarChartData, setRadarChartData] = useState({
    labels: ['A', 'B', 'C'],
    datasets: [],
  });
  const [joining, setJoining] = useState();
  const [ending, setEnding] = useState();
  const [remoteWork, setRemoteWork] = useState();
  const [billing, setBilling] = useState();
  const [aborad, setAborad] = useState();
  const [grade4, setgrade4] = useState();
  const [grade3, setgrade3] = useState();

  function totalEmployee(data) {
    setTotalEmployeeData(data.length);
  }

  function createPie(data) {
    let count = 0;
    data.forEach((item) => {
      const dateObject = new Date(item.endDate);
      const todaysDate = new Date();
      if (dateObject.getTime() < todaysDate.getTime()) {
        count = count + 1;
      }
    });

    setPieChartData({
      labels: ['Working', 'Benched'],
      datasets: [
        {
          label: 'Employees',
          data: [data.length - count, count],
          backgroundColor: ['#22c55e', '#ef4444'],
          borderRadius: 5,
        },
      ],
    });
  }

  function createBar(data) {
    let techStack = {
      JavaScript: 0,
      Python: 0,
      'C#': 0,
      Ruby: 0,
      Swift: 0,
      PHP: 0,
      'C++': 0,
    };

    data.forEach((item) => {
      const language = item.language;

      if (techStack.hasOwnProperty(language)) {
        techStack[language] += 1;
      }
    });

    const labels = Object.keys(techStack);

    setBarChartData({
      labels: labels,
      datasets: [
        {
          label: 'Employees',
          data: labels.map((lan) => techStack[lan]),
          borderRadius: 5,
          backgroundColor: ['blue'],
        },
      ],
    });
  }
  function createRadar(data) {
    const projectCounts = {};

    data.forEach((item) => {
      const projectName = item.projectName;
      if (!projectCounts.hasOwnProperty(projectName)) {
        projectCounts[projectName] = 1;
      } else {
        projectCounts[projectName]++;
      }
    });

    const labels = Object.keys(projectCounts);

    setRadarChartData({
      labels: labels,
      datasets: [
        {
          label: 'Employees',
          data: labels.map((lan) => projectCounts[lan]),
        },
      ],
      options: {
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 50,
            suggestedMax: 100,
          },
        },
      },
    });
  }

  function smallerBoxes(data) {
    /* joining date */
    let count = 0;
    data.forEach((item) => {
      const dateObject = new Date(item.joinDate);
      const todaysDate = new Date();
      if (dateObject.getMonth() == todaysDate.getMonth()) {
        count = count + 1;
      }
    });
    setJoining(count);

    /* ending date */
    count = 0;
    data.forEach((item) => {
      const dateObject = new Date(item.endDate);
      const todaysDate = new Date();
      if (dateObject.getMonth() == todaysDate.getMonth()) {
        count = count + 1;
      }
    });
    setEnding(count);

    /* remote work */
    count = 0;
    data.forEach((item) => {
      if (item.remote) {
        count = count + 1;
      }
    });
    setRemoteWork(count);

    /* billing */
    count = 0;
    data.forEach((item) => {
      if (+item.salary > 110000) {
        count = count + 1;
      }
    });
    setBilling(count);

    /* abroad */
    count = 0;
    data.forEach((item) => {
      if (item.location.split(' ')[item.location.split(' ').length - 1] != 'India') {
        count = count + 1;
      }
    });
    setAborad(count);

    /* Grade 4  ratio */
    count = 0;
    data.forEach((item) => {
      if (item.grade == 4) {
        count = count + 1;
      }
    });

    setgrade4(Math.floor((count / data.length) * 100) + '%');

    /* Grade 3 ratio */
    count = 0;
    data.forEach((item) => {
      if (item.grade == 3) {
        count = count + 1;
      }
    });

    setgrade3(Math.floor((count / data.length) * 100) + '%');
  }

  let navigate = useNavigate();
  function ProjectSection() {
    navigate('/projects', {});
  }

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('https://resourcify-hack.onrender.com/employee', requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log('Error');
      })
      .then((data) => {
        console.log('Success:', data);
        totalEmployee(data);
        createPie(data);
        createBar(data);
        createRadar(data);
        smallerBoxes(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex bg-gray-300 h-screen">
      <SideDash />

      <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 m-10">
        {/* Cards */}
        <div className="flex flex-col items-center gap-10 justify-center border-2 border-black p-4 rounded bg-white">
          <div className="text-center">
            <div className="text-6xl italic opacity-60">Total</div>
            <div className="text-6xl italic opacity-60">Employees</div>
          </div>
          <div className="text-6xl">{totalEmployeeData}</div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-5 ">
          <div className="border-2 border-black p-4 rounded bg-white flex flex-col justify-center items-center gap-5">
            <div className="text-2xl italic opacity-70">Joining this Month</div>
            <div className="text-2xl">{joining}</div>
          </div>
          <div className="border-2 border-black p-4 rounded bg-white flex flex-col justify-center items-center gap-5">
            <div className="text-2xl italic opacity-70 text-center">Leaving this Month</div>
            <div className="text-2xl">{ending}</div>
          </div>
          <div className="border-2 border-black p-4 rounded bg-white flex flex-col justify-center items-center gap-5">
            <div className="text-2xl italic opacity-70">Remote Work</div>
            <div className="text-2xl">{remoteWork}</div>
          </div>
          <div className="border-2 border-black p-4 rounded bg-white flex flex-col justify-center items-center gap-5">
            <div className="text-2xl italic opacity-70">Pending Billing</div>
            <div className="text-2xl">{billing}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          <div className="border-2 border-black p-4 rounded bg-white flex flex-col justify-center items-center gap-5">
            <div className="text-2xl italic opacity-70">Grade 4 Ratio</div>
            <div className="text-2xl">{grade4}</div>
          </div>
          <div className="border-2 border-black p-4 rounded bg-white flex flex-col justify-center items-center gap-5">
            <div className="text-2xl italic opacity-70">Grade 3 Ratio</div>
            <div className="text-2xl"> {grade3}</div>
          </div>
          <div className="border-2 border-black p-4 rounded bg-white flex flex-col justify-center items-center gap-5">
            <div className="text-2xl italic opacity-70">Aboard Employee</div>
            <div className="text-2xl">{aborad}</div>
          </div>
          <div className="border-2 border-black p-4 rounded  flex flex-col justify-center items-center gap-5 text-center bg-red-500 text-white cursor-default" onClick={ProjectSection}>
            <div className="text-3xl italic opacity-70">Alert!</div>
            <div className="text-2xl italic opacity-70">(Check Project Section)</div>
          </div>
        </div>

        <div className="flex items-center justify-center border-2 border-black p-4 rounded bg-white">
          <Doughnut data={PieChartData} />
        </div>

        <div className="flex items-center justify-center border-2 border-black p-4 rounded bg-white">
          <Bar data={barChartData} />
        </div>

        <div className=" flex items-center justify-center border-2 border-black p-8 rounded bg-white">
          <Radar data={radarChartData} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
