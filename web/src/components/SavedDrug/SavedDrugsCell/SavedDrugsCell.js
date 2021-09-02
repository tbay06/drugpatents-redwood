import { Link, routes } from '@redwoodjs/router'

import SavedDrugs from 'src/components/SavedDrug/SavedDrugs'

export const QUERY = gql`
  query FindSavedDrugs {
    savedDrugs: savedDrugsAdmin {
      id
      userId
      drugId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No savedDrugs yet. '}
      <Link to={routes.newSavedDrug()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ savedDrugs }) => {
  return <SavedDrugs savedDrugs={savedDrugs} />
}
