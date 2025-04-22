import React from 'react';
import { CalendarDays } from 'lucide-react';

const schedule = [
  {
    week: 'Week 1: Setup & Fundamentals',
    detail: 'React intro, environment setup, and your first Hello World app',
  },
  {
    week: 'Week 2: Components & JSX',
    detail: 'Building blocks of React, component composition, and JSX syntax',
  },
  {
    week: 'Week 3: State, Props, Hooks 101',
    detail: 'Managing data flow and component lifecycle with hooks',
  },
  {
    week: 'Week 4: Routing & Project #1 kick-off',
    detail: 'Navigation between pages and starting your first project',
  },
  {
    week: 'Week 5: Taiwwind Deep div',
    detail: 'Navigation between pages and starting your first project',
  },
  {
    week: 'Week 6: Git & GitHub Workflow',
    detail: 'Version control, collaboration, and deployment workflows',
  },
  {
    week: 'Week 7:  Project #2 + Code Reviews',
    detail: 'Week 8: Demo Day & Next Steps',
  },
  {
    week: 'Week 8: Demo Day & Next Steps',
    detail: 'Project presentations and continuing your React journey',
  },
];

const WeeklySchedule = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">Week-by-Week Schedule</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {schedule.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <CalendarDays className="w-5 h-5" />
              </div>
              {idx !== schedule.length - 1 && <div className="h-full w-px bg-blue-500 mt-2 flex-1" />}
            </div>
            <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-100 w-full">
              <h3 className="font-semibold text-lg text-gray-900">{item.week}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklySchedule;