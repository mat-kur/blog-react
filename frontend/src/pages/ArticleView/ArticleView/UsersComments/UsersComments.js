import React from "react";



export const UsersComments = props => {


    return (
        <>
            <section className="users-comments-top">
                <h3>TOP COMMENT</h3>
                <div className="likes-activity">
                    <p className="comment-likes">Likes: 10</p>
                    <p className="date-clock"><i className="fa-regular fa-clock"></i> 11.09.2023</p>
                </div>
                <div className="top-comment">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">Admin</a>
                    </div>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum
                        harum necessitatibus tempore. Cum deserunt exercitationem facere, illo nam non nulla optio
                        praesentium, quisquam reiciendis reprehenderit sed sunt suscipit! Animi.</p>
                </div>
                <div className="comment-activity">
                    <i className="fa-solid fa-pencil"></i>
                    <i className="fa-solid fa-trash"></i>
                    <i className="fa-solid fa-reply"></i>
                    <i className="fa-solid fa-flag"></i>
                    <i className="fa-regular fa-heart"></i>
                </div>
            </section>

            <section className="users-comments">
                <div className="wrapper-comments">

                    <div className="likes-activity">
                        <p className="comment-likes">Likes: 10</p>
                        <p className="date-clock"><i className="fa-regular fa-clock"></i> 11.09.2023</p>
                    </div>
                    <div className="top-comment">
                        <div>
                            <img src="./default-avatar.jpg" alt=""></img>
                            <a href="#">Admin</a>
                        </div>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum
                            harum necessitatibus tempore. Cum deserunt exercitationem facere, illo nam non nulla optio
                            praesentium, quisquam reiciendis reprehenderit sed sunt suscipit! Animi.</p>
                    </div>
                    <div className="admin-response">
                        <a href="#">Admin:</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iste!</p>
                    </div>
                    <div className="comment-activity-normal">
                        <i className="fa-solid fa-pencil"></i>
                        <i className="fa-solid fa-trash"></i>
                        <i className="fa-solid fa-reply"></i>
                        <i className="fa-solid fa-flag"></i>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>

                <div className="comment-reply">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">User</a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, obcaecati?</p>
                </div>
                <div className="comment-reply">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">User</a>
                    </div>
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
                        totam.met, consectetur adipisicing elit. Blanditiis, obcaecati?</p>
                </div>
                <div className="comment-reply">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">User</a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, obcaecati?</p>
                </div>
            </section>

            <section className="users-comments">
                <div className="wrapper-comments">

                    <div className="likes-activity">
                        <p className="comment-likes">Likes: 10</p>
                        <p className="date-clock"><i className="fa-regular fa-clock"></i> 11.09.2023</p>
                    </div>
                    <div className="top-comment">
                        <div>
                            <img className="test-img" src="./default-avatar.jpg" alt=""></img>
                            <a href="#">Admin</a>
                        </div>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum
                            harum necessitatibus tempore. Cum deserunt exercitationem facere, illo nam non nulla optio
                            praesentium, quisquam reiciendis reprehenderit sed sunt suscipit! Animi.</p>
                    </div>
                    <div className="comment-activity-normal">
                        <i className="fa-solid fa-pencil"></i>
                        <i className="fa-solid fa-trash"></i>
                        <i className="fa-solid fa-reply"></i>
                        <i className="fa-solid fa-flag"></i>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>

                <div className="comment-reply">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">User</a>
                    </div>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa cupiditate
                        et eveniet fugit magni officiis pariatur quam velit veniam. sit amet, consectetur adipisicing
                        elit. Blanditiis, obcaecati?</p>
                </div>
            </section>

            <section className="users-comments">
                <div className="wrapper-comments">

                    <div className="likes-activity">
                        <p className="comment-likes">Likes: 10</p>
                        <p className="date-clock"><i className="fa-regular fa-clock"></i> 11.09.2023</p>
                    </div>
                    <div className="top-comment">
                        <div>
                            <img src="./default-avatar.jpg" alt=""></img>
                            <a href="#">Admin</a>
                        </div>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum
                            harum necessitatibus tempore. Cum deserunt exercitationem facere, illo nam non nulla optio
                            praesentium, quisquam reiciendis reprehenderit sed sunt suscipit! Animi.</p>
                    </div>
                    <div className="comment-activity-normal">
                        <i className="fa-solid fa-pencil"></i>
                        <i className="fa-solid fa-trash"></i>
                        <i className="fa-solid fa-reply"></i>
                        <i className="fa-solid fa-flag"></i>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>
            </section>
        </>
    );
};