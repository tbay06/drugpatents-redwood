import DrugPatent from 'src/components/DrugPatent'
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'
import { Link, routes, useParams } from '@redwoodjs/router'
import Card from '../Card/Card'
export const QUERY = gql`
  query DrugPatentsQuery($take: Int!, $skip: Int!) {
    drugs(take: $take, skip: $skip) {
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
    drugCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ drugs, drugCount }) => {
  const items = []
  let { page } = useParams()
  if (!page) {
    page = 1
  }
  items.push(
    <li key={'first'} className="mx-2 my-auto">
      <Link
        className={'text-sm  text-blue-400'}
        to={routes.drugPatents({ page: `1` })}
      >
        <ChevronDoubleLeftIcon className="w-4 h-4" />
      </Link>
    </li>
  )
  items.push(
    <li key={'prev'} className="mx-2 my-auto">
      <Link
        className={'text-sm  text-blue-400'}
        to={routes.drugPatents({ page: page > 1 ? page - 1 : page })}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </Link>
    </li>
  )

  for (let i = 0; i < Math.ceil(drugCount / 99); i++) {
    items.push(
      <li key={i} className="mx-2">
        <Link
          className={
            page == i + 1
              ? 'text-lg text-blue-700 pointer-events-none px-1 border-solid border-2'
              : 'text-sm underline text-blue-400'
          }
          to={routes.drugPatents({ page: `${i + 1}` })}
        >
          {i + 1}
        </Link>
      </li>
    )
  }

  items.push(
    <li key={'next'} className="mx-2 my-auto">
      <Link
        className={'text-sm  text-blue-400'}
        to={routes.drugPatents({
          page: page < Math.ceil(drugCount / 99) ? parseInt(page) + 1 : page,
        })}
      >
        <ChevronRightIcon className="w-4 h-4" />
      </Link>
    </li>
  )
  items.push(
    <li key={'last'} className="mx-2 my-auto">
      <Link
        className={'text-sm  text-blue-400'}
        to={routes.drugPatents({ page: Math.ceil(drugCount / 99) })}
      >
        <ChevronDoubleRightIcon className="w-4 h-4" />
      </Link>
    </li>
  )
  return (
    <>
      <div className="flex flex-wrap">
        {drugs.map((drug) => (
          <div className="p-1 w-1/3" key={drug.id}>
            <DrugPatent key={drug.id} drug={drug} />
          </div>
        ))}
      </div>
      <Card>
        <ul className="flex flex-row justify-center ">{items}</ul>
      </Card>
    </>
  )
}
