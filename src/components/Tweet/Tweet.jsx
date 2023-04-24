import { useState, useEffect } from "react"
import { UserCard, Dialogs, Follow, Foto, Following, Logo, Line, FotoContainer, StatisticsContainer, TweetsText, FollowersText } from "./Tweet.styled"

const Tweet = ({ users }) => {
    const [isFollow, setIsFollow] = useState([]);

    useEffect(() => { 
    const isFollowing = JSON.parse(localStorage.getItem("isFollow"));
        if (isFollowing) {setIsFollow(isFollowing)}
    }, [])

    useEffect(() => { 
        localStorage.setItem("isFollow", JSON.stringify(isFollow))
    },[isFollow])
    
    const handleFollow = (id) => {
        setIsFollow(prevState => [...prevState, id])
    }

    const handleUnfollow = (id) => { 
        setIsFollow(prevState=>prevState.filter(user=>user!==id))
    }

    return (
        <>
            { users.length!==0 && users.map(
                    (user) => { 
                        return (
                            <UserCard key={user.id}>
                                <Logo src="images/logo.png" width="76" alt="Logo" />
                                <Dialogs src="images/dialogs.png" width="308" alt="Dialogs" />
                                <Line src="images/line.png" alt="line" />
                                <FotoContainer>
                                    <img src="images/ellipse.png" alt="ellipse" />
                                    <Foto src={user.avatar} width="62" alt="foto" />
                                </FotoContainer>
                                <StatisticsContainer>
                                    <TweetsText>Tweets: {user.tweets}</TweetsText>
                                    {isFollow.includes(user.id) ?
                                        <FollowersText>Followers: {(user.followers > 999) ?
                                            ((user.followers + 1).toString().slice(0, (user.followers + 1).toString().length - 3) + ','
                                            + (user.followers + 1).toString().slice((user.followers + 1).toString().length - 3, (user.followers + 1).toString().length)) :
                                            user.followers + 1}
                                        </FollowersText> :
                                        <FollowersText>Followers: {(user.followers > 999) ?
                                            (user.followers.toString().slice(0, user.followers.toString().length - 3) + ','
                                            + user.followers.toString().slice(user.followers.toString().length - 3, user.followers.toString().length)) :
                                            user.followers}
                                        </FollowersText>
                                    }
                                    {isFollow.includes(user.id)  ?
                                        <Following type="button" onClick={()=>handleUnfollow(user.id)}>Following</Following> :
                                        <Follow type="button" onClick={()=>handleFollow(user.id)}>Follow</Follow>
                                    }
                                </StatisticsContainer>
                            </UserCard>
                        )
                    }
                )}
        </>
    )
}

export default Tweet