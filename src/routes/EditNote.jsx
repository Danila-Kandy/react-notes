import { useLoaderData, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import Info from '../components/Info'

export const loader = async ({ params: { id } }) => {
  const note = await fetch(`http://localhost:5000/notes/${id}`).then((r) => r.json())
  return { note }
}

function EditNote() {
  const { note } = useLoaderData()
  const navigate = useNavigate()

  const [title, setTitle] = useState(note.title)
  const handleSetTitle = (e) => setTitle(e.target.value)

  const [body, setBody] = useState(note.body)
  const handleSetBody = (e) => setBody(e.target.value)

  const handleSave = async () => {
    const updateNote = {
      body: body,
      title: title,
    }

    await fetch(`http://localhost:5000/notes/${note.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateNote),
    })
      .then((r) => r.json())
      .then(() => {
        navigate(`/note/${note.id}`)
      })
  }

  return (
    <div>
      <Info
        type="text"
        placeholder1="Name"
        value1={title}
        onChange1={handleSetTitle}
        placeholder2="Note text..."
        value2={body}
        onChange2={handleSetBody}
        onClick={handleSave}
        btnText="Save"
        title="Edit note"
      />
    </div>
  )
}

export default EditNote
