import React from 'react';

//Get the 3 words of a note
const truncateNote= (noteTitle) => {

  let noteWordsArray = noteTitle.split(" ")
  //take first 3 words of array 
  let firstThreeWords = noteWordsArray.splice(0, 3)
  
  //create string of first 3 words 
  let threeWords = firstThreeWords.join()

  //set caption after removing commas, adding space b/w words 
  var caption = threeWords.replace(/,/g, ' ');
  
  caption+= '...'
  return caption
}
const NoteItem= (props) => {
  return(
  <li onClick={()=>props.showNote(props.currNote)}>
    <h2>{props.currNote.title}</h2>
    <p>{truncateNote(props.currNote.title)}</p>
  </li>
      );
  }

export default NoteItem;
