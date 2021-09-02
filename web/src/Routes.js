// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout'
import LoginLayout from 'src/layouts/LoginLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={LoginLayout}>
        <Route path="/login" page={LoginPage} name="login" />
      </Set>

      <Private unauthenticated="login">
        <Set wrap={AppLayout}>
        <Route path="/" page={HomePage} name="home" />
          <Route path="/saved-patents" page={SavedPatentsPage} name="savedPatents" />
          <Route path="/drug-patents" page={DrugPatentsPage} name="drugPatents" />
        </Set>
      </Private>
      <Private unauthenticated="login" role="admin">
        <Set wrap={AppLayout}>
          <Route path="/saved-drugs/new" page={SavedDrugNewSavedDrugPage} name="newSavedDrug" />
          <Route path="/saved-drugs/{id:Int}/edit" page={SavedDrugEditSavedDrugPage} name="editSavedDrug" />
          <Route path="/saved-drugs/{id:Int}" page={SavedDrugSavedDrugPage} name="savedDrug" />
          <Route path="/saved-drugs" page={SavedDrugSavedDrugsPage} name="savedDrugs" />
        </Set>
        <Set wrap={AppLayout}>
          <Route path="/patents/new" page={PatentNewPatentPage} name="newPatent" />
          <Route path="/patents/{id:Int}/edit" page={PatentEditPatentPage} name="editPatent" />
          <Route path="/patents/{id:Int}" page={PatentPatentPage} name="patent" />
          <Route path="/patents" page={PatentPatentsPage} name="patents" />
        </Set>
        <Set wrap={AppLayout}>
          <Route path="/drugs/new" page={DrugNewDrugPage} name="newDrug" />
          <Route path="/drugs/{id}/edit" page={DrugEditDrugPage} name="editDrug" />
          <Route path="/drugs/{id}" page={DrugDrugPage} name="drug" />
          <Route path="/drugs" page={DrugDrugsPage} name="drugs" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
