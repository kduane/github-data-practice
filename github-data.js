let data = require('./data');

// your code, here
let launchRepositories = data.length;

console.log("1. there are " + launchRepositories + " repositories");
// console.log(data);

let largestRepository = data[0];

data.forEach(repository => {
  if (repository.size > largestRepository.size) {
    largestRepository = repository;
  }
});

console.log("2. the largest repository is " + largestRepository.name);

let mostRecentRepository = data[0];

data.forEach(repository => {
  var d1 = new Date(mostRecentRepository.created_at);
  var d2 = new Date(repository.created_at);
  if (d1 < d2) {
    mostRecentRepository = repository;
  }
});

console.log("3. the most recently created repository is " + mostRecentRepository.name);

let descriptions = data.map(repository => {
  return repository.name + " : " + repository.description;
});

console.log(descriptions);

let summaries = data.map(repository => {
  var summary = "Repo name is " + repository.name + ", " +
  repository.watchers_count + " watchers, " +
  "owner is " + repository.owner;
  return summary;
});

console.log(summaries);
