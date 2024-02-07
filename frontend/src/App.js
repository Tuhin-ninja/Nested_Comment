import {useState} from 'react';
import Comment from './components/Comment';
import logo from './logo.svg';
import './App.css';


const dummyComments =[
  {
    id : 1,
    body: 'This is Comment 1'

  },
  {
    id : 2,
    body: 'This is Comment 2'
  },
  {
    id : 3,
    body: 'This is Comment 3'
  }

];


function App() {
  const [comments, setComments] = useState(dummyComments);
  const [commentBody, setCommentBody] = useState('');
  const onComment = ()=>{
    const newComment = {
      id: comments.length + 1,
      body: commentBody
    };

    setComments([...comments, newComment]);
    setCommentBody('');
  }
  return (
    <div className='flex flex-col h-screen w-scrren p-6 gap-3'>
      <span className='text-3xl'>React Nested Comments</span>
      <div>
        <input placeholder='whate are your thoughts?' 
        value = {commentBody}
        onChange={(e)=>setCommentBody(e.target.value)}
        className='border-11pxl border-zinc-400 p-4'></input>
        <button className='border-[1px] rounded-full border-zinc-400 v-20'
        onClick={onComment}
        >Comment</button>
      </div>
      <div className='flex flex-col gap-4 mt-10'>
        {comments.map(comment=>{
           return <Comment comment={comment}/>
        })}
      </div>
    </div>
  );
}

export default App;
