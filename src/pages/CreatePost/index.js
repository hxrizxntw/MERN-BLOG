import React, { useEffect, useState } from 'react'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './createPost.scss'
import { useHistory, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../configs/redux/action'
import axios from 'axios'

const CreatePost = (props) => {
    const { form, imgPreview } = useSelector(state => state.createPostReducer)
    const { title, body } = form
    const [isUpdate, setIsUpdate] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        console.log('params: ', props)
        const id = props.match.params.id
        if (id){
            setIsUpdate(true)
            axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                const data = res.data.data
                console.log('result: ', data)
                dispatch(setForm('title', data.title))
                dispatch(setForm('body', data.body))
                dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
            })
            .catch(err => {
                console.log('error: ', err)
            })
        }
    }, [props, dispatch])

    const onSubmit = () => {
        const id = props.match.params.id
        if(isUpdate){
            console.log('update')
            updateToAPI(form, id)
        }else{
            console.log('post')
            postToAPI(form)
        }
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        dispatch(setForm('image', file))
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }

    return (
        <div className="create-form">
            <Link title="Back" onClick={() => history.push('/')} />
            <p className="title">{isUpdate ? 'Update' : 'Add new'} post</p>
            <Input label="Post title" value={title} onChange={
                (e) => dispatch(setForm('title', e.target.value))
            } />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea value={body} onChange={
                (e) => dispatch(setForm('body', e.target.value))
            } />
            <Gap height={20} />
            <div className="button-action">
                <Button title={isUpdate ? 'Update' : 'Add new'} onClick={onSubmit} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default withRouter(CreatePost)
