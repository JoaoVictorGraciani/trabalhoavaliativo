import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./SkeletonCard.css";

function SkeletonCard() {

    return (

        <div className="skeleton-card">

            <Skeleton height={300}/>

            <Skeleton height={25}/>

            <Skeleton width={120}/>

        </div>

    )

}

export default SkeletonCard;