//import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import { useEffect } from 'react'
import useFetch from './hooks/useFetch'

function App() {

  const[number, setNumber] = useState(1)
  const {data} = useFetch('https://jsonplaceholder.typicode.com/posts/' , number)

  useEffect(() => {
    console.log('Mounted')

    return () => {
      console.log('remove')
    }
  }, [])

  return (
  
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
     {data && <Post title={data.title} body={data.body} ></Post>}
   
      <div className='flex items-center gap-3 mt-3'>
      {Array.from({length: 5 }).map((value, index) => {
        return(
          // eslint-disable-next-line react/jsx-key
          <div key={`pagination-${index+1}`} className='p-2 border font-bold hover:cursor-pointer hover:bg-black hover:text-white delay-50 ease-in duration-300 bg-red-950 text-white rounded-md' onClick={() => setNumber(index + 1)}>
            {index + 1}
          </div> 
        )
      })}
      </div>
    </div>
  

   
  )
}

export default App
