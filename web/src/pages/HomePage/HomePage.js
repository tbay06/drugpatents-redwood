import { useAuth } from '@redwoodjs/auth'
import ExpiringSoonCell from 'src/components/ExpiringSoonCell'
import RecentlyExpiredCell from 'src/components/RecentlyExpiredCell'
import TotalPatentsPerCompanyCell from 'src/components/TotalPatentsPerCompanyCell'
import ActivePatentsPerCompanyCell from 'src/components/ActivePatentsPerCompanyCell'
import Card from 'src/components/Card'
import PatentAggregateCell from 'src/components/PatentAggregateCell'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      {!currentUser && <div>You are not logged in</div>}
      {currentUser && (
        <div className="flex flex-row">
          <div className="w-1/3 flex flex-col mx-2">
            <Card>
              <div className="mt-2 ml-2 text-2xl font-bold text-indigo-500">
                Recently Expired Patents
              </div>
              <div className="overflow-auto max-h-screen">
                <RecentlyExpiredCell />
              </div>
            </Card>
          </div>
          <div className="w-1/3 flex flex-col mx-2">
            <div className="mb-2">
              <PatentAggregateCell />
            </div>
            <div className="mb-2">
              <Card>
                <div className="w-full ml-2 text-2xl font-bold text-indigo-500">
                  <h1>Total Patents/Company</h1>
                </div>
                <div className="overflow-auto h-72 mx-2">
                  <TotalPatentsPerCompanyCell />
                </div>
              </Card>
            </div>
            <Card>
              <div className="w-full ml-4 text-2xl font-bold text-indigo-500">
                <h1>Active Patents/Company</h1>
              </div>
              <div className="overflow-auto h-72 mx-2">
                <ActivePatentsPerCompanyCell />
              </div>
            </Card>
          </div>
          <div className="w-1/3 flex flex-col mx-2">
            <Card>
              <div className="mt-2 ml-2 text-2xl font-bold text-indigo-500">
                Patents Expiring Soon
              </div>
              <div className="overflow-auto max-h-screen">
                <ExpiringSoonCell />
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}

export default HomePage
