import Users from '../components/users/Users'
import Inbox from '../components/inbox/Inbox';
import Projects from '../components/projects/Projects';
import Chart from '../components/charts/Chart';
import Today from '../components/today/Today';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <Today />
                <Chart />
                <Users />
                <div className="inbox-projects">
                    <Inbox />
                    <Projects />
                </div>
            </div>
        </>
    )
}

export default Dashboard
