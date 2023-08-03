import { usercard } from '../../assets/data/data'

const Users = () => {
    return (
        <>
            <div className="users">
                {usercard.map(item => (
                    <div className="user" key={item.id}>
                        <div className="user-img">
                            <img src={item.pic} alt={item.fullName} />
                        </div>
                        <div className="user-info">
                            <h5>{item.fullName}</h5>
                            <p>{item.email}</p>
                            <h6 style={{ color: item.color }}>{item.role}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Users
