import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <svg width="30" height="30" viewBox="0 0 512 512" fill="#FFFFFF">
                  <path d="M250.89 62.0864C253.362 56.5582 258.844 53 264.891 53H418.643C429.762 53 437.187 64.4799 432.643 74.6453L413.509 117.45C411.038 122.978 405.555 126.537 399.509 126.537H245.757C234.638 126.537 227.212 115.057 231.756 104.891L250.89 62.0864Z"/>
                  <path d="M97.4909 228.916C99.962 223.387 105.445 219.829 111.491 219.829H297.019C308.138 219.829 315.563 231.309 311.019 241.475L291.885 284.279C289.414 289.808 283.931 293.366 277.885 293.366H92.3574C81.2382 293.366 73.8128 281.886 78.3568 271.721L97.4909 228.916Z"/>
                  <path d="M97.4909 393.55C99.962 388.022 105.445 384.463 111.491 384.463H367.144C378.263 384.463 385.689 395.943 381.145 406.109L362.011 448.914C359.54 454.442 354.057 458 348.01 458H92.3574C81.2382 458 73.8128 446.52 78.3568 436.355L97.4909 393.55Z"/>
                </svg>
              </Link>
            </div>
            <div className="ml-6 block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/analytics-with-js"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === '/analytics-with-js' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Analytics with JS
                </Link>
                <Link
                  to="/analytics-with-edgee"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === '/analytics-with-edgee' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Analytics with Edgee
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <a href="https://github.com/edgee-cloud/demo-html" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 hover:text-white">
                <svg width="24" height="24" viewBox="0 0 1024 1024" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#CCCCCC"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 