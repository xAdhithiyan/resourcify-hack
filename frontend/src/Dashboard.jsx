import SideDash from './smallerComponents/SideDash';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

function DashBoard() {
  const getEmployee = async () => {
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex bg-gray-300 h-screen">
      <SideDash />
      <button onClick={getEmployee}> Generate Dashboard</button>
      <div className="w-full">
        <div>hello</div>

        {/* Bar char */}
        <div className="h-32">
          <Bar
            data={{
              labels: ['A', 'B', 'C'],
              datasets: [
                {
                  label: 'Revenue',
                  data: [200, 300, 400],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
