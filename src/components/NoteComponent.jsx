import { Link } from 'react-router-dom'

function NoteComponent({ url, src2, src1, onclick, className }) {
  return (
    <div className={className}>
      <button onClick={onclick}>
        <img className="w-5" src={src1} alt="" />
      </button>
      <Link to={url}>
        <img className="w-5" src={src2} alt="" />
      </Link>
    </div>
  )
}

export default NoteComponent
