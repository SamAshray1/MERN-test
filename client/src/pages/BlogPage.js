import { useEffect, useState } from "react";
import Post from "../Post";
import { BASE_URL } from "../helper";

export default function BlogPage(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    console.log(posts);
    let relArray = []
    for (let index = 0; index < posts.length; index++) {
        if(posts[index].type === "Religion"){
            relArray.push(posts[index]);
        }
    }
    console.log("Rel", relArray);

    return(
        <>
        <h1>Latest Posts</h1>
        <div className="blog-page">
        
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}

        </div>
        <br />
        <h1>Religion</h1>
        <div className="blog-page">
            {relArray.length > 0 && relArray.map(relEle => (
                <Post {...relEle}/>
            ))}
        </div>
        <h1>Tech</h1>
        <h1>Random</h1>
        </>
    )
};