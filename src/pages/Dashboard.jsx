import Users from '../components/users/Users'
import Inbox from '../components/inbox/Inbox';
import Projects from '../components/projects/Projects';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className="users">
                    <Users />
                </div>
                <div className="inbox-projects">
                    <Inbox />
                    <Projects />
                </div>
            </div>
        </>
    )
}

export default Dashboard
