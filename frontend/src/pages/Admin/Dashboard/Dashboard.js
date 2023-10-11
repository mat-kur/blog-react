import "./Dashboard.css"


export const Dashboard = props => {


    return (
        <main className="test222">
            <section className="dashboard">
                <div className="stats-container">
                    <div className="count-user">
                        <i className="userIco fa-regular fa-user"></i>
                        <div className="text-content">
                            <p>520</p>
                            <p className="users">Users</p>
                        </div>
                    </div>
                    <div className="count-threads">
                        <i className="fa-solid fa-clipboard-list"></i>
                        <div className="text-content">
                            <p>520</p>
                            <p className="users">Threads</p>
                        </div>
                    </div>
                    <div className="count-comments">
                        <i className="fa-regular fa-comment"></i>
                        <div className="text-content">
                            <p>520</p>
                            <p className="users">Users Comments</p>
                        </div>
                    </div>
                    <div className="count-comments">
                        <i className="fa-regular fa-thumbs-up"></i>
                        <div className="text-content">
                            <p>520</p>
                            <p className="users">Thread Likes</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="last-comments">
                <h3>Last comments</h3>
                <div className="comments-container">
                    <a href="#">Admin</a>
                    <div className="comment-content-container">
                        <a className="thread-link"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A est nostrum odio saepe voluptates voluptatibus!</a>
                        <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quaerat.</p>
                    </div>
                </div>
                <div className="comments-container">
                    <a href="#">Admin</a>
                    <div className="comment-content-container">
                        <a className="thread-link"> Lorem ipsum dolor sit amet.</a>
                        <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eius illo iure nihil quae quam quia sed tempore vitae, voluptatum?</p>
                    </div>
                </div>
                <div className="comments-container">
                    <a href="#">Admin</a>
                    <div className="comment-content-container">
                        <a className="thread-link"> Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam animi aspernatur aut beatae commodi deserunt dignissimos dolores ea ex, facere fugit in inventore iure labore minus modi nihil placeat quas quasi quidem quis sunt totam ullam unde vel voluptatum. Asperiores dicta eius facere ipsum possimus rerum soluta tempora voluptatem?</a>
                        <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quaerat.</p>
                    </div>
                </div>
                <div className="comments-container">
                    <a href="#">Admin</a>
                    <div className="comment-content-container">
                        <a className="thread-link"> Lorem ipsum dolor sit amet.</a>
                        <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quaerat.</p>
                    </div>
                </div>
                <div className="comments-container">
                    <a href="#">Admin</a>
                    <div className="comment-content-container">
                        <a className="thread-link"> Lorem ipsum dolor sit amet, consectetur adipisicing.</a>
                        <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem cupiditate deserunt eaque excepturi harum ipsam odit perferendis provident voluptatum!</p>
                    </div>
                </div>
            </section>
            <section className="last-threads">
                <h3>Last news</h3>
                <div className="threads-container">
                    <a href="#"> Lorem ipsum</a>
                    <p className="likes-thread"><i className="fa-regular fa-heart"></i> 1000</p>
                </div>
                <div className="threads-container">
                    <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quidem.</a>
                    <p className="likes-thread"><i className="fa-regular fa-heart"></i> 1000</p>
                </div>
                <div className="threads-container">
                    <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet expedita, illo incidunt ipsa iure nobis omnis perspiciatis quis tempore!</a>
                    <p className="likes-thread"><i class="fa-regular fa-heart"></i> 1000</p>
                </div>
                <div class="threads-container">
                    <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, repudiandae. elit. Eligendi, quidem.</a>
                    <p class="likes-thread"><i class="fa-regular fa-heart"></i> 1000</p>
                </div>
                <div class="threads-container">
                    <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quidem.</a>
                    <p class="likes-thread"><i class="fa-regular fa-heart"></i> 1000</p>
                </div>
            </section>

        </main>
    );
}