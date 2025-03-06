import { useState } from 'react';

declare global {
  interface Window {
    edgee: {
      track: (data: any) => void;
      user: (data: any) => void;
      consent: (status: 'denied' | 'pending' | 'granted') => void;
    };
  }
}

export const AnalyticsWithEdgee = () => {
  const [imageSrc, setImageSrc] = useState('/img/edgee.png');

  const changeImg = () => {
    if (!imageSrc.endsWith('edgee-2.png')) {
      setImageSrc('/img/edgee-2.png');
    }
  };

  const handleTrack = () => {
    changeImg();
    window.edgee.track({
      name: "button_click",
      properties: {
        color: "blue",
        category: "shoes",
        label: "Blue Sneakers",
        size: 10,
        registered: false
      }
    });
  };

  const handleUser = () => {
    changeImg();
    window.edgee.user({
      user_id: "123456",
      anonymous_id: "anon-123",
      properties: {
        email: "me@example.com",
        name: "John Doe",
        age: 42,
        verified: true
      }
    });
  };

  const handleConsent = (status: 'denied' | 'pending' | 'granted') => {
    window.edgee.consent(status);
    const consentBar = document.getElementById('consent-bar');
    if (consentBar) {
      consentBar.style.display = 'none';
    }
  };

  return (
    <div className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-none text-indigo-600" id="title">The future</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Doing analytics with Edgee components.</p>
          <p className="mt-6 text-lg leading-1 text-gray-600">
            What was originally performed by javascript in your browser is now performed by Edgee Proxy. This means that you no longer see a call to Google Analytics, Amplitude, Segment... in your browser.
          </p>
          <div className="mt-6 text-lg leading-1 text-gray-600">
            <button onClick={handleTrack} className="bg-gray-800 text-sm text-white py-2 px-4 rounded-md">Track</button>
            <button onClick={handleUser} className="bg-gray-800 text-sm text-white py-2 px-4 rounded-md">User</button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pt-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <img src={imageSrc} alt="App screenshot" id="edgee-proxy" className="shadow-2xl" width="2432" height="1442" />
        </div>
      </div>

      <div id="consent-bar" className="mt-6 text-lg leading-1 text-gray-600 sticky bottom-0 bg-gray-800 p-4 space-x-2 flex justify-end align-middle">
        <p className="text-white text-sm self-center">Consent</p>
        <button onClick={() => handleConsent('denied')} className="bg-gray-600 text-xs text-white py-2 px-2 rounded-md">Denied</button>
        <button onClick={() => handleConsent('pending')} className="bg-gray-600 text-xs text-white py-2 px-2 rounded-md">Pending</button>
        <button onClick={() => handleConsent('granted')} className="bg-gray-600 text-xs text-white py-2 px-2 rounded-md">Granted</button>
      </div>
    </div>
  );
}; 