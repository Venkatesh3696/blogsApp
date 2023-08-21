// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, topic, author, imageUrl, avatarUrl} = blogDetails
  return (
    <Link to={`blogs/${id}`}>
      <li className="blog-container">
        <img
          alt={`thumbnail${id}`}
          src={imageUrl}
          className="thumbnail-image"
        />
        <div>
          <p className="grey">{topic}</p>
          <p className="title">{title}</p>
          <div className="author-container">
            <img alt={author} src={avatarUrl} className="avatar" />
            <p className="grey">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
