import axios, { Axios } from "axios";
import { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const postData = () => {
    // e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body
    }).then(res => console.log('Response: ', res)).catch(err => console.log('error: ', err))
  }

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        <hr/>
        <label htmlFor="body">Body</label>
        <input type="text" id="body" value={body} onChange={(e) => {setBody(e.target.value)}}/>
        <hr/>
        <button onClick={postData}>Post</button>
      </form>
    </div>
  );
}

export default PostForm;
