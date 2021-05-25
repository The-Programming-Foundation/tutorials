import React, { useRef, useState, useEffect } from 'react';
import useOnScroll from '../utils/useOnScroll';
import { AiOutlineClose } from 'react-icons/ai';

const Note = ({ children }) => {
  const noteRef = useRef();
  const scrolled = useOnScroll(noteRef, '0px 0px -90%');
  const [showNote, setShowNote] = useState(false);
  const prevNote = useRef(children);
  const [noteToShow, setNoteToShow] = useState('');

  const hideNote = () => {
    setShowNote(false);
  }

  useEffect(() => {
    if (scrolled) {
      setShowNote(true);
      setNoteToShow(prevNote.current);
    }
    console.log("noteToShow=", noteToShow, '\n', children, "=children", '\n', prevNote.current, '=prevNote')
  }, [scrolled, noteToShow, children])

  return <div ref={noteRef}><b>Note: </b>
    {children}
    {(showNote) && (<div className='sticky-note'>
      <button type='button' aria-label='close' className='icons icon-x-note' onClick={hideNote}>
        <AiOutlineClose />
      </button>
      <b>Note: </b>{noteToShow}</div>)}
  </div>;
};

export default Note;
