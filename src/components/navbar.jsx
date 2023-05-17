import {TiPuzzle} from 'react-icons/ti'
import {MdComputer} from 'react-icons/md'
import {BsFillCalendar2WeekFill,BsFillPersonFill} from 'react-icons/bs'
import {AiFillCreditCard , AiOutlineGlobal} from 'react-icons/ai'
import {BiCube} from 'react-icons/bi'
import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
const Navbar = () => {
    return (
        <>
            <div className="absolute bg-white w-72 h-full p-5 ml-10 mr-10 rounded-xl z-1 ">
                <h1 className="text-xl font-bold text-gray-800 inline-flex"
                >
                    <TiPuzzle className="text-2xl" />
                    Argon Dashboard 2 Pro</h1>
                <hr className="m-5 w-full relative right-5"></hr>
                <div className=" gap-5 ">
                    <ul className="flex flex-col gap-5 mt-5 cursor-pointer">
                        <li className="text-gray-800 p-2 font-300 rounded-md hover:bg-cyan-100 ">
                            <MdComputer className="text-xl inline-flex mr-2 text-cyan-600" />
                            Dashboard</li>
                        <li className="text-gray-800 p-2  font-300  rounded-md hover:bg-cyan-100">
                            <BsFillCalendar2WeekFill className="text-xl inline-flex mr-2 text-red-600" />
                            Tables</li>
                        <li className="text-gray-800 p-2 font-300  rounded-md hover:bg-cyan-100">
                            <AiFillCreditCard className="text-xl inline-flex mr-2 text-green-600" />
                            Billing</li>
                        <li className="text-gray-800 p-2 font-300  rounded-md hover:bg-cyan-100">
                            <BiCube className="text-xl inline-flex mr-2 text-blue-600" />
                            Virtual Reality</li>
                        <li className="text-gray-800 p-2 font-300  rounded-md hover:bg-cyan-100">
                            <AiOutlineGlobal className="text-xl inline-flex mr-2 text-pink-600" />
                            RTL</li>
                    </ul>
                    <h2 className="text-gray-800 mt-5 mb-5 font-bold"
                    >Account Pages</h2>
                    <ul className="flex flex-col gap-5 cursor-pointer">
                        <li className="text-gray-800 p-2 font-300  rounded-md hover:bg-cyan-100">
                            <BsFillPersonFill className="text-xl inline-flex mr-2" />
                            Profile</li>
                        <li className="text-gray-800 p-2 font-300  rounded-md hover:bg-cyan-100">
                            <FaSignInAlt className="text-xl inline-flex mr-2 text-yellow-600"/>
                            Sign In</li>
                        <li className="text-gray-800 p-2 font-300  rounded-md hover:bg-cyan-100">
                            <FaSignOutAlt className="text-xl inline-flex mr-2 text-blue-500" />
                            Sign Up</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar;