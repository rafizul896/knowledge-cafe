import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center py-5 border-b'>
            <h1 className='text-xl md:text-4xl font-extrabold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;