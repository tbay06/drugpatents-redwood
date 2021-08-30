import DrugPatent from 'src/components/DrugPatent'
export const QUERY = gql`
  query DrugPatentsQuery {
    drugs {
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

export const Success = ({ drugs }) => {
  return drugs.map((drug) => <DrugPatent key={drug.id} drug={drug} />)
}