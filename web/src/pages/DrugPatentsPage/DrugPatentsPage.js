import DrugPatentsCell from 'src/components/DrugPatentsCell'

const DrugPatentsPage = ({ page = 1 }) => {
  const skip = (page - 1) * 99
  const take = 99
  return (
    <>
      <DrugPatentsCell take={take} skip={skip} />
    </>
  )
}

export default DrugPatentsPage
