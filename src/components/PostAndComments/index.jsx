import SinglePost from "../Main/components/Post/SinglePost"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

    function PostAndComments({ posts, URL, loggedInUser, loggedInUserInitials }) {

    const [showPost, setShowPost] = useState(null)
    const { postId } = useParams()

    useEffect(() => {
        if (posts && postId) {
            setShowPost(posts.find((post) => Number(post.id) === Number(postId)))
        }
    }, [posts, postId])

    
    if (!showPost) return <p>No post to display</p>
    return (
        <section>
            <SinglePost post={showPost} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} />
        </section>
    )
}

export default PostAndComments