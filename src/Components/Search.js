import React from 'react'
import searchicon from "./../assets/Search.svg"
const Search = ({title,Getquery}) => {
  return (
    <>
   <div className='searchbox'>
   <input type="text" placeholder={`Search for ${title}`} onChange={Getquery}></input>
    <img src={searchicon} alt="icon"></img>
   </div>
    </>
  )
}

export default Search