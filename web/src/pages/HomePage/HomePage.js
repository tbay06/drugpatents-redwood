import { useAuth } from '@redwoodjs/auth'
import ExpiringSoonCell from 'src/components/ExpiringSoonCell'
import RecentlyExpiredCell from 'src/components/RecentlyExpiredCell'
import TotalPatentsPerCompanyCell from 'src/components/TotalPatentsPerCompanyCell'
import ActivePatentsPerCompanyCell from 'src/components/ActivePatentsPerCompanyCell'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      {!currentUser && <div>You are not logged in</div>}
      {currentUser && (
        <>
          <div className="w-full flex flex-row">
            <div className="w-1/2 ml-2 text-2xl font-bold text-indigo-500">
              <h1>Total Patents/Company</h1>
            </div>
            <div className="w-1/2 ml-4 text-2xl font-bold text-indigo-500">
              <h1>Active Patents/Company</h1>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <div className="overflow-auto h-56 w-1/2 mx-2 border-2 border-indigo-200 border-solid rounded-lg">
              <TotalPatentsPerCompanyCell />
            </div>
            <div className="overflow-auto h-56 w-1/2 border-2 border-indigo-200 border-solid rounded-lg">
              <ActivePatentsPerCompanyCell />
            </div>
          </div>
          <div className="mt-2 ml-2 text-2xl font-bold text-indigo-500">
            Patents Expiring Soon
          </div>
          <div className="overflow-auto h-96 border-2 border-indigo-200 border-solid rounded-lg">
            <ExpiringSoonCell />
          </div>
          <div className="mt-2 ml-2 text-2xl font-bold text-blue-600">
            Patents Recently Expired
          </div>
          <div className="overflow-auto h-96 border-2 border-indigo-200 border-solid rounded-lg">
            <RecentlyExpiredCell />
          </div>
        </>
      )}
    </>
  )
}

export default HomePage
