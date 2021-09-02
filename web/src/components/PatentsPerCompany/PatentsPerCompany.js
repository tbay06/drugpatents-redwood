const PatentsPerCompany = ({ patent }) => {
  return (
    <div className="flex flex-row justify-between px-4 border-b-2 border-solid border-gray-200">
      <div className="font-bold text-sm">{patent.companyName}</div>
      <div className="text-lg font-semibold">{patent._count.id}</div>
    </div>
  )
}

export default PatentsPerCompany
