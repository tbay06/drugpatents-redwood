import PatentsPerCompany from '../PatentsPerCompany/PatentsPerCompany'

export const QUERY = gql`
  query FindTotalPatentsPerCompanyQuery {
    totalPatentsPerCompany {
      companyName
      _count {
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ totalPatentsPerCompany }) => {
  return totalPatentsPerCompany.map((patent) => (
    <div className="py-1" key={patent.companyName}>
      <PatentsPerCompany key={patent.companyName} patent={patent} />
    </div>
  ))
}
