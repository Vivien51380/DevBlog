import React from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {

  const [value, setValue] = useState('');

  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Public
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input style={{display:"none"}} type="file" id='file' name="" />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
          <button>Save as a draft</button>
          <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name='cat' value="web" id="web"/>
          <label htmlFor="web">Web</label></div>
          <div className="cat">
          <input type="radio" name='cat' value="technology" id="technology"/>
          <label htmlFor="technology">Technology</label></div>
          <div className="cat">
          <input type="radio" name='cat' value="actu" id="actu"/>
          <label htmlFor="actu">Actu</label></div>
        </div>
      </div>
    </div>
  )
};

export default Write;
