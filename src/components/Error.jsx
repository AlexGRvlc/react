
// eslint-disable-next-line react/prop-types
const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase mb-3 font-bold rounded-md">
    <p>{ mensaje }</p>
  </div>
  )
}

export default Error