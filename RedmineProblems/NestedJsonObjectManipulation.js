let data = ```json {
"company": {
"departments": [ {
"name": "Engineering",
"employees": [ { "id": 1, "name": "Alice", "role": "Engineer" }, { "id": 2, "name": "Bob", "role": "Senior Engineer" }
]
}, {
"name": "HR",
"employees": [ { "id": 3, "name": "Carol", "role": "HR Manager" }
]
}
]
}
}
```;

console.log(JSON.parse(data));
