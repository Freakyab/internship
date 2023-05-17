import { AiOutlineMenu, AiFillHome, AiOutlineSearch, AiTwotoneSetting, AiOutlineArrowUp, AiTwotoneBulb } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { IoIosNotifications, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { HiShoppingCart } from 'react-icons/hi'
import { RiCustomerService2Fill, RiUserSettingsLine } from 'react-icons/ri'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import Graph from './chart'

const Dashboard = () => {
    const data = [
        {
            id: 1,
            text: "TODAY'S MONEY",
            amount: "$53,000",
            figure: "+55%",
            type: "Gain",
            from: "yesterday",
        }
        ,
        {
            id: 2,
            text: "TODAY'S USERS",
            amount: "2,300",
            figure: "+3%",
            type: "Gain",
            from: "last week",
        }
        ,
        {
            id: 3,
            text: "NEW CLIENTS",
            amount: "+3,462",
            figure: "-2%",
            type: "Loss",
            from: "last quater",
        },
        {
            id: 4,
            text: "SALES",
            amount: "$103,430",
            figure: "+5%",
            type: "Gain",
            from: "last month",
        }

    ]
    return (
        <>
            < div className="ml-[22vw] z-20 flex flex-col">
                <div className="flex justify-between ml-5 mt-4">
                    <span className=" text-white text-xs p-2">
                        <AiFillHome className="text-xs inline-flex mr-2 " />
                        /Dashboard
                        <h1 className="text-lg text-white font-bold">
                            Dashboard
                        </h1>
                    </span>
                    <AiOutlineMenu className="text-2xl relative text-white top-3 right-[15vw] " />
                    <span className="flex gap-5 text-white">
                        <label className='translate-x-12 translate-y-3 text-black'>
                            <AiOutlineSearch className="text-xl" />
                        </label>
                        <input type="text"
                            className="bg-[#F2F2F2] rounded-md pl-10 w-[250px] h-[40px] text-gray-500"
                            placeholder="type here..."
                        />
                        <BsPersonCircle className='text-base translate-y-3' />
                        <p className='text-base translate-y-1.5'>
                            sign up
                        </p>
                        <AiTwotoneSetting className='text-base translate-y-3' />
                        <IoIosNotifications className='text-base translate-y-3 mr-5' />
                    </span>
                </div>
                <div className="flex flex-row justify-between">
                    {data.map(item => {
                        return (
                            <>
                                <div className="bg-white rounded-md p-3 m-5 w-[250px] h-[100px]">
                                    <span className="text-gray-500 font-semibold">
                                        {item.text}
                                    </span>
                                    <h1 className="text-xl font-bold">
                                        {item.amount}
                                    </h1>
                                    {item.type === "Gain" ? (
                                        <div >
                                            <span className="text-green-500">
                                                {item.figure}
                                            </span>
                                            <span className="pl-3">
                                                since {item.from}
                                            </span>
                                        </div>

                                    ) : (
                                        <div>
                                            <span className="text-red-500">
                                                {item.figure}
                                            </span>
                                            <span className="pl-3">
                                                since {item.from}
                                            </span>
                                        </div>
                                    )}
                                    {item.id === 4 ?
                                        <div class="h-12 w-12 rounded-full relative bottom-[70px] left-44 bg-yellow-400 flex justify-center items-center">
                                            <HiShoppingCart className="text-xl rounded-full" />
                                        </div>
                                        : item.id === 3 ?
                                            <div class="h-12 w-12 rounded-full relative bottom-[70px] left-44 bg-green-400 flex justify-center items-center">
                                                <RiCustomerService2Fill className="text-xl rounded-full" />
                                            </div>
                                            : item.id === 2 ?
                                                <div class="h-12 w-12 rounded-full relative bottom-[70px] left-44 bg-red-400 flex justify-center items-center">
                                                    <RiUserSettingsLine className="text-xl rounded-full" />
                                                </div>
                                                : item.id === 1 ?
                                                    <div class="h-12 w-12 rounded-full relative bottom-[70px] left-44 bg-blue-400 flex justify-center items-center">
                                                        <FaMoneyCheckAlt className="text-xl rounded-full" />
                                                    </div>
                                                    : null}
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="flex">
                    <div className="h-[450px] w-1/2 p-3 m-5 bg-white rounded-md">
                        <h3 className="text-xl p-5 font-semibold">
                            Sales Overview
                        </h3>
                        <h2 className="text-xl pl-5 text-green-500 flex" >
                            <span className='inline-flex'>
                                <AiOutlineArrowUp /><span className='text-black pl-2 text-base'> 4% more in 2022 </span>
                            </span>
                        </h2>
                        <div className='h-full pt-5'>
                            <Graph />
                        </div>
                    </div>
                    <div className="h-[450px] w-1/2 m-5 bg-gray-900 rounded-md overflow-hidden">
                        <img src="https://www.xtrafondos.com/wallpapers/espacio-abstracto-3088.jpg" alt="image" className="h-[450px] w-[540px] rounded-md opacity-80 absolute" />
                        <div className='pr-20 pt-10 flex flex-col text-white'>
                            <span className='z-10 flex justify-end gap-10 text-2xl '>
                                <IoIosArrowBack />
                                <IoIosArrowForward />
                            </span>
                            <div className='w-10 h-10 bg-white text-black flex justify-center items-center rounded-md relative top-28 left-14'>
                                <AiTwotoneBulb className='text-2xl' />
                            </div>
                            <h3 className="text-xl left-10 p-5 font-semibold relative top-28">
                                Fastest way to create web pages
                            </h3>
                            <p className="text-base left-10 p-5 pl-5 relative top-28">
                                That's the skill. I'm not really specifically talented at anything except for the ability to learn.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard;