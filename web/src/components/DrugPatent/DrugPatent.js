import { CREATE_SAVED_DRUG_MUTATION } from '../SavedDrug/NewSavedDrug/NewSavedDrug'
import { DELETE_SAVED_DRUG_MUTATION } from '../SavedDrug/SavedDrug'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DrugPatent = ({ drug }) => {
  const { currentUser } = useAuth()
  const [isSaved, setIsSaved] = useState(drug.SavedDrug.length ? true : false)
  const [createSavedDrug, { loading }] = useMutation(
    CREATE_SAVED_DRUG_MUTATION,
    {
      onCompleted: () => {
        toast.success(`Drug #${drug.id} saved!`)
        setIsSaved(true)
      },
    }
  )
  const [deleteSavedDrug] = useMutation(DELETE_SAVED_DRUG_MUTATION, {
    onCompleted: () => {
      toast.success(`Drug #${drug.id} removed`)
      setIsSaved(false)
    },
  })

  const onRemove = () => {
    deleteSavedDrug({ variables: { id: drug.SavedDrug[0].id } })
  }
  const input = {
    userId: currentUser.sub,
    drugId: drug.id,
  }

  const onSave = () => {
    createSavedDrug({ variables: { input } })
  }
  const saveButtonClassNames = classNames(
    'rounded-lg border-2 border-indigo-500 cursor-pointer text-white m-auto px-2 row-span-4',
    loading
      ? 'pointer-events-none bg-gray-500'
      : 'bg-indigo-400 hover:bg-indigo-500'
  )
  const removeButtonClassNames = classNames(
    'rounded-lg border-2 border-red-600 cursor-pointer text-white m-auto px-2 row-span-4',
    loading ? 'pointer-events-none bg-gray-500' : 'bg-red-400 hover:bg-red-600'
  )
  return (
    <>
      <div className="grid grid-cols-11 w-full rounded-lg p-2 border-2 border-gray-200">
        <div className="text-xs text-gray-500">Patent #</div>
        <div className="text-xs text-gray-500 col-span-2">
          Medicinal Ingredient
        </div>
        <div className="text-xs text-gray-500">Brand Name</div>
        <div className="text-xs text-gray-500">Route</div>
        <div className="text-xs text-gray-500">Dose</div>
        <div className="text-xs text-gray-500">Human/Vet</div>
        <div className="text-xs text-gray-500 col-span-2">Patent Holder</div>
        <div className="text-xs text-gray-500">Expiration Date</div>
        {!isSaved && (
          <button className={saveButtonClassNames} onClick={onSave}>
            {loading ? 'Loading...' : 'Save'}
          </button>
        )}
        {isSaved && (
          <button className={removeButtonClassNames} onClick={onRemove}>
            {loading ? 'Loading...' : 'Unsave'}
          </button>
        )}

        {drug.Patent[0]&&<a
          href={`https://www.ic.gc.ca/opic-cipo/cpd/eng/patent/${drug.Patent[0].patentNum}/summary.html?type=number_search&tabs1Index=tabs1_1`}
          className="underline text-blue-500"
        >
          {drug.Patent[0].patentNum}{' '}
        </a>}
        <div className="col-span-2">{drug.medicinalIngredient}</div>
        <div>{drug.brandName}</div>
        <div>{drug.routeOfAdmin}</div>
        <div>{drug.strengthPerUnit}</div>
        <div>{drug.humanOrVet}</div>
        <div className="col-span-2">{drug?.Patent[0]?.companyName}</div>
        <div>
          {new Date(drug?.Patent[0]?.expirationDate).toLocaleDateString()}
        </div>
        <div></div>
        {drug.therapeuticClass && (
          <>
            <div className="text-xs text-center text-gray-500 col-span-9 mt-2">
              Therapeutic Class
            </div>
            <div></div>
            <div className="text-center col-span-9">
              {drug.therapeuticClass}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default DrugPatent
