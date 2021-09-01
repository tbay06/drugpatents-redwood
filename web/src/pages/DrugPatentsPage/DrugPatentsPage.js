import DrugPatentsCell from 'src/components/DrugPatentsCell'

const DrugPatentsPage = ({ page = 1 }) => {
  const skip = (page - 1) * 100
  const take = 100
  return (
    <>
      <DrugPatentsCell take={take} skip={skip} />
    </>
  )
}

export default DrugPatentsPage
