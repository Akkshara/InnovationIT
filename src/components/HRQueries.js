import React from "react";

const HRQueries = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">HR Assistance</h1>
      
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Ask your HR-related query..." 
        className="w-1/2 p-2 border rounded-lg shadow-md"
      />

      {/* Common Queries Section */}
      <div className="mt-6 grid grid-cols-2 gap-4 w-2/3">
        {["Leave Policy", "Payroll", "IT Support", "Company Policies", "Work-from-Home", "Promotion Process"].map((topic) => (
          <button 
            key={topic} 
            className="p-4 bg-white border rounded-lg shadow hover:bg-blue-200"
            onClick={() => alert(`Ask about ${topic} in the chatbot!`)}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Open Chatbot Button */}
      <button 
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
        onClick={() => window.caiWebchat.open()}
      >
        Open Chatbot
      </button>
    </div>
  );
};

export default HRQueries;
