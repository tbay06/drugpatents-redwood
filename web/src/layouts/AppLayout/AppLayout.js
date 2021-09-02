import Navbar from 'src/components/Navbar/Navbar'
import SideNav from 'src/components/SideNav/SideNav'
import { Toaster } from '@redwoodjs/web/toast'
import { useLocation } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
  const location = useLocation()
  return (
    <>
      <div>
        <SideNav />
        <Navbar />

        <main className="h-screen">
          <div className="w-5/6 absolute top-20 z-0 right-0 py-6 sm:px-6 lg:px-6">
            <header className="bg-white shadow -mt-10 -mx-6 mb-6">
              <div className="mx-auto py-2 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-indigo-500 uppercase ">
                  {location?.pathname === '/'
                    ? 'home'
                    : location?.pathname.replace('-', ' ').slice(1)}
                </h1>
              </div>
            </header>
            <Toaster
              position="top-center"
              toastOptions={{ success: { duration: 3000 } }}
            />
            {/* Replace with your content */}

            {children}

            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}

export default AppLayout
