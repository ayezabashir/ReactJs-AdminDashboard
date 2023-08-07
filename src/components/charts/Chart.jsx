import Revenue from './Revenue';
import Stats from './Stats';
import Sales from './Sales';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Chart = () => {
    return (
        <>
            <div className="charts">
                <div className="chart-card">
                    <div className="chart-header">
                        <h5>Daily Sales</h5>
                        <MoreVertIcon className='icon' />
                    </div>
                    <div className="chart">
                        <Sales />
                    </div>
                </div>

                <div className="chart-card">
                    <div className="chart-header">
                        <h5>Statistics</h5>
                        <MoreVertIcon className='icon' />
                    </div>
                    <div className="chart">
                        <Stats />
                    </div>
                </div>

                <div className="chart-card">
                    <div className="chart-header">
                        <h5>Total Revenue</h5>
                        <MoreVertIcon className='icon' />
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
