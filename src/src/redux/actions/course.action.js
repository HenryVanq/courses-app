export const createCourse = (course) => {
  return {
    type: "CREATE_COURSE",
    action: course, // same left and rigt so use 1 word
  };
};
