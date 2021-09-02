import Navbar from 'src/components/Navbar/Navbar'
const LoginLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main className="h-screen">{children}</main>
      </div>
    </>
  )
}

export default LoginLayout
