
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/output.css'




const Read = () => {

   //const headers = {"Access-Control-Allow-Origin": "*"};
   
    const [notes, setNotes] = useState([]);
    function getData() {
        axios.get('https://note-app-f9029-default-rtdb.firebaseio.com/userNoteRecords.json')
   
        .then(response => {
           const fetchedNotes = [];
     
           for (let key in response.data) {
              fetchedNotes.push({
                 ...response.data[key],
                 id: key
              });
           }
           console.log(fetchedNotes);
     
           setNotes(fetchedNotes);

        })

    };
   // async function handledelete(id){
   //    const del = axios.delete('https://note-app-f9029-default-rtdb.firebaseio.com/userNoteRecords.json/'+{id})
   //    console.log(del);
   // }
   const handleDelete = (id) => {
      axios.delete(`https://note-app-f9029-default-rtdb.firebaseio.com/userNoteRecords.json/${id}`)
        .then(response => {
          // Update the state to remove the deleted item
          setNotes(notes.filter(note => note.id !== id));
        })
        .catch(error => {
          console.error('There was an error deleting the item!', error);
        });
    };
    
    useEffect(() => {
       getData();
        
     }, []);
    

     


  return (
    <><div className='read'>
    <h1>
        READ THE CREATED NOTED .......
    </h1>
    <table className="table table-hover ">
   <thead>
      <tr>
         <th>Id</th>
         <th>Title</th>
         <th>Content</th>
         <th></th>
         <th></th>
      </tr>
   </thead>
   <tbody>
      {notes.map((note,index) => (
         <tr key={note.id}>
            <th scope='row'>{index+1}</th>
            <td>{note.event_note.title}</td>
            <td>{note.event_note.createnote}</td>
            <td>
                <button className='btn btn-warning' >EDIT</button>
            </td>
            <td>
                <button className='btn btn-danger' onClick={(handleDelete(note.id))} >DELETE</button>
            </td>
         </tr>
      ))}
   </tbody>
</table>
</div>  
    </>
  )
}

export default Read
