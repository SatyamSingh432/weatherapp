import './SearchBox.css';

const SearchBox = ({ searchVal, setValue, searchCity }) => {
    return (
        <div className='searchContainer'>
            <input
                className='searchInput'
                placeholder='Enter city name'
                value={searchVal}
                onChange={setValue}
                type='text'
            />
            <button onClick={searchCity} className='searchButton'>
                Search
            </button>
        </div>
    );
};

export default SearchBox;
