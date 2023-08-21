// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    // console.log(data)

    const formattedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogData: formattedData, isLoading: false})
  }

  renderBlogItem = () => {
    const {blogData} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogData

    return (
      <div className="blog-item-container">
        <h1>{title}</h1>
        <div className="avatar-container">
          <img className="avatar" alt={author} src={avatarUrl} />
          <p>{author}</p>
        </div>
        <img alt={title} src={imageUrl} className="blog-image" />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="tailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
