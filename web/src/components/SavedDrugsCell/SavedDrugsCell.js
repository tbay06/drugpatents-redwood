import DrugPatent from 'src/components/DrugPatent'
export const QUERY = gql`
  query SavedDrugsQuery($userId: String!) {
    savedDrugs(userId: $userId) {
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

        Patent {
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

export const Empty = () => <div>No Saved Patents</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ savedDrugs }) => {
  return (
    <div className="flex flex-wrap">
      {savedDrugs.map((savedDrug) => (
        <div className="p-1 w-1/3" key={savedDrug.Drug.id}>
          <DrugPatent key={savedDrug.Drug.id} drug={savedDrug.Drug} />
        </div>
      ))}
    </div>
  )
}
