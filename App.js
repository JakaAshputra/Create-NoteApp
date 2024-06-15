import React, {useState} from 'react'
import Home from './src/Screens/home'
import AddNote from './src/Screens/addNote'
import EditNote from './src/Screens/editNote'

const CurrentPageWidget = ({
  currentPage, 
  noteList, 
  setCurrentPage,
  addNote,
  deleteNote,
  updateNote,
  currentNote,
  editCurrentNote,
}) => {
  switch (currentPage) {
    case 'home':
      return(
        <Home
        noteList={noteList}
        setCurrentPage={setCurrentPage}
        deleteNote={deleteNote}
        updateNote={updateNote}
        editCurrentNote={editCurrentNote}
        />
      )
      case 'add':
        return (
        <AddNote 
        setCurrentPage={setCurrentPage}
        addNote={addNote}
        />
      )
      case 'edit':
        return (
        <EditNote
          setCurrentPage={setCurrentPage}
          currentNote={currentNote}
          editCurrentNote={editCurrentNote}
       />
      )
      default:
        return <Home/>
  }
}
const App = () => {
  const [currentNote, setCurrentNote] = useState({})
  const [currentPage, setCurrentPage] = useState('home')
  const [noteList, setNoteList] = useState([
    {id: 1,
      title: 'Note Pertama',
      desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ])

  const addNote = (title,desc) => {
    const id =
    noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList, 
      {
        id, 
        title: title, 
        desc: desc,
      },
    ]);
  };

  

  const updateNote = (note) => {
    setCurrentNote(note)
    // const updatedNoteList = noteList.map(note => {
    //   if (note.id === id) {
    //     return { ...note, title: newTitle, desc: newDesc };
    //   }
    //   return note;
    // });
    // setNoteList(updatedNoteList);
  };

  const editCurrentNote = (note) => {
    const filteredNotes = noteList.filter((item) => item.id !== note.id);
    const updatedFilter = [...filteredNotes, note];
    setNoteList(updatedFilter);
  }

  
  const deleteNote = (id) => {
    const deleteNote = noteList.filter(note => note.id !== id);
    setNoteList(deleteNote);
  };


  return (
    <CurrentPageWidget
    currentPage={currentPage}
    noteList={noteList}
    setCurrentPage={setCurrentPage}
    addNote={addNote}
    deleteNote={deleteNote}
    updateNote={updateNote}
    currentNote={currentNote}
    editCurrentNote={editCurrentNote}
    />
  );
};
export default App