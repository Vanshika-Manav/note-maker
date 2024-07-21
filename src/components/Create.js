import React,{useState} from 'react';
import axios from 'axios';
import '../components/output.css'
import { Link } from 'react-router-dom';

const Create = () => {
    const [note,setNote] = useState({
        title:"",
        createnote:"",
        
    });
    let name,value;
    const postUserData=(event) => {
        name = event.target.name;
        value = event.target.value;
        setNote({...note,[name]:value});
    };
    const header = {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const {title,createnote} = note;
       
       if(title && createnote ){
       const res = axios.post('https://note-app-f9029-default-rtdb.firebaseio.com/userNoteRecords.json',{
        event_note:note,
        header,
    
       }
       );
       if(res){
        setNote({
            title:"",
             createnote:"",
            

        });
        alert("YOUR NOTE IS STORED.....");
       } else{
        alert("Please fill the data first....");
       }
    } else{
       alert("PLEASE fill the data first....");
       }
       };


  return (
    <>
    
    <div className='main'>
    <div className='nav'>
    <button ><Link to="/read" className='link'>Read Notes</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <button ><Link to="/update" className='link'>Update Notes</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button ><Link to="/delete" className='link'>Delete Notes</Link></button>&nbsp;&nbsp;&nbsp;&nbsp; */}
    </div>
 
    <hr></hr>
        <form className='form'>
        <h2>CREATE YOUR OWN QUICK NOTES......</h2>
        <div className="mb-3">
    <label className="form-label">Title</label>
    <input type="text" method="POST" name='title' className="form-control" placeholder="enter the title of your note here ...." value={note.title} onChange={postUserData}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Create Note ....</label>
    <textarea type="text" rows="6" method="POST" name='createnote' className="form-control" placeholder="Create your note here ...." value={note.createnote} onChange={postUserData}/>
  </div>
 
 
  <button type="submit" className="submit" onClick={handleSubmit}>Submit</button>
</form>
</div>

    </>
  )
  }


export default Create
