import './DisplayCard.css';

const DisplayCard = ({ title, value, unit }) => {
    console.log({ value });
    return (
        <div className='weather-card'>
            <div className='heading'>{title}</div>
            <div className='value'>
                {value}
                {unit}
            </div>
        </div>
    );
};

export default DisplayCard;
