// dependencies
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import useBlogs from '../../hooks/useBlogs';

function Blogs() {
    const {blogs} = useBlogs()

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center">Latest Blogs</h2>
                <p className="text-center mb-4">We Provide lots of services with digital machines imported from USA and Japan</p>
                <Row>
                    {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
                </Row>
            </Container>
        </section>
    )
}

export default Blogs;