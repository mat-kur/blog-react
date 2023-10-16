import React from "react";


export const TopComment = ({userComments}) => {


    const topComment = findMostLikedComment(userComments)

    function findMostLikedComment(userComments) {
        let mostLikedComment = null;
        let maxLikes = 1;


        if (userComments !== null) {
            userComments.forEach(comment => {
                if (comment.likes > maxLikes) {
                    maxLikes = comment.likes;
                    mostLikedComment = comment;
                }
            });
        }

        return mostLikedComment;

    }

    return (
        <>
        {topComment && (
        <section className="users-comments-top">
            <h3>TOP COMMENT</h3>
            <div className="likes-activity">
                <p className="comment-likes">Likes: {topComment.likes}</p>
                <p className="date-clock"><i className="fa-regular fa-clock"></i> {topComment.date}</p>
            </div>
            <div className="top-comment">
                <div>
                    <img src="./default-avatar.jpg" alt=""></img>
                    <a href="#">{topComment.author.username}</a>
                </div>
                <p className="content">{topComment.description}</p>
            </div>
            {/*<div className="comment-activity">*/}
            {/*    <i className="fa-solid fa-pencil"></i>*/}
            {/*    <i className="fa-solid fa-trash"></i>*/}
            {/*    <i className="fa-solid fa-reply"></i>*/}
            {/*    <i className="fa-solid fa-flag"></i>*/}
            {/*    <i className="fa-regular fa-heart"></i>*/}
            {/*</div>*/}
        </section>
        )}
        </>
    );
}