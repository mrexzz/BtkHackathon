import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function PercentComp() {
    const percentage = 66;

    return (
        <>
            <CircularProgressbar className='bars' value={percentage} text={`${percentage}%`} />
        </>
    )
}
