const filterLessons = (LessonTopic, pathname) => {
    // extracting current lesson information from url
    const currentTitle = LessonTopic.filter(lesson => lesson.to === pathname);
    const currentLessonType = currentTitle[0]?.lessonType;

    // grouping lessons per type
    const unixLessons = LessonTopic?.filter(type => (type.lessonType === 'unix'));
    const cLessons = LessonTopic?.filter(type => (type.lessonType === 'c'));
    const pythonLessons = LessonTopic?.filter(type => (type.lessonType === 'python'));
    const oopLessons = LessonTopic?.filter(type => (type.lessonType === 'oop'));
    const vimLessons = LessonTopic?.filter(type => (type.lessonType === 'vim'));
    const kernelLessons = LessonTopic?.filter(type => (type.lessonType === 'kernel'));

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
};

export default filterLessons;