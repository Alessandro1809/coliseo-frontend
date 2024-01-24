 const ErrorMsg = ({errorMsg}) => {
  return (
    <div className={`${errorMsg.error ? 'text-white from-red-400 to-red-600': 'from-yellow-400 to-yellow-700'} bg-gradient-to-r text-center p-3 rounded-xl uppercase font-bold text-sm mb-10`}>
        {errorMsg.msg}
    </div>
  )
}
export default ErrorMsg;

  