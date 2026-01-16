function Products ({data}) {
    return (
        <>
        <div className="flex flex-col gap-[20px] justify-center items-center rounded-2xl shadow-2xl w-[40%] m-auto my-[20px] p-[10px]">
        <div className="flex"><h2 className="text-gray-700 font-bold">{data.title}</h2>
        <img className="h-[30px] w-[30px] rounded-2xl" src={data.image} alt="data.image" /></div>
        <p className="text-italic text-blue-400">{data.description}</p>
        <b>{data.price}</b>
        </div>
        </>
    )
}
export default Products ;