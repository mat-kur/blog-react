import react from "react"



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
        <div>
            {topComment && (
                <div>
                    <p>Najbardziej lubiany komentarz:</p>
                    <p>{topComment.author.username}</p>
                    <p>{topComment.description}</p>
                    <p>{topComment.date}</p>
                    <p>Likes: {topComment.likes}</p>
                </div>
            )}
        </div>
    );
}