import React from 'react'

function Menu() {

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
    <div className="menu">
        <h1>Other post you may like</h1>
        {post.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
