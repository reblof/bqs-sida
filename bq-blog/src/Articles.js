import React,{ useEffect, useState } from 'react';

function Articles () {
  const [posts, setPosts] = useState([]);
  function getPost(){
    const fetchedPosts = JSON.parse(localStorage.getItem('posts'));
    setPosts(fetchedPosts);
    return posts;
    
  }
  useEffect(()=>{
    getPost()
  }, [])

  return (
    <section className="articles-section">
      <div className="u-flex u-col-1 u-align-center">
        {posts?.map((post, index)=>{
          return (
            <article id={`art-${index}`}>
              <a href={post.Länk}>
                <h2>{post.Titel}</h2>
                <p>{post.Beskrivning}</p>
                <span class="button">Läs inlägget</span>
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Articles
