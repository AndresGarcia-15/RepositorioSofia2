import React, { useState, useEffect } from "react";

const DataView = () => {
  
  const [medicalhistorial, setApiData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const medicalhistorial = {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json', 
      },
      
    };

    
    const fetchData = async () => {
      try {
        
        const response = await fetch("https://api-healtcare-ultima.onrender.com/medicalhistorial/8", medicalhistorial);
        const data = await response.json();

        
        console.log("Datos completos:", data);

       
        setApiData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API", error);
      }
    };

    
    fetchData();
  }, []); 

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap m-0">
          {}
          <div className="p-5 lg:w-full">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
              <h2 className="text-3xl font-bold mb-4">Appointment Data</h2>
              
              {loading ? (
                <p>Loading...</p>
              ) : (
                <ul>
                  {}
                  {Object.keys(medicalhistorial).map((key) => (
                    <li key={key}>{key}: {medicalhistorial[key]}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataView;


