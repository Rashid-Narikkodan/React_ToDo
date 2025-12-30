
const Greet = () => {
    const hour = new Date().getHours();
    return (
    <h2 className="text-white font-bold mb-6 text-4xl">
        Good {hour < 12?"Morning...":hour < 17?"Afternoon...":"Evening..."}
    </h2>
  )
}

export default Greet