import React, { useEffect, useState } from 'react'
import { Link } from '../../components'
import './detailPost.scss'
import { useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'

const DetailPost = (props) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const id = props.match.params.id
        axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log('Error: ', err)
            })
    }, [props])
    const history = useHistory()
    if (data.author) {
        return (
            <div className="detail-post-wrapper">
                <img className="image-cover" src={`http://localhost:4000/${data.image}`} alt="thumb" />
                <p className="post-title">{data.title}</p>
                <p className="post-author">{data.author.name} - {data.createdAt}</p>
                <p className="post-content">{data.body}</p>
                <Link title="Back" onClick={() => history.push('/')} />
            </div>
        )
    }
    return <p>Loading data</p>
}

export default withRouter(DetailPost)
