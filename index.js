// arrow function

// old way
const square = function(number) {
  return number * number;
}

// new way
const square2 = (number) => {
  return number * number;
} 

// shorter way
const square3 = (number) => number * number;

console.log(square(3));

// filter
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// old way
const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

// new way
const activeJobs2 = jobs.filter((job) => job.isActive);



















































 


















































































