import React from 'react';
import { Link } from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="info">
            <span>Vivien</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>lorem blablablablalllllllllllllllllllllllllllllllllllll llldsjfdkjd jdkfjlkdfjhlsd jkldfjskldfjklsdfj jdsfklfjldsk</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor tellus at tempor congue. Aliquam erat volutpat. Nam blandit, quam id consectetur sagittis, elit mauris dictum elit, eu commodo erat libero at risus. In hac habitasse platea dictumst.

Morbi malesuada sollicitudin mauris eget tincidunt. Sed id semper risus. Nulla auctor varius eros, et feugiat nisl condimentum ut. Fusce euismod commodo est, vel efficitur odio convallis vel. Sed pharetra eleifend elit.

Vivamus id ipsum vestibulum, congue mauris a, bibendum sem. Sed fermentum enim vel massa varius, id faucibus orci auctor. Nunc vel velit vel massa efficitur varius eget at velit. Aliquam id elit eget sapien tincidunt congue a vel ligula.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor tellus at tempor congue. Aliquam erat volutpat. Nam blandit, quam id consectetur sagittis, elit mauris dictum elit, eu commodo erat libero at risus. In hac habitasse platea dictumst.

Morbi malesuada sollicitudin mauris eget tincidunt. Sed id semper risus. Nulla auctor varius eros, et feugiat nisl condimentum ut. Fusce euismod commodo est, vel efficitur odio convallis vel. Sed pharetra eleifend elit.

Vivamus id ipsum vestibulum, congue mauris a, bibendum sem. Sed fermentum enim vel massa varius, id faucibus orci auctor. Nunc vel velit vel massa efficitur varius eget at velit. Aliquam id elit eget sapien tincidunt congue a vel ligula.
</p>
      </div>
      <Menu/>
    </div>
  )
};

export default Single;
