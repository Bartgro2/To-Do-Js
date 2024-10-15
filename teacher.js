import { Person } from './person';

export function promote() {}

export default class Teacher extends Person {
    constructor(name, degree) {
      super(name);
      this.degree = degree;
    }

    teach() {
      console.log("teach");
    }
  }

  // default exports must be imported with any name
