import { useEffect, useState } from 'react';
import './App.css';
import { supabase} from './client'

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: "", content: ""})
  const {title, content} = post;


  const fetchPosts = async () => {
    const { data } = await supabase.from('testTB').select()
    setPosts(data)
  }

  const createPost = async () => {
     await supabase.from('testTB')
    .insert([
      {title, content}
    ]).single()
    setPost({ title: "", content: ""})
    fetchPosts()
    
  } 

  useEffect(() => {
fetchPosts()
  })


  return (
    <div className="App">
      <input type="text" value={title} placeholder="Title"
       onChange={(e)=> setPost({...post, title: e.target.value})}
      />
      <input type="text" value={content} placeholder="Content"
       onChange={(e)=> setPost({...post, content: e.target.value})}
      />

      <button onClick={createPost}>Create Post</button>

      <br />

      <h5>Posts:</h5>

      {
        posts.map( (post, index) => (
           <div key={post.id}>
             <span>{post.title}</span>:<span>{post.content}</span>
           </div>
        ))
      }

      
    </div>
  );
}

export default App;
