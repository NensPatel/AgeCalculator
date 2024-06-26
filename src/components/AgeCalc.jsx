import React, { useState } from "react";

const AgeCalc = () => {
  const [birthdate, setBirthdate] = useState("");
  const [ageDetails, setAgeDetails] = useState({
    years: null,
    months: null,
    days: null,
  });

  const calculateAge = () => {
    if (birthdate) {
      const birthDateObj = new Date(birthdate);
      const today = new Date();

      let years = today.getFullYear() - birthDateObj.getFullYear();
      let months = today.getMonth() - birthDateObj.getMonth();
      let days = today.getDate() - birthDateObj.getDate();

      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setAgeDetails({ years, months, days });
    }
  };

  const reset = () => {
    setBirthdate("");
    setAgeDetails({ years: null, months: null, days: null });
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Age Calculator</h1>
        <p className="text-center mb-6">
          The Age Calculator can determine the age or interval between two
          dates. The calculated age will be displayed in years, months, and
          days.
        </p>
        <div className="mb-4">
          <label
            className="block text-lg font-semibold mb-2"
            htmlFor="birthdate"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={calculateAge}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Calculate Age
          </button>
          <button
            onClick={reset}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>

        {ageDetails.years !== null && (
          <div className="mt-6 p-4 bg-gray-200 rounded text-center">
            <h2 className="text-2xl font-semibold">Your Age is</h2>
            <p className="text-xl mt-2">
              {ageDetails.years} years, {ageDetails.months} months, and{" "}
              {ageDetails.days} days
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalc;
