import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext"

const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className={styles.create_post}>
      <h2>
        Create a Post
      </h2>
      <p>Write about what you want! Share what you know!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type='text'
            name='image '
            requride
            placeholder='Think a good title...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Image URL:</span>
          <input
            type='text'
            name='image'
            requride
            placeholder='Insert an image that represents your post...'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Content:</span>
          <textarea
            type='text'
            name='body'
            requride
            placeholder='Insert the content of your porst...'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          >
          </textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type='text'
            name='tags'
            requride
            placeholder='Insert tags splited by a coman...'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {
        /*
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}                
          */
        }
      </form>
    </div>
  )
}

export default CreatePost