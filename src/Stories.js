import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const {hits,isLoading , removeStory} = useGlobalContext()
  if(isLoading){
  return <div className='loading'></div>
}
  return (
    <section className='stories' >
      {hits.map((story)=>{
        // console.log(story);
        const {objectID , url , title ,num_comments,points , author}=story
        return (
          <article key={objectID} className="story" >
            <h4 className="title">{title}</h4>
            <p className="info">{points} points by <span> {author} |</span>  {num_comments} {" "} comment</p>
            <div>
              <a href={url}  target = '_blank'         className="read-link">read more</a>
              <button className="remove-btn" onClick={()=>removeStory(objectID)}>
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}


export default Stories
