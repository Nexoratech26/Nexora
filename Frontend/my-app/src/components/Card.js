export default function Card(props) {
    const {number} = props
    return (
        <div className=" w-full rounded-xl  h-full shadow-lg    bg-[#F3F0FB] dark:bg-[#151528] dark:border-gray-700 dark:border    " >
            <img  src="https://t4.ftcdn.net/jpg/02/60/51/63/360_F_260516386_qKSZGbpEOJYUeXIYBYGbYYbsiWIpI6Uz.jpg" 
                className=" w-full rounded-t-xl  "
            />
            <h1 className="text-[#726ca2] text-xs mt-4 px-4   font-semibold  tracking-widest " >BRANDING</h1>
            <div className=" flex justify-between px-4 pb-4   " >
                <div>
                    <h1 className="text-xl font-bold text-[#2D3750] dark:text-white ">
                        Portfolio
                    </h1>
                    <p className=" text-gray-600 text-xs   ">
                        A portfolio for a business 
                    </p>
                </div>
                <h1 className=" text-[#C3BFE8] text-4xl font-bold " >{props.number}</h1>
            </div>

        </div>
    )
}