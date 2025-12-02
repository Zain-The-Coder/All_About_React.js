// export function UserNameGenerator () {
//         return <div>hello</div>
// }
// export function ButtonGenerator () {
//     return <button className="text-[20px] bg-amber-600 border text-[#fff] font-bold px-[30px] py-[10px] rounded-[20px]
//     cursor-pointer">Rate Me</button>
// }

export function UserName (props) {
    return( 
    <>
        <p>{props.name}</p>
        {props.age}
    </>
    )
}
