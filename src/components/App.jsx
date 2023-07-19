import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./Create Area";
import { useState } from "react";

export default function App() {

    const [notes, setNotes] = useState([])

    function addNote(note) {
        setNotes((prevNote) => {
            return [...prevNote, note]
        })
    }

    function deleteNote(id) {
        setNotes((prevNote) => {
            return prevNote.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
            })}
            <Footer />
        </div>
    )
}