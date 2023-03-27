import { useState, useEffect } from 'react'
import axios from 'axios'

import { Input } from './components/Input/Input'
import { SinglePost } from './components/SinglePost/SinglePost'

import './PostView.css'
import { Loading } from '../../components'

const PostView = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    const getPosts = async () => {
        setLoading(true)
        const res = await axios.get(
            `https://dummyjson.com/posts/search?q=${search}`,
        )
        setPosts(res?.data.posts)
        setLoading(false)
    }

    useEffect(() => {
        getPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return (
        <>
            <div className='input__container'>
                <Input onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='post__container'>
                {loading ? (
                    <Loading />
                ) : (
                    posts.map((post) => {
                        return <SinglePost key={post.id} {...post} />
                    })
                )}
            </div>
        </>
    )
}

export default PostView
