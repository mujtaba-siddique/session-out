import React from 'react';

function getOrCreateBrowserId() {
  let browserId = localStorage.getItem('browserId');
  if (!browserId) {
    browserId = Math.random().toString(36).substr(2,9) + Date.now();
    localStorage.setItem('browserId', browserId);
  }
  return browserId;
}

function getBrowserInfo() {
  const browserId = getOrCreateBrowserId();
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const language = navigator.language;
  const vendor = navigator.vendor;
  const cookiesEnabled = navigator.cookieEnabled;
  let deviceMemory = 'not supported';
  if ('deviceMemory' in navigator) deviceMemory = navigator.deviceMemory + 'GB';
  return {
    browserId,
    userAgent,
    platform,
    language,
    vendor,
    cookiesEnabled,
    deviceMemory
  };
}

function App() {
  const handleClick = () => {
    const info = getBrowserInfo();
    console.log('Browser/Session Info:', info);
    alert('Browser info console me dekh lo!');
  };

  return (
    <div style={{padding: 40}}>
      <h2>Browser Detail Console Checker</h2>
      <button onClick={handleClick}>Console me browser/session info dekho</button>
      <br/><br/>
      <small>(Console khol ke dekhein: F12 ya Ctrl+Shift+I)</small>
    </div>
  );
}

export default App;
