import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Home() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const blogs = localStorage.getItem('blogs');
        if (blogs) {
            setBlogs(JSON.parse(blogs));
        }
    }, []); // Only run on mount

    const handleDelete = (blogOutIndex) => {
        const updatedBlogs = blogs.filter((_, index) => index !== blogOutIndex);
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    const handleEdit = (blogIndex) => {
        localStorage.setItem('editIndex', blogIndex);
        navigate('/edit');
    };

    return (
        <>
            <br />
            <Button
                onClick={() => navigate('/add')}
                variant="contained"
            >
                ADD BLOG
            </Button>
            <br />

            {
                blogs.length > 0 ?
                    blogs.map((blog, blogIndex) => (
                        <div key={blogIndex} style={{ borderBottom: "1px solid #eee", margin: '10px 0px' }}>
                            <span style={{ display: 'inline-block', minWidth: '200px' }}>
                                {blog?.title}
                            </span>
                            <span style={{ display: 'inline-block', minWidth: '280px' }}>
                                {blog?.desc}
                            </span>
                            <EditIcon style={{ color: 'blue', minWidth: '50px' }} onClick={() => handleEdit(blogIndex)} />
                            <DeleteIcon style={{ color: 'red' }} onClick={() => handleDelete(blogIndex)} />
                        </div>
                    )) :
                    'No Data found'
            }
        </>
    );
}

export default Home;
