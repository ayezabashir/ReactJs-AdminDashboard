/* eslint-disable react/prop-types */
import { projects } from '../../assets/data/data'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Projects = ({ light }) => {
    return (
        <>
            <div className={`projects card-${light}`}>
                <div className="project-header">
                    <h5 className={`color-${light}`}>Latest Projects</h5>
                    <MoreVertIcon className={`icon color-${light}`} />
                </div>
                <div className="table">
                    <table className={`color-${light}`}>
                        <thead>
                            <tr className='t-header'>
                                <th>#</th>
                                <th>Project Name</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Assign</th>
                            </tr >
                        </thead>

                        <tbody>
                            {projects.map(item => (
                                <tr className='t-body' key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.pName}</th>
                                    <th>{item.startDate}</th>
                                    <th>{item.dueDate}</th>
                                    <th style={{ background: item.color, color: 'white' }}>{item.pStatus}</th>
                                    <th>{item.assigned}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Projects
