import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import LessonTopic from '../data/LessonTopic';


const NavButtons = () => {
    const { pathname } = useLocation();

    // extracting current lesson information from url
    const currentTitle = LessonTopic.filter(lesson => {
        return lesson.to === pathname;
    });
    const currentLessonType = currentTitle[0]?.lessonType;

    // creating sub arrays per lesson type
    const handleLessonNavButtons = () => {
        const unixLessons = LessonTopic?.filter(type => type.lessonType === 'unix');
        const cLessons = LessonTopic?.filter(type => type.lessonType === 'c');
        const pythonLessons = LessonTopic?.filter(type => type.lessonType === 'python');
        const oopLessons = LessonTopic?.filter(type => type.lessonType === 'oop');
        const vimLessons = LessonTopic?.filter(type => type.lessonType === 'vim');
        const kernelLessons = LessonTopic?.filter(type => type.lessonType === 'kernel');

        switch (currentLessonType) {
            case 'unix':
                return unixLessons;
            case 'c':
                return cLessons;
            case 'python':
                return pythonLessons;
            case 'oop':
                return oopLessons;
            case 'vim':
                return vimLessons;
            case 'kernel':
                return kernelLessons;
            default:
                return "";
        }
    }
    // handling next/previous lesson navigation buttons
    const previousNextLesson = () => {
        const currentLessons = handleLessonNavButtons();
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
            { (previousLesson || nextLesson) && (
                <div className='lesson-nav-buttons'>
                    <Link to={previousLesson.to || '/'}>{previousLesson.title}</Link>
                    <Link to={nextLesson.to || '/'}>{nextLesson.title}</Link>
                </div>
            )}
        </>
    )
}

export default NavButtons