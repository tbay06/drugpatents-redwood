import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/SavedDrug/SavedDrugsCell'

const DELETE_SAVED_DRUG_MUTATION = gql`
  mutation DeleteSavedDrugMutation($id: Int!) {
    deleteSavedDrug(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const SavedDrugsList = ({ savedDrugs }) => {
  const [deleteSavedDrug] = useMutation(DELETE_SAVED_DRUG_MUTATION, {
    onCompleted: () => {
      toast.success('SavedDrug deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete savedDrug ' + id + '?')) {
      deleteSavedDrug({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Drug id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {savedDrugs.map((savedDrug) => (
            <tr key={savedDrug.id}>
              <td>{truncate(savedDrug.id)}</td>
              <td>{truncate(savedDrug.userId)}</td>
              <td>{truncate(savedDrug.drugId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.savedDrug({ id: savedDrug.id })}
                    title={'Show savedDrug ' + savedDrug.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSavedDrug({ id: savedDrug.id })}
                    title={'Edit savedDrug ' + savedDrug.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete savedDrug ' + savedDrug.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(savedDrug.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SavedDrugsList
