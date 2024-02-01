import React, { useEffect, useState } from 'react';
import SideDash from './smallerComponents/SideDash';
import { Chart as ChartJS, CategoryScale, LinearScale } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

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
    console.log(techStack);
  }

  useEffect(() => {
    // This code will run when the component mounts
    getEmployee();
  }, []); // The empty dependency array ensures this effect runs only once on mount

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
        totalEmployee(data);
        createPie(data);
        createBar(data);
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

        <div className="flex items-center justify-center border-2 border-black p-4 rounded bg-white">
          <Doughnut data={PieChartData} />
        </div>

        <div className="flex items-center justify-center border-2 border-black p-4 rounded bg-white">
          <Bar data={barChartData} />
        </div>

        <div className="flex items-center justify-center border-2 border-black p-4 rounded bg-white">
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
