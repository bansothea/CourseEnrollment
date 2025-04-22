import React, { useState } from 'react';
import Resume1 from '../assets/images/resume1.png';
import Resume2 from '../assets/images/resume2.png';
import Resume3 from '../assets/images/resume3.png';

const resumes = [Resume1, Resume2, Resume3];

const ResumePage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="min-h-screen bg-white px-4 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">

          <div className="lg:w-1/4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto">
            {resumes.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={`border ${selected === idx ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'} rounded-xl overflow-hidden w-24 h-32 flex-shrink-0 lg:w-full lg:h-auto lg:aspect-[2/3]`}
              >
                <img src={img} alt={`Resume ${idx + 1}`} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
          
          <div className="flex-1 rounded-2xl overflow-hidden border shadow-lg bg-white">
            <img src={resumes[selected]} alt="Selected Resume" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
