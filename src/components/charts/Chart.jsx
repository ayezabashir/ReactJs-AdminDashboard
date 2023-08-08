/* eslint-disable react/prop-types */
import Revenue from './Revenue';
import Stats from './Stats';
import Sales from './Sales';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Chart = ({ light }) => {
    return (
        <>
            <div className="charts">
                <div className={`chart-card sales card-${light}`}>
                    <div className="chart-header">
                        <h5 className={`color-${light}`}>Daily Sales</h5>
                        <MoreVertIcon className={`icon color-${light}`} />
                    </div>
                    <div className="chart">
                        <Sales />
                    </div>
                </div>

                <div className={`chart-card stats card-${light}`} >
                    <div className="chart-header">
                        <h5 className={`color-${light}`}>Statistics</h5>
                        <MoreVertIcon className={`icon color-${light}`} />
                    </div>
                    <div className="chart">
                        <Stats />
                    </div>
                </div>

                <div className={`chart-card revenue card-${light}`} >
                    <div className="chart-header">
                        <h5 className={`color-${light}`}>Total Revenue</h5>
                        <MoreVertIcon className={`icon color-${light}`} />
                    </div>
                    <div className="chart">
                        <Revenue />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart
