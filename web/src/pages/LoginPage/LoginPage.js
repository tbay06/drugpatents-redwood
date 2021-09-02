import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const { logIn, isAuthenticated } = useAuth()
  if (isAuthenticated) {
    navigate(routes.home())
  }
  return (
    <div className="bg-gray-800 text-white flex h-full w-full">
      <button className="bg-indigo-500 m-auto w-48 h-16" onClick={logIn}>
        Login
      </button>
    </div>
  )
}

export default LoginPage
