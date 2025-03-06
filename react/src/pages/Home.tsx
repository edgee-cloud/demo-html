import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 h-lvh">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome to Edgee HTML demo</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              This site is a simple html demo app to show how Edgee can be used with any website.
              Don't hesitate to check the source code ot visit our GitHub page to learn more.
            </p>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-10 lg:mt-20 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-left font-semibold leading-none text-white">
                    <svg className="h-8 w-8 flex-none" viewBox="0 0 630 630">
                      <rect width="630" height="630" fill="#f7df1e"/>
                      <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
                    </svg>
                    <p className="flex flex-col">
                      <span>Analytics with JavaScript</span>
                      <span className="font-normal text-gray-400">The past</span>
                    </p>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-left leading-7 text-gray-300">
                    <p className="flex-auto">
                      Look at a page where analytic libraries like Google Analytics are added to the page in the traditional way, with javascript.
                    </p>
                    <p className="mt-6">
                      <Link to="/analytics-with-js" className="text-sm font-semibold leading-6 text-indigo-500">
                        See how it works <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-left font-semibold leading-none text-white">
                    <svg className="h-8 w-8 flex-none text-indigo-600" viewBox="0 0 512 512" fill="none">
                      <rect width="512" height="512" fill="white"/>
                      <path d="M253.721 125.027C255.404 121.273 259.137 118.857 263.254 118.857H367.947C375.519 118.857 380.575 126.653 377.481 133.556L364.452 162.625C362.769 166.379 359.036 168.795 354.919 168.795H250.225C242.654 168.795 237.598 160.999 240.692 154.096L253.721 125.027Z" fill="#231A26"/>
                      <path d="M149.267 238.32C150.95 234.566 154.683 232.15 158.801 232.15H285.131C292.702 232.15 297.758 239.946 294.664 246.849L281.635 275.917C279.953 279.672 276.219 282.088 272.102 282.088H145.772C138.2 282.088 133.144 274.292 136.238 267.389L149.267 238.32Z" fill="#231A26"/>
                      <path d="M149.267 350.122C150.95 346.368 154.683 343.952 158.801 343.952H332.881C340.452 343.952 345.508 351.748 342.414 358.651L329.385 387.72C327.703 391.474 323.969 393.89 319.852 393.89H145.772C138.2 393.89 133.144 386.094 136.238 379.191L149.267 350.122Z" fill="#231A26"/>
                    </svg>
                    <p className="flex flex-col">
                      <span>Analytics with Edgee components</span>
                      <span className="font-normal text-gray-400">The future</span>
                    </p>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-left leading-7 text-gray-300">
                    <p className="flex-auto">
                      Inspect how Edgee can be used to add analytics to your website without any javascript.
                    </p>
                    <p className="mt-6">
                      <Link to="/analytics-with-edgee" className="text-sm font-semibold leading-6 text-indigo-500">
                        See how it works <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1024 1024"
             className="absolute left-1/2 top-1/2 -z-10 h-[150rem] w-[150rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
             aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7"/>
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="#7775D6"/>
              <stop offset="1" stopColor="#E935C1"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}; 