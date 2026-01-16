function NavBar () {
    return (
        <>
        <header className="flex justify-around items-center p-[30px] border-b ">
        <h1 className="text-[40px] uppercase italic ">Hello Dummy Website</h1>
        <ul className="flex gap-[30px] items-center cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>More Info</li>
        </ul>
        </header>
        </>
    )
}
export default NavBar ;