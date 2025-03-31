import { BLOG } from "@/app/data"

export default function Blog() {
    return (
        <div>
            {BLOG.map((blog) => (
                <div key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    <p>{blog.date}</p>
                    <p>{blog.readingTime}</p>
                    <p>{blog.tags}</p>
                </div>
            ))}
        </div>
    )
}