import BlogList from "./BlogList";
import "./index.css"
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); // data:blogs means data is renamed as blogs for this file

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setData(newBlogs);
    // }

    return (
        <div className="content">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />} {/*handleDelete={handleDelete} this could have been passed as props */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'aditya')} title="My Blogs!" handleDelete={handleDelete} /> */}
        </div>
    );
}

export default Home;

