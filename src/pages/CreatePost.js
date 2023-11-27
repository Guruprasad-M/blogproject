import React, { useEffect, useState } from 'react'
import {addDoc,collection} from 'firebase/firestore'
import {db,auth} from "../firebase-config"
import { useNavigate } from 'react-router-dom'
import "./CreatePost.css"

function CreatePost({isAuth}) {

  const [title,setTitle] =useState("")
  const [postText,setPostText]=useState("")
  const postsCollectionRef=collection(db,"posts")
  let navigate=useNavigate()
  const createpost = async ()=>{
    await addDoc(postsCollectionRef,{title,postText,author:{name: auth.currentUser.displayName,id: auth.currentUser.uid}
    })
    navigate("/")
  }

  useEffect(()=>{
  if(!isAuth){
    navigate("/Login")
  }
  },[])

  return (
    <div className='cpfront'>
      <div className="cpContainer"> 
      <h1>CreatePost</h1>
      <div className="inputGp">
        <label>Title: </label>
        <input placeholder='Title...' onChange={(event)=>{
            setTitle(event.target.value)
          }}
        />
      </div>
      <div className="inputGp">
        <label>Post: </label>
        <textarea placeholder="Post..."  onChange={(event)=>{
            setPostText(event.target.value)
          }}/>
      </div>
      <button onClick={createpost}>Submit Post</button>


    
    
    
    
      </div>
      </div>
  )
}

export default CreatePost