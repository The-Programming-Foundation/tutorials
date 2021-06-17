import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import LessonTopic from '../data/LessonTopic';
import filterLessons from '../utils/filterLessons';


const NavButtons = () => {
    const { pathname } = useLocation();
    const currentTitle = LessonTopic.filter(lesson => lesson.to === pathname);

    // handling next,previous lesson navigation buttons
    const previousNextLesson = () => {
        const currentLessons = filterLessons(LessonTopic, pathname);
        const lessonIndex = currentLessons.indexOf(currentTitle[0]);
        const lessonLinks = {
            nextLesson: '',
            previousLesson: ''
        };
        lessonLinks.nextLesson = currentLessons[lessonIndex + 1] || '';
        lessonLinks.previousLesson = currentLessons[lessonIndex - 1] || '';
        return lessonLinks;
    };

    const { previousLesson, nextLesson } = previousNextLesson();

    return (
        <>
            {/* if there's a previous or next lesson, display navigation buttons */}
            {(previousLesson || nextLesson) && (
                <div className='lesson-nav-buttons'>
                    <Link to={previousLesson.to || '/'}>{previousLesson.title}</Link>
                    <Link to={nextLesson.to || '/'}>{nextLesson.title}</Link>
                </div>
            )}
        </>
    )
}

export default NavButtons