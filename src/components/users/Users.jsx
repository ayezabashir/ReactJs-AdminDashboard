/* eslint-disable react/prop-types */
import { usercard } from '../../assets/data/data'

const Users = ({ light }) => {
    return (
        <>
            <div className="users">
                {usercard.map(item => (
                    <div className={`user card-${light}`} key={item.id}>
                        <div className="user-img">
                            <img src={item.pic} alt={item.fullName} />
                        </div>
                        <div className="user-info">
                            <h5 className={`color-${light}`}>{item.fullName}</h5>
                            <p className={`color-${light}`}>{item.email}</p>
                            <h6 style={{ color: item.color }}>{item.role}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Users
