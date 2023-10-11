import "./ReportSystem.css";


export const ReportSystem = props => {


    return (
        <section className="report-system">
            <div className="search-bar">
                <input type="text" placeholder="Search..."></input>
                    <i className="fa-solid fa-search"></i>
                    <button className="submit">SEARCH</button>
            </div>
            <div className="reported-comment">
                <a href="">Admin</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolorum eius esse est fugiat illo quisquam quod. Assumenda, pariatur?</p>
                <p>Thread: <a href="">Test link</a></p>
                <hr/>
                    <p className="reported-by">Reported by: <a href="#">TEstuser</a></p>
                    <p className="reported-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea modi quasi sit tempora? Asperiores distinctio impedit natus obcaecati quaerat?</p>
                    <div className="buttons-action">
                        <button className="accept-report">ACCEPT</button>
                        <button className="reject-report">REJECT</button>
                    </div>
            </div>
            <div className="reported-comment">
                <a href="">Admin</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolorum eius esse est fugiat illo quisquam quod. Assumenda, pariatur?</p>
                <p>Thread: <a href="">Test link</a></p>
                <hr/>
                <p className="reported-by">Reported by: <a href="#">TEstuser</a></p>
                <p className="reported-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea modi quasi sit tempora? Asperiores distinctio impedit natus obcaecati quaerat?</p>
                <div className="buttons-action">
                    <button className="accept-report">ACCEPT</button>
                    <button className="reject-report">REJECT</button>
                </div>
            </div>
            <div className="reported-comment">
                <a href="">Admin</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolorum eius esse est fugiat illo quisquam quod. Assumenda, pariatur?</p>
                <p>Thread: <a href="">Test link</a></p>
                <hr/>
                <p className="reported-by">Reported by: <a href="#">TEstuser</a></p>
                <p className="reported-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea modi quasi sit tempora? Asperiores distinctio impedit natus obcaecati quaerat?</p>
                <div className="buttons-action">
                    <button className="accept-report">ACCEPT</button>
                    <button className="reject-report">REJECT</button>
                </div>
            </div>
            <div className="pagination">
                <a href="#">1</a>
                <a href="#" class="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
            </div>
        </section>
    );
};