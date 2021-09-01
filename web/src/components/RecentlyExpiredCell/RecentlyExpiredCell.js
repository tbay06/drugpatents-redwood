import DrugPatent from 'src/components/DrugPatent'

export const QUERY = gql`
  query FindRecentlyExpiredQuery {
    recentlyExpired {
      id
      Drug {
        id
        medicinalIngredient
        brandName
        routeOfAdmin
        strengthPerUnit
        humanOrVet
        therapeuticClass
        dosageForm
        din
        createdAt
        Patent {
          id
          patentNum
          expirationDate
          companyName
        }
        SavedDrug {
          id
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ recentlyExpired }) => {
  const now = new Date()
  const soon = new Date(now.getFullYear() + 1, now.getMonth(), now.getDay())
  return recentlyExpired.map((expired) => {
    if (new Date(expired.Drug.Patent[0].expirationDate) <= soon) {
      return (
        <div className="py-1">
          <DrugPatent key={expired.id} drug={expired.Drug} />
        </div>
      )
    }
  })
}
