import SideDash from './smallerComponents/SideDash';

function DashBoard() {
  return (
    <div className="flex bg-gray-300 h-screen">
      <SideDash />
      <div className="w-full">
        <div>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
