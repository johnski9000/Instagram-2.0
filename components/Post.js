import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaceIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline"

import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, setDoc, doc, deleteDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { comment } from "postcss";
import { useEffect, useState } from "react";
import { db } from '../firebase'


function Post({id, username, userImg, img, caption}) {
    const {data: session} = useSession();
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(
        () =>
            onSnapshot
            (query(
                collection(db, 'posts', id, 'comments'),
                orderBy('timestamp', 'desc')
                ),
                (snapshot)  => setComments(snapshot.docs))
                , [db, id])

    useEffect(
        () => 
        onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => 
                setLikes(snapshot.docs)
    ), [db, id]
    )

    useEffect(() => {
        setHasLiked(
            likes.findIndex((like) => like.id === session?.user?.uid) !== -1
        )
    }, [likes])
    
    const likePost = async () => {
        if(hasLiked){
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
            username: session.user.name,
        })
    }
    }

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('')
        
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.name,
            userImg: session.user.image,
            timestamp: serverTimestamp()
        })
    }
    console.log(comments)
    return (
        <div className="bg-white my-7 border rounded-s,">
            {/* Header */}
            <div className="flex items-center p-5 ">
                <img src={userImg} className="rounded-full h-12 w-12 border p-1 mr-3" alt="profile image"/>
                <p className="flex-1 font-bold "> {username} </p>
                <DotsHorizontalIcon className="h-5"/>
            </div>

            {/* img */}
            <img src={img} className="object-cover w-full" alt="post image"/>

            {/* Buttons */}
            {session && (
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    {
                        hasLiked ? (
                            <HeartIconFilled className="btn text-red-500" onClick={likePost}/>
                        ) : (
                            <HeartIcon className="btn" onClick={likePost}/>
                        )
                    }
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>
                <div>
                    <BookmarkIcon className="btn"/>
                </div>
            </div>
            )}
            {/* Caption */}
            <div>
                <p className="p-5 truncate">
                    { likes.length > 0 && (
                        <p className="font-bold mb-1">{likes.length} likes</p>
                    )}
                    <span className="font-bold mr-1">{username}</span>
                    {caption}
                </p>
            </div>

            {/* Comments */}
            {comments.length > 0 && (
                <div 
                className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin"
                >
                    {comments.map((comment) => (
                        <div 
                            key={comment.id}
                            className="flex items-center space-x-2 mb-3"
                        >
                            <img 
                                src={comment.data().userImg}
                                alt="" 
                                className="h-7 rounded-full"
                             />
                             <p 
                             className="text-sm flex-1"
                             >
                                 <span className="font-bold">{comment.data().username}</span>
                                 {" "}
                                 {comment.data().comment}
                            </p>
                            {/* <Moment fromNow>
                                {comment.data().timestamp?.toDate()}
                            </Moment> */}
                            {/* <p>{comment.data().timestamp}</p> */}
                        </div>
                    ))}
                </div>
            )}

            {/* Input Box */}
            {session && (
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"/>
                <input 
                type="text"
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="border-none flex-1 focus:ring-0 outline-none"/>
                <button 
                    type="submit"
                    disabled={!comment.trim()} 
                    onClick={sendComment}
                    className="font-semibold text-blue-400"
                 >Post</button>
            </form>
            )}

        </div>
    )
}

export default Post
