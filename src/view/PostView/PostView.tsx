import { useState, useEffect, ChangeEvent } from 'react'

import { Input } from './components/Input/Input.tsx'
import { SinglePost } from './components/SinglePost/SinglePost.tsx'

import { getData } from '../../utils/data.utils.ts'

import './PostView.css'
import { Loading } from '../../components'

type Post = {
    id: number
    body: string
    title: string
}

const PostView = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])
    const [search, setSearch] = useState('')

    const getPosts = async () => {
        setLoading(true)
        const searchedPost = await getData<Post[]>(
            `https://dummyjson.com/posts/search?q=${search}`,
        )

        setPosts(searchedPost)
        setLoading(false)
    }

    useEffect(() => {
        getPosts()
        // eslint-disable-next-line
    }, [search])

    return (
        <>
            <div className='input__container'>
                <Input
                    onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                        setSearch(event.target.value)
                    }
                />
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
