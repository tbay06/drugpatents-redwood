import DrugPatent from '../DrugPatent/DrugPatent'

export const QUERY = gql`
  query FindDrugPatentQuery($id: String!) {
    drug: drug(id: $id) {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ drugPatent }) => {
  return <DrugPatent drug={drugPatent} />
}
