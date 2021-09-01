import DrugPatent from 'src/components/DrugPatent'
export const QUERY = gql`
  query FindExpiringSoonQuery {
    expiringSoon {
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

export const Success = ({ expiringSoon }) => {
  const now = new Date()
  const soon = new Date(now.getFullYear() + 1, now.getMonth(), now.getDay())
  return expiringSoon.map((expiring) => {
    if (new Date(expiring.Drug.Patent[0].expirationDate) <= soon) {
      return (
        <div className="py-1">
          <DrugPatent key={expiring.id} drug={expiring.Drug} />
        </div>
      )
    }
  })
}
