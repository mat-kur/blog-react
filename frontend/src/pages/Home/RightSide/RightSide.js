import "./RightSide.css"
import {NewThreads} from "./NewThreads/NewThreads";
import {TopUsers} from "./TopUsers/TopUsers";
import {TopThreads} from "./TopThreads/TopThreads";

export const RightSide = props => {


    return (
        <section className="right-side">
            <NewThreads/>
                <div className="posts-main">
                    <TopUsers/>
                </div>
                <div className="posts-main">
                    <TopThreads/>
                </div>
        </section>
    );
}