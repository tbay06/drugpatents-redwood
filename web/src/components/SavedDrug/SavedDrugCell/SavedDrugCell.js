import SavedDrug from 'src/components/SavedDrug/SavedDrug'

export const QUERY = gql`
  query FindSavedDrugById($id: Int!) {
    savedDrug: savedDrug(id: $id) {
      id
      userId
      drugId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SavedDrug not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ savedDrug }) => {
  return <SavedDrug savedDrug={savedDrug} />
}
