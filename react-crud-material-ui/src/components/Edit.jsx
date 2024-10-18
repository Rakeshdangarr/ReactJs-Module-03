import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Edit() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }


    const handleEdit = () => {
        console.log({ title, desc, index: localStorage.getItem('editIndex') })
        let blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []

        const _blogs = blogs.map((blog, blogInIndex) => {
            if (blogInIndex == localStorage.getItem('editIndex')) {
                return { title, desc }
            } else {
                return blog
            }
        })
        console.log(_blogs)
        localStorage.setItem('blogs', JSON.stringify(_blogs))
        navigate('/')
    }

    return (
        <>
            <Typography> Edit BLOG </Typography>
            <TextField value={title} onChange={(e) => handleTitleChange(e)} label="Title" variant="filled" /> <br />
            <TextField value={desc} onChange={(e) => handleDescChange(e)} label="Description" variant="filled" />
            <Button onClick={handleEdit} variant="contained" > SUBMIT </Button>

        </>
    )
}

export default Edit