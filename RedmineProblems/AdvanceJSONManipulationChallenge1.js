function employeeReportGenerator(Employees , Projects){


  
let employeeObj = new Map(); // create a map to store each employee data with thier employee id.


for (let val of Employees.employees) {
  if (!employeeObj.get(val.employee_id)) {
    let obj = {
      employee_id: val.employee_id,
      name: val.name,
      role: val.role,
      total_hours: 0,
      average_project_rating: 0,
      total_project_worked: 0,
      projects: [],
    };

    employeeObj.set(val.employee_id, obj); //
  }
}

// console.log(employeeObj);
for (let project of Projects.projects) {
  for (let hour of project.hours) {
    if (employeeObj.has(hour.employee_id)) {
      let employee = employeeObj.get(hour.employee_id);

      // console.log(employee);
      employee.total_hours += hour.hours_worked;
      employee.average_project_rating =
        employee.average_project_rating + project.rating;
      employee.total_project_worked += 1;
      employee.projects.push({
        project_id: project.project_id,
        project_name: project.name,
        hours_worked: hour.hours_worked,
        rating: project.rating,
      });
    }
  }
}

// console.log(employeeObj);

let employeeReport = [];

for (let [key, value] of employeeObj) {
  employeeReport.push({
    employee_id: value.employee_id,
    name: value.name,
    role: value.role,
    total_hours: value.total_hours,
    average_project_rating:
      value.average_project_rating / value.total_project_worked,
    projects: value.projects,
  });
}
return employeeReport
}

let Employees = {
  employees: [
    {
      employee_id: "E001",
      name: "John Doe",
      role: "Developer",
    },
    {
      employee_id: "E002",
      name: "Jane Smith",
      role: "Designer",
    },
    {
      employee_id: "E003",
      name: "Emily Davis",
      role: "Project Manager",
    },
  ],
};

let Projects = {
  projects: [
    {
      project_id: "P001",
      name: "Project Alpha",
      hours: [
        { employee_id: "E001", hours_worked: 120 },
        { employee_id: "E002", hours_worked: 80 },
      ],
      rating: 4.5,
    },
    {
      project_id: "P002",
      name: "Project Beta",
      hours: [
        { employee_id: "E001", hours_worked: 150 },
        { employee_id: "E003", hours_worked: 200 },
      ],
      rating: 4.7,
    },
    {
      project_id: "P003",
      name: "Project Gamma",
      hours: [
        { employee_id: "E002", hours_worked: 50 },
        { employee_id: "E003", hours_worked: 60 },
      ],
      rating: 4.0,
    },
  ],
};

console.log(employeeReportGenerator(Employees , Projects));

 
