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
  console.log(savedDrugs)
  return savedDrugs.map((savedDrug) => (
    <DrugPatent key={savedDrug.Drug.id} drug={savedDrug.Drug} />
  ))
}
