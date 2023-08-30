import './EditUserProfile.css'
import {useState} from "react";
import {useParams} from "react-router-dom";



export const EditUserProfile = user => {

    const { id } = useParams()


    const [image, setImage] = useState(null);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [responseMessage, setResponseMessage] = useState("");

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const sendForm = async (e) => {
        e.preventDefault();

        const userID = user.user.user._id;

        const formData = new FormData();
        formData.append("password", password);
        formData.append("userID", userID);
        formData.append("image", image);

        try {
            const response = await fetch(`http://localhost:5000/user/edit/${id}`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setResponseMessage("Password has been changed");
                setPassword("");
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
            if (error.code === 11000) {
                const { email, username } = error.errors;
                const errorMessage = {
                    email: email ? email.message : "",
                    username: username ? username.message : "",
                };
                setResponseMessage(errorMessage);
            } else {
                setResponseMessage(error.message);
            }
        }
    };



    return (
        <>
            <p>{responseMessage}</p>
            <form onSubmit={sendForm} method="POST" className="register-form">
                {responseMessage && <p>{responseMessage}</p>}
                <label htmlFor="username">Username</label>
                <input type="text" className="username" disabled
                       value={user.user && user.user.user && user.user.user.username }
                       onChange={e => setUsername(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input type="email" className="email"
                       value={user.user && user.user.user && user.user.user.email} disabled
                       onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="avatar">Profile image:</label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <label htmlFor="password">Password</label>
                <input type="password" className="password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button type="submit">SUBMIT</button>
            </form>


        </>
    );
}