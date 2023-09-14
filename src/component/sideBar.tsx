import { HashLink } from 'react-router-hash-link';

export default function SideBar() {
    return (
      <div className="fixed left-5 top-1/4 flex flex-col items-center bg-transparent space-y-1 group">
        {['First', 'Solution', 'Intro', 'RoadMap', 'FAQ'].map(
          (section, index, arr) => (
            <div key={section} className="flex flex-col items-center">
              <HashLink
                smooth
                to={`/#${section}`}
                className="w-4 h-4 bg-white border border-red-500 rounded-full flex items-center justify-center hover:bg-yellow-500 transition relative"
              >
                <div className="absolute left-6 text-black opacity-0 group-hover:opacity-100 transition duration-300">
                  {section}
                </div>
              </HashLink>
              {index !== arr.length - 1 && (
                <div className="w-0.5 h-6 bg-gray-800 mt-2 mb-2"></div>
              )}
            </div>
          )
        )}
      </div>
    );
  }
  
  
  
  
  
