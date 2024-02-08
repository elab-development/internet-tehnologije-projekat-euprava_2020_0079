import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import necessary components
import { Pie } from 'react-chartjs-2';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const headers = {
          'Authorization': `Bearer ${token}`,
        };

        const response = await axios.get('http://127.0.0.1:8000/api/zahtevi/statistics', { headers });
        setStatistics(response.data);
      } catch (error) {
        console.error('Greška prilikom dobijanja statistika:', error);
      }
    };

    fetchStatistics();
  }, []);

  if (!statistics) {
    return <p>Učitavanje statistika...</p>;
  }

  const { zahtevi_po_uslugama, ukupan_broj_usluga, ukupan_broj_korisnika } = statistics;

  // Priprema podataka za pie chart
  const chartData = {
    labels: Object.keys(zahtevi_po_uslugama),
    datasets: [
      {
        label: 'Broj zahteva',
        data: Object.values(zahtevi_po_uslugama),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],  
      },
    ],
  };
  const containerStyle = {
    width: '600px', 
    height: '400px',  
    margin: '0 auto', // Center the container if desired
  };
  return (
    <div className="statistics-container" style={containerStyle}>
      <h2>Statistike</h2>
      <p>Ukupan broj usluga: {ukupan_broj_usluga}</p>
      <p>Ukupan broj korisnika koji nisu admin: {ukupan_broj_korisnika}</p>
      <div style={{ position: 'relative', height: '100%' }}>
        <Pie
          data={chartData}
          options={{ maintainAspectRatio: false }}
          id="pie-chart"
        />
      </div>
    </div>
  );
};

export default Statistics;
