import { Link } from 'react-router-dom'

function Info({
  type,
  placeholder1,
  placeholder2,
  value1,
  value2,
  onChange1,
  onChange2,
  onClick,
  btnText,
  title,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around">
        <Link to="/notes">
          <div className="text-2xl bg-[#E98074] rounded-full text-[#EAE7DC] hover:bg-[#E85A4F] py-2 px-10 mt-5">
            Back
          </div>
        </Link>
        <div className=" text-5xl align-center font-medium bg-[#EAE7DC] text-[#E85A4F] ">
          {title}
        </div>
        <div className="mt-5 ">
          <button
            className="text-2xl py-2 px-10  bg-[#E98074] rounded-full text-[#EAE7DC] hover:bg-[#E85A4F]"
            onClick={onClick}
          >
            {btnText}
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col  gap-2 ">
          <input
            type={type}
            className="w-[100%] h-[50px] bg-[#EAE7DC] focus:outline-none focus:ring focus:ring-[#E98074] font-[400] px-8 py-5 mt-10  text-[#8E8D8A] text-3xl align-top rounded-lg border-4 border-[#E85A4F]/50"
            placeholder={placeholder1}
            value={value1}
            onChange={onChange1}
          />
          <textarea
            type={type}
            className="bg-[#EAE7DC] focus:outline-none focus:ring focus:ring-[#E98074] w-[100%] h-[300px] font-[400] px-8 py-5 mt-10  text-[#8E8D8A] text-3xl align-top rounded-lg border-4 border-[#E85A4F]/50"
            placeholder={placeholder2}
            value={value2}
            onChange={onChange2}
          />
        </div>
      </div>
    </div>
  )
}

export default Info
