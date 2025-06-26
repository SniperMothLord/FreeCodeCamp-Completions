function getAverage(grades){
  let sum = 0;
  grades.forEach(grade => sum += grade);
  return sum / grades.length;
}

function getGrade(score){
  let grade = ""
  if(score == 100){
    grade = "A+";
  }else if(90 <= score && score <= 99){
    grade = "A";
  }else if(80 <= score && score <= 89){
    grade = "B";
  }else if(70 <= score && score <= 79){
    grade = "C";
  }else if(60 <= score && score <= 69){
    grade = "D";
  }else if(0 <= score && score <= 59){
    grade = "F";
  }
  return grade;
}

function hasPassingGrade(score){
  let grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(scores, student_score){
  let class_average = getAverage(scores);
  let student_grade = getGrade(student_score);
  if(hasPassingGrade(student_score)){
    return `Class average: ${class_average}. Your grade: ${student_grade}. You passed the course.`
  }else{
    return `Class average: ${class_average}. Your grade: ${student_grade}. You failed the course.`
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));