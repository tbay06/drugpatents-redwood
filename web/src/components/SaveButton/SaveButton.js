import { CREATE_SAVED_DRUG_MUTATION } from '../SavedDrug/NewSavedDrug/NewSavedDrug'
import { DELETE_SAVED_DRUG_MUTATION } from '../SavedDrug/SavedDrug'
import { QUERY as SAVED_DRUGS } from '../SavedDrugsCell/SavedDrugsCell'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'
import {
  TrashIcon,
  BookmarkIcon as BookmarkSolid,
} from '@heroicons/react/solid'
import { BookmarkIcon as BookmarkOutline } from '@heroicons/react/outline'
import { useLocation } from '@redwoodjs/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SaveButton = ({ saved, drugId, savedId }) => {
  const { currentUser } = useAuth()
  const [isSaved, setIsSaved] = useState(saved)
  const location = useLocation()
  const [createSavedDrug, { loading }] = useMutation(
    CREATE_SAVED_DRUG_MUTATION,
    {
      onCompleted: () => {
        toast.success(`Drug #${drugId} saved!`)
        setIsSaved(true)
      },
    }
  )
  const [deleteSavedDrug] = useMutation(DELETE_SAVED_DRUG_MUTATION, {
    refetchQueries: [
      {
        query: SAVED_DRUGS,
        variables: { userId: currentUser.sub },
      },
    ],
    onCompleted: () => {
      toast.success(`Drug #${drugId} removed!`)
      setIsSaved(false)
    },
  })

  const onRemove = () => {
    deleteSavedDrug({ variables: { id: savedId } })
  }
  const input = {
    userId: currentUser.sub,
    drugId: drugId,
  }

  const onSave = () => {
    createSavedDrug({ variables: { input } })
  }
  const saveButtonClassNames = classNames(
    'rounded-lg border-2 border-indigo-500 cursor-pointer text-white px-2 my-auto flex flex-row',
    loading
      ? 'pointer-events-none bg-gray-500'
      : 'bg-indigo-400 hover:bg-indigo-500'
  )
  const removeButtonClassNames = classNames(
    'rounded-lg border-2 border-red-600 cursor-pointer text-white px-2 my-auto flex flex-row',
    loading ? 'pointer-events-none bg-gray-500' : 'bg-red-400 hover:bg-red-600'
  )
  return (
    <>
      {!isSaved && (
        <button className={saveButtonClassNames} onClick={onSave}>
          {loading ? 'Loading...' : 'Save'}
          <BookmarkOutline className="h-4 w-4 my-auto" />
        </button>
      )}
      {isSaved && location.pathname !== '/saved-patents' && (
        <button className="rounded-lg border-2 border-indigo-500 bg-indigo-500 text-white px-2 my-auto flex flex-row pointer-events-none">
          {loading ? 'Loading...' : ''}
          <BookmarkSolid className="h-4 w-4 my-auto" />
        </button>
      )}
      {isSaved && location.pathname === '/saved-patents' && (
        <button className={removeButtonClassNames} onClick={onRemove}>
          {loading ? 'Loading...' : 'Delete'}
          <TrashIcon className="h-4 w-4 my-auto" />
        </button>
      )}
    </>
  )
}

export default SaveButton
