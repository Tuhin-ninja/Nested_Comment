import { useState,useRef, useEffect } from 'react';
// import {ReactComponent as downArrow} from './down-arrow.svg';

import React from 'react'

const Comment = ({comment}) => {
  const [replying, setReplying] = useState(false);
  const onReply = ()=>{
    setReplying(!replying);
  }
  
  return (
    <div className='flex flex-col border-[1px] border-zinc-500 rounded-md'>
      <span>{comment.body}</span>
      <button onClick={onReply}> reply </button>
      {replying && <input placeholder='reply to the comment'
      className='border-[1px] border-zinc-400 p-4 w-3/4'
      ></input>}
    </div>
  )
}

export default Comment;