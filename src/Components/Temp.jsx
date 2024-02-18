import React, { useState } from 'react';

function Temp() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const CelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== '' ? (parseFloat(value) * 9 / 5 + 32) : '');
  };

  const FahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== '' ? ((parseFloat(value) - 32) * 5 / 9) : '');
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <div>
        <label>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={CelsiusChange}
          />
        </label>
        <span>°C</span>
      </div>
      <div>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={FahrenheitChange}
          />
        </label>
        <span>°F</span>
      </div>
    </div>
  );
}

export default Temp;
