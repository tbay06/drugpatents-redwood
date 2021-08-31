import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import SavedDrugForm from 'src/components/SavedDrug/SavedDrugForm'

export const QUERY = gql`
  query EditSavedDrugById($id: Int!) {
    savedDrug: savedDrug(id: $id) {
      id
      userId
      drugId
    }
  }
`
const UPDATE_SAVED_DRUG_MUTATION = gql`
  mutation UpdateSavedDrugMutation($id: Int!, $input: UpdateSavedDrugInput!) {
    updateSavedDrug(id: $id, input: $input) {
      id
      userId
      drugId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ savedDrug }) => {
  const [updateSavedDrug, { loading, error }] = useMutation(
    UPDATE_SAVED_DRUG_MUTATION,
    {
      onCompleted: () => {
        toast.success('SavedDrug updated')
        navigate(routes.savedDrugs())
      },
    }
  )

  const onSave = (input, id) => {
    updateSavedDrug({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SavedDrug {savedDrug.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SavedDrugForm
          savedDrug={savedDrug}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
