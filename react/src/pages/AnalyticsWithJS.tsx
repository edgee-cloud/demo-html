import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    amplitude: any;
    pa: any;
  }
}

export const AnalyticsWithJS = () => {
  useEffect(() => {
    // Initialize Google Analytics
    const ga_measurement_id = window.location.hostname === 'demo.edgee.app' 
      ? 'G-QXL7ZBXW1H' 
      : 'G-RVSJKCVFCY';

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }

    gtag('consent', 'default', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga_measurement_id}`;
    document.head.appendChild(script);

    gtag('js', new Date());
    gtag('config', ga_measurement_id);

    gtag("event", "purchase", {
      currency: "USD",
      transaction_id: "T_12345",
      value: 30.03,
      coupon: "SUMMER_FUN",
      shipping: 3.33,
      tax: 1.11,
      items: [
        {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 10.01,
          quantity: 3,
          in_stock: true,
          color: "green"
        }
      ]
    });

    // Initialize Amplitude
    const amplitude_api_key = window.location.hostname === 'demo.edgee.app'
      ? '456600f1d3bd5e8b571adde2171d0463'
      : 'd213dd88c706c35abdee8e58350557df';

    window.amplitude = window.amplitude || { _q: [], _iq: {} };
    if (window.amplitude.invoked) {
      console.error("Amplitude snippet has been loaded.");
    } else {
      window.amplitude.invoked = true;
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.integrity = 'sha384-BHj/6N+ZSiRDYRUHPEqr/nwkUsSk3s9r1ryQeFBc4x2OiVz4peW3jSccKZsoU8Ry';
      script.crossOrigin = 'anonymous';
      script.async = true;
      script.src = 'https://cdn.amplitude.com/libs/analytics-browser-2.6.2-beta.0-min.js.gz';
      script.onload = function() {
        if (!window.amplitude.runQueuedFunctions) {
          console.log("[Amplitude] Error: could not load SDK");
        }
      };
      document.head.appendChild(script);
      window.amplitude.init(amplitude_api_key);
    }

    // Initialize Piano Analytics
    const piano_site_id = 643890;
    const pianoScript = document.createElement('script');
    pianoScript.type = 'text/javascript';
    pianoScript.crossOrigin = 'anonymous';
    pianoScript.src = 'https://tag.aticdn.net/piano-analytics.js';
    document.head.appendChild(pianoScript);

    pianoScript.onload = function() {
      window.pa.setConfigurations({
        site: piano_site_id,
        collectDomain: "https://svkfrdt.pa-cd.com",
      });
      window.pa.sendEvent("page.display", {
        page: "Analytics with JS",
        page_authors: ["Sacha", "Alex"],
      });
    };
  }, []);

  return (
    <div className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-none text-indigo-600">The past</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Standard web page, with JS for analytics.</p>
          <p className="mt-6 text-lg leading-1 text-gray-600">
            This is a very standard website. When you request this page, the browser sends a request to a server (origin).
            The origin processes the request and sends an html response to your browser. Once the html is loaded in your browser,
            several javascripts are executed, including the Google Analytics script.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <img src="/img/standard.png" alt="App screenshot" className="shadow-2xl" width="2432" height="1442" />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client side data collection is no longer effective</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Using client-side analytics libraries for Google Analytics, Segment, or Amplitude... is no longer effective.
            Here are some reasons why:
          </p>
        </div>

        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
                <circle cx="10" cy="13" r="8" />
                <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
                <path d="M18 3 19.1 5.2" />
                <path d="M22 3 20.9 5.2" />
              </svg>
              Webperf degradation.
            </dt>
            <dd className="inline">
              Using a lot of third-party scripts can slow down your website, and impact your SEO.
            </dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 14v.01" />
              </svg>
              Third-party cookies apocalypse.
            </dt>
            <dd className="inline">
              Third-party cookies are being blocked by browsers, and will soon be deprecated.
            </dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              Browser tracking restrictions.
            </dt>
            <dd className="inline">
              Browsers are implementing tracking restrictions, making it harder to collect data.
            </dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.26 9.26 3 11v3l14.14 3.14" />
                <path d="M21 15.34V6l-7.31 2.03" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                <line x1="2" x2="22" y1="2" y2="22" />
              </svg>
              AD blockers.
            </dt>
            <dd className="inline">
              Ad blockers are blocking more and more tracking scripts, impacting your data collection.
            </dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                <path d="M7.5 8 10 9" />
                <path d="m14 9 2.5-1" />
                <path d="M9 10h.01" />
                <path d="M15 10h.01" />
              </svg>
              Consent falls.
            </dt>
            <dd className="inline">
              Users are more and more aware of their privacy, and are less likely to give their consent to be tracked.
            </dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z" clipRule="evenodd" />
              </svg>
              Privacy regulations.
            </dt>
            <dd className="inline">
              Privacy regulations like GDPR, CCPA... are making it harder to collect data.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}; 