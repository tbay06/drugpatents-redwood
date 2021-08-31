import Card from 'src/components/Card'
import Navbar from 'src/components/Navbar/Navbar'
import { Toaster } from '@redwoodjs/web/toast'

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-6">
          <Toaster
            position="top-center"
            toastOptions={{ success: { duration: 3000 } }}
          />
          {/* Replace with your content */}
          <Card>{children}</Card>

          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}

export default AppLayout
