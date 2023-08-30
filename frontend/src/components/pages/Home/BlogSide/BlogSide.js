import "./BlogSide.css"
import {RecentPosts} from "./RecentPosts/RecentPosts";
import {Categories} from "./Categories/Categories";
import {TopThread} from "./TopThread/TopThread";

export const BlogSide = props => {
    return (
        <div className="test2">
            <RecentPosts/>
            <TopThread/>
            <Categories/>
        </div>
    )
}