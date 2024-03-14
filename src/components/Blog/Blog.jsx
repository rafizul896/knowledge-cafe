import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    const { title, cover, author_img, posted_date, reading_time, hashtags,author } = blog;
    return (
        <div className='space-y-2 border-b py-6 lg:py-0'>
            <img className='w-full rounded-md' src={cover} alt="" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h1 className='md:text-lg font-semibold'>{author}</h1>
                        <p className='text-sm font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-[#11111199] text-sm'>{reading_time} min red</p>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-xs'><FaRegBookmark /></button>
                </div>
            </div>
            <h1 className='text-xl md:text-2xl font-bold'>{title}</h1>
            <div className='text-[#11111199]'>{hashtags}</div>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='underline text-[#6047EC] font-semibold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.function,
    handleMarkAsRead: PropTypes.function
}

export default Blog;