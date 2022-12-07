import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center my-56">
      <h1 className="text-5xl text-[#E85A4F]">404</h1>
      <h1 className="text-5xl text-[#8E8D8A]">Page Not Found</h1>
      <p className="text-3xl text-[#8E8D8A] ">
        Go
        <Link className="underline hover:text-[#E85A4F] ml-1" to="/about">
          Home
        </Link>
      </p>
    </div>
  )
}
