import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

export const DELETE_SAVED_DRUG_MUTATION = gql`
  mutation DeleteSavedDrugMutation($id: Int!) {
    deleteSavedDrug(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const SavedDrug = ({ savedDrug }) => {
  const [deleteSavedDrug] = useMutation(DELETE_SAVED_DRUG_MUTATION, {
    onCompleted: () => {
      toast.success('SavedDrug deleted')
      navigate(routes.savedDrugs())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete savedDrug ' + id + '?')) {
      deleteSavedDrug({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SavedDrug {savedDrug.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{savedDrug.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{savedDrug.userId}</td>
            </tr>
            <tr>
              <th>Drug id</th>
              <td>{savedDrug.drugId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSavedDrug({ id: savedDrug.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(savedDrug.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default SavedDrug
