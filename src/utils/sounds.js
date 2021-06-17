import filterLessons from './filterLessons';
import LessonTopic from '../data/LessonTopic.json';
import unixWonderSound from '../music/unixWonderSound.mp3';
import learnSound from '../music/learnSound.mp3';
import binarySound from '../music/binarySound.mp3';
import kernelSound from '../music/kernelSound.mp3';
import cSound from '../music/c.mp3';

const selectSound = (location) => {
    const checkUrl = (keyWord) => {
        // extracting lesson type including lesson's main page in which lesson type appears differently
        const parentLessonTitle = location.split('/');
        const lessons = filterLessons(LessonTopic, location) || parentLessonTitle[parentLessonTitle.length - 1];
        const lessonTopic = lessons[0]?.lessonType || lessons;
        if (lessonTopic === keyWord) return location;
    }

    switch (location) {
        case checkUrl('unix'):
            return unixWonderSound;

        case checkUrl('binaries'):
            return binarySound;

        case checkUrl('kernel'):
            return kernelSound;

        case checkUrl('c'):
            return cSound;

        default:
            return learnSound;
    }
}

export default selectSound;

