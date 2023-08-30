import "./Home.css"
import {BlogMain} from "./Blog-main/Blog-main";
import {BlogSide} from "./BlogSide/BlogSide";
import {UserPanel} from "./UserPanel/UserPanel";
import {useEffect, useState} from "react";

export const Home = ({user}) => {

    return (
        <div className="blog-container">
            <UserPanel/>
            <div className="main-content">
                <BlogMain/>
                <BlogSide/>
            </div>
        </div>
    );
}