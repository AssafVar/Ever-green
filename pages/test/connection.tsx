import React, {useEffect, useState} from "react";
import axios from "axios";

  export default function Home() {
    const [value, setValue] = useState('');
    const [postList, setPostList] = useState([]);
    
    function  onSubmit (value) {
        console.log(value)
          let data={content : value}
            axios.post('/api/sendpost', data)
            .then((response) => {
              setPostList(response.data)
        })
        .catch((e) => { console.log(e)}
        )}
    console.log(value)
    useEffect(() => {
        axios.get('/api/sendpost')
        .then((response) => {
            setPostList(response.data)
        })
        .catch((e) => { console.log(e)}
        )}, []);

    return (
      <div>
        <h1>new page</h1>
        <input onChange={(e)=>setValue(e.target.value)}></input>
        <button onClick={()=>onSubmit(value)}>send</button>
        <div>
            {postList.map((post) => (
                <div key={post.post_id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    </div>
    )}




