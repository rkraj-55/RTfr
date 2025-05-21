import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="py-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-primary hover:text-primary-dark transition-colors">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const formattedName = name.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');

          return (
            <React.Fragment key={name}>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <li>
                {isLast ? (
                  <span className="text-gray-600">{formattedName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {formattedName}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;