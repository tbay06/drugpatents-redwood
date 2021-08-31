import SavedDrugsCell from 'src/components/SavedDrugsCell'
import { useAuth } from '@redwoodjs/auth'

const SavedPatentsPage = () => {
  const { currentUser } = useAuth()
  return <SavedDrugsCell userId={currentUser.sub} />
}

export default SavedPatentsPage
