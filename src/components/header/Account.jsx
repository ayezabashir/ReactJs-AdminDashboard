/* eslint-disable react/prop-types */
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
const Account = ({ light }) => {
    return (
        <>
            <span className={`account bg-${light}`}>
                <div className="account-header">
                    <h5 className={`color-${light}`}>Welcome !</h5>
                </div>
                <ul>
                    <li>
                        <span>
                            <PersonIcon className={`icon color-${light}`} />
                        </span>
                        <p className={`color-${light}`}>My Account</p>
                    </li>
                    <li>
                        <span>
                            <LockIcon className={`icon color-${light}`} />
                        </span>
                        <p className={`color-${light}`}>Lock Screen</p>
                    </li>
                </ul>
                <hr />
                <button>
                    <span>
                        <LogoutIcon className={`icon color-${light}`} />
                    </span>
                    <p className={`color-${light}`}>Logout</p>
                </button>
            </span>
        </>

    )
}

export default Account
