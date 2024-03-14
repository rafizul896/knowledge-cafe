import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="md:col-span-1">
            <h2 className='bg-[#6047EC1A] text-[#6047EC] py-4 px-5 rounded-lg'>Spent time on read : {readingTime}</h2>
            <div className='bg-[#11111112] p-5 mt-5 rounded-lg'>
                <h3 className='font-extrabold text-center'>Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;