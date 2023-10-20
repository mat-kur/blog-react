import React from 'react';



import "./Home.css"
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";

export const Home = ({ searchRecords, searchQuery, setSearchQuery, threads, setThreads }) => {


    // console.log(searchQuery)
    return (
        <main>
            <LeftSide searchRecords={searchRecords} searchQuery={searchQuery} setSearchQuery={setSearchQuery} threads={threads} setThreads={setThreads}/>
            <RightSide/>
        </main>
    );
}



//
// <main>
//     <div className="test2">
//
//         <section className="left-side">
//             <div className="top">
//                 <img src="" alt=""></img>
//                 <h2><a href="">Register & Login form Design fdahsfgsda fhgasfjsa</a></h2>
//             </div>
//             <div className="tags">
//                 <a>#coderz</a>
//                 <a>#programowanie</a>
//                 <a>#c++</a>
//                 <a>#webdesign</a>
//                 <a>#source</a>
//                 <a>#programowanie</a>
//                 <a>#coderz</a>
//             </div>
//             <div className="content">
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos
//                     impedit, inventore ipsum quisquam saepe vero voluptatibus. Lorem ipsum dolor sit amet,
//                     consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos impedit, inventore ipsum
//                     quisquam saepe vero voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Aliquam aliquid culpa deleniti eos impedit, inventore ipsum quisquam saepe vero
//                     voluptatibus.</p>
//                 <button>Read more</button>
//             </div>
//             <div className="activity">
//                 <p className="author"><i className="fa-regular fa-user"></i> MatKur</p>
//                 <p className="likes"><i className="fa-regular fa-heart"></i> 1000</p>
//             </div>
//         </section>
//         <section className="left-side">
//             <div className="top">
//                 <img src="" alt=""></img>
//                 <h2><a href="">Register & Login form Design fdahsfgsda fhgasfjsa</a></h2>
//             </div>
//             <div className="tags">
//                 <a>#coderz</a>
//                 <a>#programowanie</a>
//                 <a>#c++</a>
//                 <a>#webdesign</a>
//                 <a>#source</a>
//                 <a>#programowanie</a>
//                 <a>#coderz</a>
//             </div>
//             <div className="content">
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos
//                     impedit, inventore ipsum quisquam saepe vero voluptatibus. Lorem ipsum dolor sit amet,
//                     consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos impedit, inventore ipsum
//                     quisquam saepe vero voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Aliquam aliquid culpa deleniti eos impedit, inventore ipsum quisquam saepe vero
//                     voluptatibus.</p>
//                 <button>Read more</button>
//             </div>
//             <div className="activity">
//                 <p className="author"><i className="fa-regular fa-user"></i> MatKur</p>
//                 <p className="likes"><i className="fa-regular fa-heart"></i> 1000</p>
//             </div>
//         </section>
//         <section className="left-side">
//             <div className="top">
//                 <img src="" alt=""></img>
//                 <h2><a href="">Register & Login form Design fdahsfgsda fhgasfjsa</a></h2>
//             </div>
//             <div className="tags">
//                 <a>#coderz</a>
//                 <a>#programowanie</a>
//                 <a>#c++</a>
//                 <a>#webdesign</a>
//                 <a>#source</a>
//                 <a>#programowanie</a>
//                 <a>#coderz</a>
//             </div>
//             <div className="content">
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos
//                     impedit, inventore ipsum quisquam saepe vero voluptatibus. Lorem ipsum dolor sit amet,
//                     consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos impedit, inventore ipsum
//                     quisquam saepe vero voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Aliquam aliquid culpa deleniti eos impedit, inventore ipsum quisquam saepe vero
//                     voluptatibus.
//                     amet, consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos impedit, inventore
//                     ipsum quisquam saepe vero voluptatib</p>
//                 <button>Read more</button>
//             </div>
//             <div className="activity">
//                 <p className="author"><i className="fa-regular fa-user"></i> MatKur</p>
//                 <p className="likes"><i className="fa-regular fa-heart"></i> 1000</p>
//             </div>
//         </section>
//         <section className="left-side">
//             <div className="top">
//                 <img src="" alt=""></img>
//                 <h2><a href="">Register & Login form Design fdahsfgsda fhgasfjsa</a></h2>
//             </div>
//             <div className="tags">
//                 <a>#coderz</a>
//                 <a>#programowanie</a>
//                 <a>#c++</a>
//                 <a>#webdesign</a>
//                 <a>#programowanie</a>
//                 <a>#programowanie</a>
//                 <a>#programowanie</a>
//                 <a>#source</a>
//                 <a>#programowanie</a>
//                 <a>#coderz</a>
//             </div>
//             <div className="content">
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos
//                     impedit, inventore ipsum quisquam saepe vero voluptatibus. Lorem ipsum dolor sit amet,
//                     consectetur adipisicing elit. Aliquam aliquid culpa deleniti eos impedit, inventore ipsum
//                     quisquam saepe vero voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Aliquam aliquid culpa deleniti eos impedit, inventore ipsum quisquam saepe vero
//                     voluptatibus.</p>
//                 <button>Read more</button>
//             </div>
//             <div className="activity">
//                 <p className="author"><i className="fa-regular fa-user"></i> MatKur</p>
//                 <p className="likes"><i className="fa-regular fa-heart"></i> 1000</p>
//             </div>
//
//
//         </section>
//
//         <div className="pagination">
//             <a href="#">1</a>
//             <a href="#" className="active">2</a>
//             <a href="#">3</a>
//             <a href="#">4</a>
//             <a href="#">5</a>
//         </div>
//
//     </div>
//
//     <section className="right-side">
//         <div className="posts-main">
//             <div className="title-h3"><h3>Newest threads</h3></div>
//             <div className="newest-posts">
//                 <div className="container">
//                     <div className="img">
//                         <img src="" alt=""></img>
//                     </div>
//                     <div className="news">
//                         <h4 className="title">Register and form</h4>
//                         <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                             Corporis in iste nihil non obcaecat</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="newest-posts">
//                 <div className="container">
//                     <div className="img">
//                         <img src="" alt=""></img>
//                     </div>
//                     <div className="news">
//                         <h4 className="title">Register and form</h4>
//                         <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                             Corporis in iste nihil non obcaecat</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="newest-posts">
//                 <div className="container">
//                     <div className="img">
//                         <img src="" alt=""></img>
//                     </div>
//                     <div className="news">
//                         <h4 className="title">Register and form</h4>
//                         <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                             Corporis in iste nihil non obcaecat</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="newest-posts">
//                 <div className="container">
//                     <div className="img">
//                         <img src="" alt=""></img>
//                     </div>
//                     <div className="news">
//                         <h4 className="title">Register and form</h4>
//                         <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                             Corporis in iste nihil non obcaecat</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="newest-posts">
//                 <div className="container">
//                     <div className="img">
//                         <img src="" alt=""></img>
//                     </div>
//                     <div className="news">
//                         <h4 className="title">Register and form</h4>
//                         <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                             Corporis in iste nihil non obcaecat</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="test">
//             <div className="posts-main">
//                 <div className="title-h3"><h3>Top users</h3></div>
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="activity-user">
//                             <h4 className="title">MatiaxKur</h4>
//                             <p><i className="fa-solid fa-chart-line"></i> 50</p>
//                             <p><i className="fa-regular fa-thumbs-up"></i> 24</p>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="activity-user">
//                             <h4 className="title">ADmin1</h4>
//                             <p><i className="fa-solid fa-chart-line"></i> 50</p>
//                             <p><i className="fa-regular fa-thumbs-up"></i> 24</p>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="activity-user">
//                             <h4 className="title">MatiaxKur</h4>
//                             <p><i className="fa-solid fa-chart-line"></i> 50</p>
//                             <p><i className="fa-regular fa-thumbs-up"></i> 24</p>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="activity-user">
//                             <h4 className="title">MatiaxKur</h4>
//                             <p><i className="fa-solid fa-chart-line"></i> 50</p>
//                             <p><i className="fa-regular fa-thumbs-up"></i> 24</p>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="activity-user">
//                             <h4 className="title">MatiaxKur</h4>
//                             <p><i className="fa-solid fa-chart-line"></i> 50</p>
//                             <p><i className="fa-regular fa-thumbs-up"></i> 24</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//
//             <div className="top-news posts-main">
//                 <div className="title-h3"><h3>Top news</h3></div>
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="top-news">
//                             <h4 className="title">Lorem ipsum dolor sit amet,sfdasfdsa fdasfsd (<i
//                                 className="fa-regular fa-thumbs-up"></i> <span>24</span> ) </h4>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="top-news">
//                             <h4 className="title">Lorem ipsum dolor sit amet,sfdasfdsa fdasfsd (<i
//                                 className="fa-regular fa-thumbs-up"></i> <span>24</span> ) </h4>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="top-news">
//                             <h4 className="title">Lorem ipsum dolor sit amet,sfdasfdsa fdasfsd (<i
//                                 className="fa-regular fa-thumbs-up"></i> <span>24</span> ) </h4>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="top-news">
//                             <h4 className="title">Lorem ipsum dolor sit amet,sfdasfdsa fdasfsd (<i
//                                 className="fa-regular fa-thumbs-up"></i> <span>24</span> ) </h4>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="newest-posts">
//                     <div className="container-activity">
//                         <div className="img-user">
//                             <img className="img-user" src="" alt=""></img>
//                         </div>
//                         <div className="top-news">
//                             <h4 className="title">Lorem ipsum dolor sit amet,sfdasfdsa fdasfsd (<i
//                                 className="fa-regular fa-thumbs-up"></i> <span>24</span> ) </h4>
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//
//
//         </div>
//
//     </section>
// </main>