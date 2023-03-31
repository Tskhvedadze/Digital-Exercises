import './SinglePost.css'

type SinglePostProps = {
    title: string
    body: string
}

export const SinglePost = ({ title, body }: SinglePostProps) => {
    return (
        <div className='content__container'>
            <h2 className='content__title'>{title}</h2>
            <p className='content__para'>{body}</p>
        </div>
    )
}
