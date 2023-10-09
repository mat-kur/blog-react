import "./ArticleView.css"

import React from 'react';
import {UsersComments} from "./UsersComments/UsersComments";
import {FormComment} from "./FormComment/FormComment";


export const ArticleView = props => {
    return (
        <>
            <section className="article-view">
                <div className="article-info">
                    <img src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt=""></img>
                        <h3>Register & Login form Design fdasjfhdsahfk fashdkjfhksda fhjksafhksda</h3>
                </div>
                <div className="article-tags">
                    <a href="">#coderz</a>
                    <a href="">#programowanie</a>
                    <a href="">#python</a>
                    <a href="">#webdesign</a>
                    <a href="">#duczkiBest</a>
                </div>
                <div className="article-content">
                    <p className="article-content-par">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias esse iusto necessitatibus nemo
                        nihil officiis pariatur quas quidem voluptas! Sed.
                    </p>


                    <p className="article-content-par">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque eaque modi nihil
                        nostrum repellendus! Accusamus at excepturi expedita facere, inventore numquam praesentium
                        provident quisquam rem sunt voluptates voluptatum? Adipisci atque eveniet exercitationem natus.
                        Doloremque dolorum explicabo, fugiat ipsa nulla odio suscipit. Ad adipisci aut expedita
                        laboriosam praesentium quod vel?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias esse iusto necessitatibus nemo
                        nihil officiis pariatur quas quidem voluptas! Sed.
                    </p>
                    <p className="article-content-par">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias esse iusto necessitatibus nemo
                        nihil officiis pariatur quas quidem voluptas! Sed.
                    </p>

                    <p className="article-content-par">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias esse iusto necessitatibus nemo
                        nihil officiis pariatur quas quidem voluptas! Sed.
                    </p>
                </div>
                <div className="article-activity">
                    <p className="author"><i className="fa-regular fa-user"></i> MatKur</p>
                    <p className="likes"><i className="fa-regular fa-heart"></i> 1000</p>
                </div>
            </section>
            <section className="article-likes">
                <div>
                    <p>This thread has been liked by:</p>
                    <button><i className="fa-solid fa-arrow-down"></i></button>
                </div>
                <div className="users-like-thread">
                    <ul>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                        <li><a href="">Admin,</a></li>
                    </ul>
                </div>
            </section>
            <FormComment/>
            <UsersComments/>
        </>
    );
}