import { useState } from 'react';
import SearchBox from './SearchBox';
import DisplayCard from './DisplayCard';
import './App.css';

const API_URL = 'https://api.weatherapi.com/v1/current.json';
const API_KEY = 'f39993f10d9043e7bf972937240505';
function App() {
    const [searchVal, setSearchVal] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [cityData, setCityData] = useState(null);

    const setValue = (evt) => {
        setSearchVal(evt.target.value);
    };

    const searchCity = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(`${API_URL}?key=${API_KEY}&q=${searchVal}`);
            if (!res.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await res.json();

            setCityData(data);
            console.log(data);
        } catch (error) {
            alert('Failed to fetch weather data');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='appContainer'>
            <div className='searchContainer'>
                <SearchBox
                    searchVal={searchVal}
                    setValue={setValue}
                    searchCity={searchCity}
                />
            </div>
            {isLoading && <p className='loading'>Loading data...</p>}
            {cityData && !isLoading && (
                <div className='weather-cards'>
                    <DisplayCard
                        title='Temperature'
                        value={cityData?.current?.temp_c}
                        unit='°C'
                    />
                    <DisplayCard
                        title='Humidity'
                        value={cityData?.current?.humidity}
                        unit='%'
                    />
                    <DisplayCard
                        title='Condition'
                        value={cityData?.current?.condition?.text}
                        unit=''
                    />
                    <DisplayCard
                        title='Wind Speed'
                        value={cityData?.current?.wind_kph}
                        unit='kph'
                    />
                </div>
            )}
        </div>
    );
}

export default App;
