import { useUserContext } from '../components/userContext'
import { Link } from 'react-router-dom'
import AboutMe from '../components/AboutME'
function About() {
  const { user } = useUserContext()

  return (
    <div className="flex flex-col items-center ">
      <div className="text-5xl font-medium mt-20 text-[#E85A4F]">About me</div>

      <AboutMe text="Name:" info={user.name} />
      <AboutMe text="Email:" info={user.email} />
      <AboutMe text="Date sign up:" info={user.createdAt} />

      <Link
        to="/notes"
        className="text-2xl bg-[#E98074] rounded-full py-3 px-16 mt-6 text-[#EAE7DC] hover:bg-[#E85A4F]"
      >
        Go to notes
      </Link>
    </div>
  )
}

export default About
