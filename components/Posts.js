import Post from './Post'
const posts = [
    {
        id: '123',
        username: 'johnski9000',
        userImg: 'https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/266475974_4560884503993128_5544674841467921392_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hvWOUOhHtWkAX-lnKcr&_nc_ht=scontent-lcy1-2.xx&oh=00_AT-FCJ17YbE_PM2_wsRRaIrKiuyZWL8PAFUS5rvQS20sBQ&oe=61C5F902',
        img: 'https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/266475974_4560884503993128_5544674841467921392_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hvWOUOhHtWkAX-lnKcr&_nc_ht=scontent-lcy1-2.xx&oh=00_AT-FCJ17YbE_PM2_wsRRaIrKiuyZWL8PAFUS5rvQS20sBQ&oe=61C5F902',
        caption: 'This is dope!',

    },
    {
        id: '123',
        username: 'johnski9000',
        userImg: 'https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/266475974_4560884503993128_5544674841467921392_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hvWOUOhHtWkAX-lnKcr&_nc_ht=scontent-lcy1-2.xx&oh=00_AT-FCJ17YbE_PM2_wsRRaIrKiuyZWL8PAFUS5rvQS20sBQ&oe=61C5F902',
        img: 'https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/266475974_4560884503993128_5544674841467921392_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hvWOUOhHtWkAX-lnKcr&_nc_ht=scontent-lcy1-2.xx&oh=00_AT-FCJ17YbE_PM2_wsRRaIrKiuyZWL8PAFUS5rvQS20sBQ&oe=61C5F902',
        caption: 'This is dope!',
        
    }
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post 
                key={post.id} 
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
                />
            ))}
            
        </div>
    )
}

export default Posts
