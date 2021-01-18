import React from 'react';
import IndexItem from '../components/IndexItem';

export default ({ lessonTopic }) => {
 return (
    <>
      {lessonTopic.map((itemlist) => {
        const { to, title, subtitle, image } = itemlist;
        return (
        
          <IndexItem to={to} title={title} subtitle= {subtitle} img={image}></IndexItem>
        );
      })}
    </>
    
  );
};
