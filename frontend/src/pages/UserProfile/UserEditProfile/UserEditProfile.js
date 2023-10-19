import "./UserEditProfile.css"
import {useState} from "react";
import {useParams} from "react-router-dom";



export const UserEditProfile = user => {


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
        <div className="test-userr">
            <div className="edit-profile-container">
                <h2>Edit Profile</h2>
                <form onSubmit={sendForm}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="username"
                            disabled
                            value={user?.user && user.user?.user && user.user.user?.username}
                        ></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="email"
                            value={user.user && user.user.user && user.user.user.email} disabled
                            onChange={e => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="image">Profile Image</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        ></input>
                    </div>
                    <button type="submit" class="submit-btn">Save Changes</button>
                </form>
            </div>
        </div>
    );
}