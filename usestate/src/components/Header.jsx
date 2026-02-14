function Header(props)
{
    return(
        <>
        <header className="text-3xl bg-blue-300 p-5 flex justify-between items-center">
            <h1>Hello world</h1>
            <div>
                <ul className="flex gap-5">
                    <li>Hello</li>
                    <li>World</li>
                    <li>Bye</li>
                    <li>World</li>
                    <li>Cart : {props.cartValuesCount}</li>
                </ul>
            </div>
        </header>
        </>
    )
}
export default Header

