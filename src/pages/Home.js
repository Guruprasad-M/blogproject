import { getDocs, collection,deleteDoc,doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db,auth} from './../firebase-config';
import "./Home.css";

function Home({isAuth}) {
  const [postLists, setPostlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        setPostlist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [postsCollectionRef]);

  const deletePost=async(id)=>{
    const postDoc = doc(db,"posts",id)
   await deleteDoc(postDoc)
  }
   
  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or any other UI
  }

  return (
    <div className="homepage">
      {postLists.map((post) => (
        <div key={post.id} className="post">
          <div className='posts'>
            <div className='postheader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
              <div className='delete' > {isAuth && post.author.id===auth.currentUser.uid && <button onClick={()=>{deletePost(post.id)}}>{" "}&#128465;</button>}</div>
            </div>
            <div className="postTextContainer">
              {post.postText}
            </div>
            <h3>~{post.author.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
