import Users from '../components/users/Users'
import Inbox from '../components/inbox/Inbox';
import Projects from '../components/projects/Projects';
import Chart from '../components/charts/Chart';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
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
