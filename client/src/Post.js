import {Link } from "react-router-dom";

export default function Post({_id, title, summary, cover, content}){
return(
    <div className="post">
        <div className="image">
          <Link to="">
            <img src={cover}></img>
            </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          </Link>
          <p className="summary">{summary}</p>
        </div>
      </div>
)
}