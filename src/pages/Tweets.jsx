import { useEffect, useState } from "react"
import * as API from "../services/api";
import Tweet from "../components/Tweet/Tweet";
import { Back, StyledLink, UserList } from "./Tweets.styled";
import LoadMore from "components/LoadMore/LoadMore";

const Tweets = () => { 
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => { 
        API.findUsers()
            .then(res => res.json())
            .then(res => setUsers(res.slice(0, (page*3))))  
            .catch(error => console.log(error))
    }, [page])  
    
    const onPageChange = () => { 
        setPage(prevState => prevState + 1)
    }

    return (
        <>
            <Back type="button"><StyledLink to='/'>Back</StyledLink></Back>
            <UserList>
                <Tweet users={users} ></Tweet>
            </UserList>
            <LoadMore onPageChange={onPageChange}/>
        </>
        
    )
}

export default Tweets