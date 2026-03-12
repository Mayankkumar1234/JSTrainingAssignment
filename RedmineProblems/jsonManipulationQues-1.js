// src -> batch_id , name and contact

function sourceToResultFormat(object) {
  let obj = {};

  for (let val of object) {
    if (!obj[val.batch_id]) {
      obj[val.batch_id] = [{ name: val.name, contact: val.contact }];
    } else {
      obj[val.batch_id].push({ name: val.name, contact: val.contact });
    }
  }

  return obj;
}

let sourceData = [
  {
    batch_id: "123",
    name: "Tony",
    contact: "9872276210",
  },
  {
    batch_id: "231",
    name: "Steve",
    contact: "7876543210",
  },
  {
    batch_id: "123",
    name: "Bruce",
    contact: "6776543210",
  },
  {
    batch_id: "321",
    name: "Clint",
    contact: "8954643210",
  },
  {
    batch_id: "123",
    name: "Peter",
    contact: "7666543210",
  },
  {
    batch_id: "231",
    name: "Phil",
    contact: "8896543210",
  },
  {
    batch_id: "321",
    name: "Nick",
    contact: "9876521210",
  },
];

console.log(sourceToResultFormat(sourceData));
