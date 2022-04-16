import { useEffect, useState } from 'react';
import './App.css';
import { supabase} from './client'
import { Button, } from 'react-bootstrap'
import Header from './components/Header';
import Router from './routes/Routes';
import { Routes , Route } from 'react-router-dom'
import AddClient from './add/AddClient'
import HomeScreen from './home/HomeScreen'
import Profile from './profile/Profile'



const App = () => {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: "", content: ""})
  const {title, content} = post;

  const [search, setSearch] = useState("")
  const [searchedData, setSearchedData] = useState([]);


  const fetchPosts = async () => {
    const { data } = await supabase.from('testTB').select()
    setPosts(data)
  }


  const fetchPostsByName = async () => {
    const { data , error} = await supabase.from('testTB')
    .select()
    .like('title', `%${search}%`)
    console.log('filter: ', data, error);
    setSearchedData(data);
    
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
      
    

     
      <Header />
      < Router />

      {/* <p>Search</p>
       <input type="text" placeholder="Search"
       onChange={(e)=> setSearch(e.target.value) }
      />
 <button onClick={fetchPostsByName}>search</button>
 <Button variant="primary">Primary</Button>
{
  searchedData.map( (post, index) => (
           <div key={post.id}>
             <span>{post.title}</span>:<span>{post.content}</span>
           </div>
        ))
}


      <br />
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
      } */}

      
    </div>
  );
}

export default App;
