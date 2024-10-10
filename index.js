/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // Create an employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Create multiple employee records
function createEmployeeRecords(employeeData) {
    return employeeData.map(data => createEmployeeRecord(data));
}

// Add a TimeIn event
function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}

// Add a TimeOut event
function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}

// Calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

// Calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// Calculate all wages for an employee
function allWagesFor() {
    return this.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate.call(this, event.date);
    }, 0);
}

// Find an employee by their first name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}

// Calculate payroll for all employees
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => {
        return total + allWagesFor.call(record);
    }, 0);
}


