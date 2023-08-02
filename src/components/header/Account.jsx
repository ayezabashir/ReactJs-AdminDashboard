import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
const Account = () => {
    return (
        <>
            <span className="account">
                <div className="account-header">
                    <h5>Welcome !</h5>
                </div>
                <ul>
                    <li>
                        <span>
                            <PersonIcon className='icon' />
                        </span>
                        <p>My Account</p>
                    </li>
                    <li>
                        <span>
                            <LockIcon className='icon' />
                        </span>
                        <p>Lock Screen</p>
                    </li>
                </ul>
                <hr />
                <button>
                    <span>
                        <LogoutIcon className='icon' />
                    </span>
                    <p>Logout</p>
                </button>
            </span>
        </>

    )
}

export default Account
