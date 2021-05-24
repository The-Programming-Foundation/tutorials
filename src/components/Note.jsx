import React, { useRef } from 'react';
import useOnScroll from '../utils/useOnScroll';

const Note = ({ children }) => {
  const noteRef = useRef();
  const scrolled = useOnScroll(noteRef, '0px 0px -90%');

  return <div ref={noteRef}><b>Note: </b>
    {children}
    {scrolled && (<div className='sticky-note'><b>Note: </b>{children}</div>)}
  </div>;
};

export default Note;
