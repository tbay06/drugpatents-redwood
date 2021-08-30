export const Card = (props) => {
  return (
    <div className="shadow bg-white rounded-lg p-1 sm:p-2 md:p-4 lg:p-4">
      {props.title ? (
        <div className="p-4 border-b border-gray-300">
          <h2 className="text-gray-700 font-bold text-2xl">{props.title}</h2>
        </div>
      ) : null}
      {props.children}
    </div>
  )
}

export default Card
