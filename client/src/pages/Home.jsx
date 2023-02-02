import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const post = [
    {
      id: 1,
      title: "Lorem ffffffffffffffffffffffffffffffffffffffffff",
      desc: "loremgggggggggggggggggggggggggggggggggggggggggg",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Lorem ffffffffffffffffffffffffffffffffffffffffff",
      desc: "loremgggggggggggggggggggggggggggggggggggggggggg",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Lorem ffffffffffffffffffffffffffffffffffffffffff",
      desc: "loremgggggggggggggggggggggggggggggggggggggggggg",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Lorem ffffffffffffffffffffffffffffffffffffffffff",
      desc: "loremgggggggggggggggggggggggggggggggggggggggggg",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "Lorem ffffffffffffffffffffffffffffffffffffffffff",
      desc: "loremgggggggggggggggggggggggggggggggggggggggggg",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]

  return (
    <div className='home'>
      <div className="posts">
        {post.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};


export default Home;



