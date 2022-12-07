import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import icon1 from '../img/pencil.png'
import icon2 from '../img/remove.png'
import NoteComponent from '../components/NoteComponent'

export const loader = async ({ params: { id } }) => {
  const note = await fetch(`http://localhost:5000/notes/${id}`).then((r) => r.json())
  return { note }
}

function Note() {
  const { note } = useLoaderData()
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        navigate('/notes')
      })
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row  justify-between">
        <Link to="/notes">
          <div className="text-2xl bg-[#E98074] rounded-full text-[#EAE7DC] hover:bg-[#E85A4F] pt-2 pb-2 pl-10 pr-10 mt-5 ">
            Back
          </div>
        </Link>
        <input
          type="text"
          value={note.title}
          readOnly={true}
          className="text-5xl align-center font-medium bg-[#EAE7DC] text-[#E85A4F] pl-3"
        />
        <NoteComponent
          className="flex flex-row gap-5 items-center mt-5"
          onclick={() => handleDelete(note.id)}
          url={`/edit/${note.id}`}
          src1={icon2}
          src2={icon1}
        />
      </div>
      <div className="w-[100%] h-[400px] font-[400] px-8 py-5 mt-10 bg-[#EAE7DC] text-[#8E8D8A] text-3xl align-top rounded-lg border-4 border-[#E85A4F]/75">
        {note.body}
      </div>
    </div>
  )
}

export default Note
