import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const SavedDrugsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.savedDrugs()} className="rw-link">
            SavedDrugs
          </Link>
        </h1>
        <Link to={routes.newSavedDrug()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New SavedDrug
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default SavedDrugsLayout
