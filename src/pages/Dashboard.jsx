import Users from '../components/users/Users'
import Inbox from '../components/inbox/Inbox';
import Projects from '../components/projects/Projects';
import Chart from '../components/charts/Chart';
import Today from '../components/today/Today';
/* eslint-disable react/prop-types */

const Dashboard = ({ light }) => {
    return (
        <>
            <div className={`dashboard bg-${light}`}>
                <Today light={light} />
                <Chart light={light} />
                <Users light={light} />
                <div className="inbox-projects">
                    <Inbox light={light} />
                    <Projects light={light} />
                </div>
            </div>
        </>
    )
}

export default Dashboard
