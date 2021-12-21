import Image from "next/image"

function Story({img, username}) {
    return (
        <div>
            <img className="h-14 w-14 rounded-full border-red-500 border-2 object-contain
            hover:scale-110 transition transform duration-200" src={img} alt=""/>
            
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story