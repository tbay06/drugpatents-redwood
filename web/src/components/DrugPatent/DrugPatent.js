const DrugPatent = ({ drug }) => {
  return (
    <div className="grid grid-cols-8 w-full my-2 rounded-lg p-2 border-2 border-gray-200">
      <div className="text-xs text-gray-500">#{drug.id} </div>
      <div className="col-span-2">{drug.medicinalIngredient}</div>
      <div>{drug.brandName}</div>
      <div>{drug.humanOrVet}</div>
      <div className="col-span-2">{drug?.Patent[0]?.companyName}</div>
      <div>
        {new Date(drug?.Patent[0]?.expirationDate).toLocaleDateString()}
      </div>
    </div>
  )
}

export default DrugPatent
