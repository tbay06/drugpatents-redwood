import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SavedDrugForm from 'src/components/SavedDrug/SavedDrugForm'

export const CREATE_SAVED_DRUG_MUTATION = gql`
  mutation CreateSavedDrugMutation($input: CreateSavedDrugInput!) {
    createSavedDrug(input: $input) {
      id
    }
  }
`

const NewSavedDrug = () => {
  const [createSavedDrug, { loading, error }] = useMutation(
    CREATE_SAVED_DRUG_MUTATION,
    {
      onCompleted: () => {
        toast.success('SavedDrug created')
        navigate(routes.savedDrugs())
      },
    }
  )

  const onSave = (input) => {
    createSavedDrug({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SavedDrug</h2>
      </header>
      <div className="rw-segment-main">
        <SavedDrugForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSavedDrug
