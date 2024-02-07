import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Covid.css';
function Covid() {
    const [covidData, setCovidData] = useState({});
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        fetchCovidData();
        const intervalId = setInterval(fetchCovidData, 1800000); 

        return () => clearInterval(intervalId);  
    }, []);

    const fetchCovidData = async () => {
        try {
            const response = await axios.get('https://covid-193.p.rapidapi.com/statistics?country=Serbia', {
                headers: {
                    'X-RapidAPI-Key': 'bbb2a722e5msh49d347b4b22fbedp1bb4b9jsn34bcd74d42ae',
                    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                }
            });

            if (response.data && response.data.response && response.data.response.length > 0) {
                const data = response.data.response[0];
                setCovidData({
                    cases: data.cases.total,
                    deaths: data.deaths.total,
                    recovered: data.cases.recovered,
                    active: data.cases.active,
                    critical: data.cases.critical,
                    todayCases: data.cases.new,
                    todayDeaths: data.deaths.new,
                    tests: data.tests.total
                });
                setLastUpdated(new Date().toLocaleString());
            }
        } catch (error) {
            console.error('Došlo je do greške prilikom dohvatanja podataka', error);
        }
    };

    return (
        <div className="covid-container">
            <div id="last-updated">Poslednji put osveženo: {lastUpdated}</div>
            <div id="covid-data">
                <div className="card"><span className="number">{covidData.cases}</span><div className="label"> Ukupno slučajeva</div></div>
                <div className="card"><span className="number">{covidData.deaths}</span> Ukupno smrtnih slučajeva</div>
                <div className="card"><span className="number">{covidData.recovered}</span> Ukupno oporavljenih</div>
                <div className="card"><span className="number">{covidData.active}</span> Aktivni slučajevi</div>
                <div className="card"><span className="number">{covidData.critical || 'N/A'}</span> Kritični slučajevi</div>
                <div className="card"><span className="number">{covidData.todayCases || 'N/A'}</span> Slučajevi danas</div>
                <div className="card"><span className="number">{covidData.todayDeaths || 'N/A'}</span> Smrtni slučajevi danas</div>
                <div className="card"><span className="number">{covidData.tests}</span> Ukupno testova</div>
            </div>
            
        </div>
    );
}

export default Covid;
