// // You are given a nested JSON object representing a company's organizational structure. Create a function called createCompanyStructure that initializes a jsonObject with the first set of data and includes a manageCompany method, returning the jsonObject with the specified data and method attached? The structure includes departments, employees, and their respective details. Your task is to write a function that performs the following operations:

// function manageCompany(jsonObject, operation, department, obj) {
//   switch (operation) {
//     case "add":
//       for (let value of jsonObject.company.department) {
//         if (value.name === department) {
//           jsonObject.company.department.push(obj);
//         }
//         return jsonObject;
//       }
//       break;
//     case "remove":
//       break;
//     case "update":
//       break;
//     default:
//       return false;
//   }
// }
function createCompanyStructure(initialData) {
  // 1. Initialize jsonObject with the first set of data
  return {
    data: initialData,
    manageCompany(operation, department, obj) {
      switch (operation) {
        case "add":
          if (!this.data.company.departments.includes(department)) {
            this.data.company.departments[department] = obj;
            return this.data.company.departments[i].employees;
          }
          for (let i = 0; i < this.data.company.departments.length; i++) {
            if (this.data.company.departments[i].name === department) {
              this.data.company.departments[i].employees.push(obj);
              return this.data.company.departments[i].employees;
            }
          }
          break;
        case "remove":
          for (let i = 0; i < this.data.company.departments.length; i++) {
            if (this.data.company.departments[i].name === department) {
              this.data.company.departments[i].employees =
                this.data.company.departments[i].employees.filter(
                  (p) => p.id !== obj.id,
                );
              return this.data.company.departments[i].employees;
            } else {
              return "No such departments exists";
            }
          }
          break;

        case "update":
          for (let i = 0; i < this.data.company.departments.length; i++) {
            if (this.data.company.departments[i].name === department) {
              this.data.company.departments[i].employees =
                this.data.company.departments[i].employees.map((d) => {
                  if (d.id === obj.id) {
                    return { ...d, name: obj.name, role: obj.role };
                  }
                  return d;
                });
              return this.data.company.departments[i].employees;
            } else {
              return "No such department exists";
            }
          }
          break;
        default:
          return false;
      }
    },
  };
}

let obj = {
  company: {
    departments: [
      {
        name: "Engineering",

        employees: [
          { id: 1, name: "Alice", role: "Engineer" },

          { id: 2, name: "Bob", role: "Senior Engineer" },
        ],
      },

      {
        name: "HR",

        employees: [{ id: 3, name: "Carol", role: "HR Manager" }],
      },
    ],
  },
};
let manageData = createCompanyStructure(obj);

// console.log(manageData.manageCompany("remove", "HR", { id: 3 }));

// console.log(
//   manageData.manageCompany("add", "Engineering", {
//     id: 4,
//     name: "Dave",
//     role: "Intern",
//   }),
// );
// console.log(manageData.manageCompany("remove", "HR", { id: 3 }));
// // class

console.log(
  manageData.manageCompany("add", "dev", {
    id: 1,
    name: "mayank",
    role: "jr dev",
  }),
);
