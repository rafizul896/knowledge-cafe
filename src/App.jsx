import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:grid grid-cols-3 flex flex-col-reverse'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App;