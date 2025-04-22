import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const requirements = [
  'Basic HTML',
  'Basic CSS',
  'JavaScript fundamentals (variables, loops, functions)',
];

const outcomes = [
  'Build React apps using hooks and components',
  'Style with Tailwind CSS',
  'Collaborate with GitHub workflows',
  'Deploy projects to Netlify/Vercel',
];

const RequirementsAndOutcomes = () => {
  return (
    <section className="bg-[#f8fbff] py-20 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <p className="text-sm text-gray-500 mb-6">
            To get the most out of this course, you should already have:
          </p>
          <ul className="space-y-4">
            {requirements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">What You'll Learn</h3>
          <p className="text-sm text-gray-500 mb-6">
            After this course, you will be able to:
          </p>
          <ul className="space-y-4">
            {outcomes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2G_9NVYBeg_jUPz6Pvpe2z_yPxOoDxnneettJo644ww0iPQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-3 rounded-xl text-center"
                >
                Enroll Now
            </a>
        </div>
      </div>
    </section>
  );
};

export default RequirementsAndOutcomes;
