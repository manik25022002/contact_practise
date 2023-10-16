

const Navigation = () => {
    return (<>
        <nav className="flex justify-between  h-18  mt-1 ">
            <div className="logo">
            {/* logo ml-0 */}
                <img src="images/logo.png" alt="logo"className=""></img>
            </div>
            <div className=" navigation-list  mr-16 ">
                <ul className=" flex gap-x-6  ">
                    <li className="px-1 lg:py-6 py-2 text-sky-400  hover:text-black " ><strong>HOME</strong></li>
                    <li className="px-1 lg:py-6 py-2 text-sky-400  hover:text-black " ><strong>ABOUT</strong></li>
                    <li className="px-1 lg:pt-6 pt-2 text-sky-400  hover:text-black " ><strong>CONTACT US</strong></li>
                </ul>
            </div>
        </nav>
    </>
    );
};
export default Navigation;