import { useState } from 'react';
import SideDash from './smallerComponents/SideDash';

function Reports() {
  const [isDownloadsVisible, setDownloadsVisibility] = useState(false);

  const handleTagClick = () => {
    setDownloadsVisibility(!isDownloadsVisible);
  };

  return (
    <div className="flex bg-gray-300">
      <SideDash />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300 w-full text-4xl rounded-l">
        <div className="bg-green-500 p-10 rounded-lg border border-black">
          <a href="../allEmployeeReports.txt" download="EmployeeReports.txt" className="cursor-pointer" onClick={handleTagClick}>
            Download Employee Report
          </a>
        </div>
        <div className={`mt-4 transition-all duration-500 ease-in-out ${isDownloadsVisible ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}`}>Check Downloads</div>
      </div>
    </div>
  );
}

export default Reports;
