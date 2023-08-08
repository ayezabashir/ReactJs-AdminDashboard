/* eslint-disable react/prop-types */
import { notifPerson } from '../../assets/data/data'

const Notification = ({ light }) => {
    return (
        <>
            <span className={`notification bg-${light}`}>
                <div className={`notif-header bg-${light}`}>
                    <h5 className={`color-${light}`}>Notifcation</h5>
                    <h6 className={`color-${light}`}>Clear All</h6>
                </div>
                <div className={`notif-body bg-${light}`}>
                    {notifPerson.map(item => (
                        <div className={`inbox bg-${light}`} key={item.id}>
                            <img src={item.pic} alt={item.fullName} />
                            <span>
                                <h5 className={`color-${light}`}>{item.fullName}</h5>
                                <p className={`color-${light}`}>{item.message}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </span>
        </>
    )
}

export default Notification
