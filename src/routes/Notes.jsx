import icon1 from '../img/pencil.png'
import icon2 from '../img/remove.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useUserContext } from '../components/userContext'
import NoteComponent from '../components/NoteComponent'

function Notes() {
  const { user } = useUserContext()
  const [notes, setNotes] = useState([])
  const viewNotes = [...notes].reverse()

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(notes),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((r) => r.json())

    fetch(`http://localhost:5000/notes?userId=${user.id}`)
      .then((r) => r.json())
      .then((r) => setNotes(r))
  }

  useEffect(() => {
    fetch(`http://localhost:5000/notes?userId=${user.id}`)
      .then((r) => r.json())
      .then((r) => setNotes(r))
  }, [user.id])

  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-medium text-[#E85A4F]">Notes</div>
      <Link
        to="/create/"
        className="text-2xl bg-[#E98074] rounded-full text-[#EAE7DC] hover:bg-[#E85A4F] pt-2 pb-2 pl-10 pr-10 mt-5 "
      >
        Add new note
      </Link>

      {viewNotes.map((note) => (
        <div
          key={note.id}
          className="flex flex-row justify-between w-[100%] bg-[#EAE7DC] mt-5 items-center "
        >
          <Link to={`/note/${note.id}`}>
            <input
              type="text"
              className="rounded-lg border-4 border-[#E85A4F]/75 bg-[#EAE7DC] text-[#8E8D8A] py-3 w-[820px] px-4 text-3xl cursor-pointer focus:outline-none focus:ring focus:ring-[#E98074]"
              readOnly={true}
              value={note.title}
            />
          </Link>
          <NoteComponent
            className="flex flex-row min-w-[70px] gap-4 pr-4"
            onclick={() => handleDelete(note.id)}
            url={`/edit/${note.id}`}
            src1={icon2}
            src2={icon1}
          />
        </div>
      ))}
    </div>
  )
}
export default Notes
