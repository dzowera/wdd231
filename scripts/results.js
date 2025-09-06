import { courses } from "./data/course.js";

const allCourses = document.querySelector('.all-course');

selectAll();
function selectAll(){
  allCourses.addEventListener('click', ()=>{
    
    let numberOfCourse = courses.length;
    
    let coursesButton = '';
    courses.forEach(course =>{
      coursesButton += `
        <button class="js-result-course">${course.subject} <span class="js-course-num">${course.number}</span> </button>
      `;
    });

    document.querySelector('.results').innerHTML = `
      <p class="js-number-of-courses">The total number of courses listed below is ${numberOfCourse}</p>

      <div class="js-result-div">
        ${coursesButton}
      </div>
      
      `;
    
  });
}

const cseCourses = document.querySelector('.cse-courses');
const wddCourses = document.querySelector('.wdd-courses');


selectOther(cseCourses, 'CSE');
selectOther(wddCourses, 'WDD');
function selectOther(buttonCourse, subject){
    buttonCourse.addEventListener('click', ()=>{
    const result = courses.filter(course =>{
    if(course.subject === 'CSE'){
      return true;
      }
    });
    
    
    let coursesButton = '';
    courses.forEach(course =>{
      if(course.subject === subject){
        coursesButton += `
        <button class="js-result-course">${course.subject} <span class="js-course-num">${course.number}</span> </button>
        `;
      }
      
    });

    let num = result.length;
    result.forEach(course =>{

      document.querySelector('.results').innerHTML = `
        <p class="js-number-of-courses">The total number of courses listed below is ${num}</p>

        <div class="js-result-div">
          ${coursesButton}
        </div>
        
        `;
    });
  });
}

// I want to show courses I have completed a different style


document.querySelectorAll('.course-button')
  .forEach(button =>{
    button.addEventListener('click', ()=>{
      document.querySelectorAll('.js-result-course')
        .forEach(item =>{
          courses.forEach(course =>{
            if(course.completed === true){
              item.classList.add('is-complete');
            }
          });
        });
    });
  });







