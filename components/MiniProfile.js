function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img 
                src="https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/266475974_4560884503993128_5544674841467921392_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hvWOUOhHtWkAX-lnKcr&_nc_ht=scontent-lcy1-2.xx&oh=00_AT-FCJ17YbE_PM2_wsRRaIrKiuyZWL8PAFUS5rvQS20sBQ&oe=61C5F902"
                alt="profile pic"
                className=" w-16 h-16 rounded-full border p-[2px] "
            />

            <div className="flex-1 mx-4">
                <h2 className="font-bold">johnski9000</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
