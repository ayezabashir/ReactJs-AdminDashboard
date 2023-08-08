import { todayReports } from '../../assets/data/data'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Todaychart from './Todaychart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Today = () => {
    return (
        <>
            <div className="today">
                {todayReports.map(item => (
                    <div className="today-reports" key={item.id}>
                        <div className="today-header">
                            <h5>{item.name}</h5>
                            <MoreVertIcon className='icon' />
                        </div>
                        <div className='today-info'>
                            <div className="today-chart">
                                {item.type === 'radialBar' ? <Todaychart /> : <div className='percent' style={{ background: item.bg }}>{item.percent} <TrendingUpIcon className='icon' /></div>}
                            </div>
                            <div className="today-text">
                                <h5>{item.today}</h5>
                                <p>{item.info}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Today
