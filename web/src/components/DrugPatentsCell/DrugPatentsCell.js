import DrugPatent from 'src/components/DrugPatent'
import { Link, routes } from '@redwoodjs/router'
export const QUERY = gql`
  query DrugPatentsQuery($take: Int!, $skip: Int!) {
    drugs(take: $take, skip: $skip) {
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
          patentNum
          expirationDate
          companyName
        }
        SavedDrug {
          id
        }
      }
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ drugs }) => {
  const drugsPage = drugs.drugs
  const count = drugs.count
  const items = []
  for (let i = 0; i < Math.ceil(count / 100); i++) {
    items.push(
      <li key={i}>
        <Link to={routes.drugPatents({ page: i + 1 })}>{i + 1}</Link>
      </li>
    )
  }
  return (
    <>
      {drugsPage.map((drug) => (
        <div className="py-1" key={drug.id}>
          <DrugPatent key={drug.id} drug={drug} />
        </div>
      ))}
      <ul>{items}</ul>
    </>
  )
}
