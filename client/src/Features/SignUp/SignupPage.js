import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../util/authContext';
import '../../styles/Homepage.css';
import FrontPG from '../../images/frontPg.png';
import "../../Fonts/stylesheet.css"
import newstudent from '../../images/newstudent.png'
import kids from "../../images/kids.png"
const styles = {
    wrapper: {
        marginTop: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '12em',
    },
    submitButton: {
        marginTop: '1em',
    },
    textAlign: 'center',
};

function SignupPage() {
    const { signup, login } = useAuth();
    const navigate = useNavigate();
    const [formState, setFormState] = useState({ username: '', password: 'password' });
    const [isPending, setIsPending] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = formState;
        if (password.length < 8) {
            alert('Password must have at least 8 characters.');
        } else if (username.length < 6) {
            alert('Username must contain at least 6 characters.');
        } else if (username.length > 16) {
            alert('Username must not contain more than 16 characters.');
        } else {
            setIsPending(true);
            signup({ username, password })
                .then(() => navigate('/settings'))
                .catch((error) => {

                    navigate('/settings');
                    // console.log(error);
                    // alert('An error occurred.');
                    // setIsPending(false);
                });
        }
    };

    return (
        <div className="container">
            {/*<header className="header">*/}
            {/*    <h1 className="gradient-text">The New Student</h1>*/}
            {/*</header>*/}
            <img className={"newStudent"} src={newstudent} alt={"new student"}/>
            <img className={"kids"} src={kids} alt={"new student"}/>
            <div className="image-container">
                <img width={600} height={600} src={FrontPG} alt="Front Page" />
            </div>
            {isPending && <div className="loadingText">Loading...</div>}
            <form className="form">
                <label htmlFor="username" className="formLabel">
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formState.username}
                    onChange={handleInputChange}
                    className="inputField custom-input"
                />
                <button
                    type="submit"
                    style={styles.submitButton}
                    onClick={handleSubmit}
                    className="submitButton big-button "
                >
                    Register
                </button>
                {/*<button*/}
                {/*    type="submit"*/}
                {/*    style={styles.submitButton}*/}
                {/*    onClick={handleLoginSubmit}*/}
                {/*    className="submitButton big-button"*/}
                {/*>*/}
                {/*    Log In*/}
                {/*</button>*/}
            </form>
        </div>
    );
}

export default SignupPage;
