// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(blog => ({
      id: blog.id,
      author: blog.author,
      avatarUrl: blog.avatar_url,
      imageUrl: blog.image_url,
      title: blog.title,
      topic: blog.topic,
    }))

    this.setState({blogsList: formattedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <ul className="blogs-main-container">
        {isLoading ? (
          <Loader
            testid="loader"
            type="tail-spin"
            color="#00BFFF"
            height={50}
            width={50}
          />
        ) : (
          blogsList.map(blog => (
            <BlogItem
              blogDetails={blog}
              key={blog.title}
              className="blog-item"
            />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
