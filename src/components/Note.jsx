import React, { useRef, useState } from 'react';
import useOnScroll from '../utils/useOnScroll';
import { AiOutlineClose } from 'react-icons/ai';

const Note = ({ children }) => {
  const noteRef = useRef();
  const scrolled = useOnScroll(noteRef);
  // initially allowing notes to be shown
  const [showNote, setShowNote] = useState(true);
  // once a note was crossed out, it will be hidden and not shown again
  const hideNote = () => {
    setShowNote(false);
  }

  // referencing the element to observe for intersecting
  return <div ref={noteRef}><b>Note: </b>
    {children}
    {(scrolled && showNote) && (<div className='sticky-note'>
      <button type='button' aria-label='close' className='icons icon-x-note' onClick={hideNote}>
        <AiOutlineClose />
      </button>
      <b>Note: </b>{children}</div>)}
  </div>;
};

export default Note;
