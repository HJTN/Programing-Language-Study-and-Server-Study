class Employee {
    fullName: string;
    age: number;
    jobTitle: string;
    hourlyRate: number;
    workingHoursPerWeek: number;

    printEmployeeDetails = (): void => {
        console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은
        ${this.hourlyRate * this.workingHoursPerWeek}달러 이다.`);
    }
}

let employee1 = new Employee();
employee1.printEmployeeDetails();

