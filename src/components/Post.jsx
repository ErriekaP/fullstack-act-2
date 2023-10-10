//import React from 'react'

// eslint-disable-next-line react/prop-types
const Post = ({title, body}) => {
  return (
    <div className=" text-center p-4 bg-white border border-gray-400/30 w-[250px] border-double border-4 border-red-900 rounded-xl">
        <h4 className="text-2xl mb-2 font-bold">{title}</h4>
        <p>{body}</p>
    </div>
  )
}

export default Post
