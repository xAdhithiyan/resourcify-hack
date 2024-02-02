import SideDash from './smallerComponents/SideDash';
import { Chart as ChartJS, CategoryScale, LinearScale } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale);

function Analytics() {
  const [lineChartData, setLineChartData] = useState({
    labels: ['A', 'B', 'C'],
    datasets: [],
  });

  function setLineGraph(data) {
    let idArr = [];
    let nameArr = [];
    let gradeArr = [];
    let billingArr = [];
    let salaryArr = [];

    data.forEach((item) => {
      idArr.push(item.employeeId);
      nameArr.push(item.name);
      gradeArr.push(item.grade);
      billingArr.push(item.billing);
      salaryArr.push(item.salary);

      setLineChartData({
        labels: idArr.map((item) => item),
        datasets: [
          {
            label: 'Billing',
            data: billingArr.map((item) => item),
          },
          {
            label: 'Salary',
            data: salaryArr.map((item) => item),
          },
        ],
      });
    });
    console.log(salaryArr);
  }

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
        setLineGraph(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex bg-gray-300">
      <SideDash />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300 w-full">
        <Line data={lineChartData} />
      </div>
    </div>
  );
}

export default Analytics;
