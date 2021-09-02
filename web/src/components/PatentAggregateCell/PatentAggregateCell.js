import Card from '../Card/Card'

export const QUERY = gql`
  query FindPatentAggregateQuery {
    patentCount
    expiredPatentCount
    activePatentCount
    expiringSoonCount
    recentlyExpiredCount
    drugCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  patentCount,
  expiredPatentCount,
  activePatentCount,
  expiringSoonCount,
  recentlyExpiredCount,
  drugCount,
}) => {
  return (
    <Card>
      <div className="flex flex-row justify-center text-3xl font-semibold text-indigo-500 mb-4 ">
        Totals
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col text-center">
          <div className="text-4xl font-semibold text-indigo-500">
            {expiredPatentCount}
          </div>
          <div className="text-sm text-gray-400 uppercase">Expired</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-4xl font-semibold text-indigo-500">
            {patentCount}
          </div>
          <div className="text-sm text-gray-400 uppercase">Patents</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-4xl font-semibold text-indigo-500">
            {activePatentCount}
          </div>
          <div className="text-sm text-gray-400 uppercase">Active</div>
        </div>
      </div>
      <div className="flex flex-row mt-5 justify-evenly">
        <div className="flex flex-col text-center">
          <div className="text-4xl font-semibold text-indigo-500">
            {recentlyExpiredCount}
          </div>
          <div className="text-sm text-gray-400 uppercase">
            recently expired
          </div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-4xl font-semibold text-indigo-500">
            {expiringSoonCount}
          </div>
          <div className="text-sm text-gray-400 uppercase">expiring soon</div>
        </div>
      </div>
      <div className="flex flex-row mt-5 justify-center">
        <div className="flex flex-col text-center">
          <div className="text-4xl font-semibold text-indigo-500">
            {drugCount}
          </div>
          <div className="text-sm text-gray-400 uppercase">drugs</div>
        </div>
      </div>
    </Card>
  )
}
