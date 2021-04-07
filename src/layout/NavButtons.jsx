import React from 'react';
import { Link } from 'gatsby';
import LessonTopic from '../data/LessonTopic';

const NavButtons = () => {
    // extracting current lesson information from url
    const currentTitle = LessonTopic.filter(lesson => lesson.to === window.location.pathname);
    const currentLessonType = currentTitle[0]?.lessonType;

    // creating sub arrays per lesson type
    const handleLessonNavButtons = () => {
        const unixLessons = LessonTopic?.filter(type => type.lessonType === 'unix');
        const cLessons = LessonTopic?.filter(type => type.lessonType === 'c');
        const pythonLessons = LessonTopic?.filter(type => type.lessonType === 'python');

        switch (currentLessonType) {
            case 'unix':
                return unixLessons;
            case 'c':
                return cLessons;
            case 'python':
                return pythonLessons;
            default:
                return "";
        }
    }
    // handling next lesson navigation button
    const nextLesson = () => {
        const currentLessons = handleLessonNavButtons();
        const lessonIndex = currentLessons.indexOf(currentTitle[0]);
        return currentLessons[lessonIndex + 1];
    }

    // handling previous lesson navigation button
    const previousLesson = () => {
        const currentLessons = handleLessonNavButtons();
        const lessonIndex = currentLessons.indexOf(currentTitle[0]);
        return currentLessons[lessonIndex - 1];
    }

    return (
        <div>
            {(previousLesson || nextLesson) && (

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '95vw' }}>
                    <Link to={previousLesson()?.to}>{previousLesson()?.title}</Link>
                    <Link to={nextLesson()?.to}>{nextLesson()?.title}</Link>

                </div>
            )}
        </div>
    )
}

export default NavButtons


