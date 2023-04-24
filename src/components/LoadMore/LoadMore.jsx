import { FollowersText } from "./LoadMore.styled"

const LoadMore = ({ onPageChange }) => { 
    return (
        <FollowersText type="button" onClick={() => { onPageChange() }}>Load More</FollowersText>
    )
}

export default LoadMore