import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import AddNewNote from "./components/AddNewNote";

function App() {
  const [showAddNote, setShowAddNote] = useState(false);
  const [noteBeingEdited, setNoteBeingEdited] = useState({});

  const [note, setNote] = useState([
    {
      id: 1,
      priority: "1",
      title: "work list",
      days: "5",
      content: "random content",
    },
    {
      id: 2,
      priority: "3",
      title: "studies",
      days: "1",
      content: " new content",
    },
  ]);

  const [doneNotes, setDoneNotes] = useState([
    {
      id: 4,
      priority: "4",
      title: "note title",
      days: "5",
      content: "random content",
    },
    {
      id: 3,
      priority: "1",
      title: "note title",
      days: "7",
      content: "random content",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function searchNoteTitle(searchText: string) {
    setSearchTerm(searchText);
  }

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNote(storedNotes);
  }, []);

  function editNote(noteID: number) {
    let noteToEdit = note.find((note) => note.id === noteID);
  
    if (noteToEdit) {
      
      setNoteBeingEdited(noteToEdit);

      // Filter out the edited note from the form
      let updatedNotes = note.filter((note) => note.id !== noteID);
      setNote(updatedNotes);
    }
    setShowAddNote(!showAddNote);
  }


  function deleteNote(noteID: number) {
    setNote(note.filter((note) => note.id !== noteID));
  }

  function deleteDoneNote(noteID: number) {
    setDoneNotes(doneNotes.filter((doneNotes) => doneNotes.id !== noteID));
  }

  function sortNotesAsc() {
    const sortedNotes = [...note];

    sortedNotes.sort((a: any, b: any) => {
      return a.priority - b.priority;
    });

    setNote(sortedNotes);
  }

  function sortNotesDesc() {
    const sortedNotes = [...note];

    sortedNotes.sort((a: any, b: any) => {
      return b.priority - a.priority;
    });

    setNote(sortedNotes);
  }

  function sortDoneNotesAsc() {
    const sortedNotes = [...doneNotes];

    sortedNotes.sort((a: any, b: any) => {
      return a.priority - b.priority;
    });

    setDoneNotes(sortedNotes);
  }

  function sortDoneNotesDesc() {
    const sortedNotes = [...doneNotes];

    sortedNotes.sort((a: any, b: any) => {
      return b.priority - a.priority;
    });

    setDoneNotes(sortedNotes);
  }

  function sortNotesAscTime() {
    const sortedNotes = [...note];
    sortedNotes.sort((a: any, b: any) => {
      return a.days - b.days;
    });
    setNote(sortedNotes);
  }

  function sortDoneNotesAscTime() {
    const sortedNotes = [...doneNotes];
    sortedNotes.sort((a: any, b: any) => {
      return a.days - b.days;
    });
    setDoneNotes(sortedNotes);
  }

  function moveNoteToDone(noteID: number) {
    const foundNote = note.find((n) => n.id === noteID);

    if (foundNote) {
      setNote(note.filter((n) => n.id !== noteID));
      setDoneNotes([...doneNotes, foundNote]);
    }
  }

  function moveDoneToNote(noteID: number) {
    const foundNote = doneNotes.find((n) => n.id === noteID);

    if (foundNote) {
      setDoneNotes(doneNotes.filter((n) => n.id !== noteID));
      setNote([...note, foundNote]);
    }
  }

  function addNote(newNoteData: any) {
    const newNote = { ...newNoteData, id: uuidv4() };
    const newNotesArray = [...note, newNote];
    localStorage.setItem("notes", JSON.stringify(newNotesArray));
    setNote(newNotesArray);
  }

  function toggleAddNoteForm() {
    setShowAddNote(!showAddNote);
  }

  return (
    <div className="w-screen h-screen p-12">
      <Header
        searchNoteTitle={searchNoteTitle}
        toggleAddNoteForm={toggleAddNoteForm}
      />
      <NotesList
        note={note}
        deleteNote={deleteNote}
        sortNotesAsc={sortNotesAsc}
        sortNotesDesc={sortNotesDesc}
        sortNotesAscTime={sortNotesAscTime}
        deleteDoneNote={deleteDoneNote}
        doneNotes={doneNotes}
        sortDoneNotesAscTime={sortDoneNotesAscTime}
        sortDoneNotesAsc={sortDoneNotesAsc}
        sortDoneNotesDesc={sortDoneNotesDesc}
        moveNoteToDone={moveNoteToDone}
        moveDoneToNote={moveDoneToNote}
        searchTerm={searchTerm} editNote={editNote}      />
      <AddNewNote
        addNote={addNote}
        showAddNote={showAddNote}
        setShowAddNote={setShowAddNote} noteBeingEdited={noteBeingEdited}      />
    </div>
  );
}

export default App;
