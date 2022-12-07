import { NavLink, Outlet, Link } from 'react-router-dom'
import { useUserContext } from '../components/userContext'

export default function Layout() {
  const user = useUserContext()
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to Log out?') == true)
      user.setUser({ email: '' })
  }
  const arrUser = [user]

  return (
    <div className="container mx-auto mt-10 w-7/12 bg-[#EAE7DC]">
      <header className="flex  flex-row gap-6 text-lg mt-5 justify-between mb-10">
        <div className="text-2xl font-medium text-[#8E8D8A]">
          Hello, <Link to="/about">{arrUser[0].user.name}</Link>!
        </div>
        <div className="flex text-2xl gap-8 ">
          <NavLink
            to="/about"
            end={true}
            className={({ isActive }) =>
              isActive
                ? ' font-medium text-[#EAE7DC] bg-[#E85A4F] rounded-full px-3'
                : ' font-medium text-[#8E8D8A] '
            }
          >
            About
          </NavLink>
          <NavLink
            to="/notes"
            end={true}
            className={({ isActive }) =>
              isActive
                ? ' font-medium text-[#EAE7DC] bg-[#E85A4F] rounded-full px-3'
                : ' font-medium text-[#8E8D8A] '
            }
          >
            Notes
          </NavLink>

          <button onClick={handleLogout} className=" font-medium text-red-500">
            Log out
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
