
// ---------------JSON Manipulation -------------------------

const user = {
  name: "Mayank",
  age: 28,
  isLoggedIn: true,
  skills: ["JavaScript", "React", "Node.js"],
  address: { city: "Meerut", state: "UP" },
  nothing: null,
};

let stringData = JSON.stringify(user);
console.log(typeof stringData);
const jsonData = JSON.parse(stringData);
console.log(typeof jsonData);


console.log(JSON.stringify(user));
 
console.log(JSON.stringify(user, null, 2));    // format data with 2 spaces indent

// // console.log(JSON.stringify(user, ["name", "age"]));

// const json = '{"name":"Mayank","created":"2025-10-15T10:00:00Z"}';

const obj = JSON.parse(json, (key, value) => {
  if (key === "created") return new Date(value);
  return value;
});
console.log(obj);
console.log(obj.created instanceof Date);

 

const original = {
  a: 1,
  b: { c: 2 },
  hello() {
    console.log("Hello...");
  },
};

// // console.log(original)

const copy = JSON.parse(JSON.stringify(original));

// // console.log(copy)
// object

// console.log(data.name);
// console.log(data.address.city);

console.log(data?.address.pin ?? "N/A"); //

// data.projects = [
//   ...data.projects,
//   {
//     name: "AI",
//     year: 2026,
//   },
// ];

// console.log(data.projects);

// delete data

// const myUser = {
//   name:"Mayank",
//   age:21
// }

// delete myUser.name

// console.log(myUser)

const jsonString = `{
    "name": "Mayank",
    "age": 28,
    "isDeveloper": true,
    "skills": ["JavaScript", "React", "Node.js", "TypeScript"],
    "address": {
      "city": "Meerut",
      "state": "Uttar Pradesh"
    },
    "projects": [
      { "name": "E-commerce", "year": 2024 },
      { "name": "Dashboard", "year": 2025 }
    ]
  }`;

const data = JSON.parse(jsonString);

// console.log(data?.address?.pin ?? "N/A");

data.age = 29;

data.skills[1] = "HTML/CSS";

data.projects = [...data.projects, { name: "Ai Learning", year: 2026 }];
// console.log(data);

// data.email = "mk123@gmail.com";
// data.country = "India";

// data.skills.push("GraphQL");
// data.skills.unshift("Java");

// data.address.pin = 250001;

// delete data.address.state;

// data.skills.pop();

// data.skills.shift();

data.projects = data.projects.filter((project) => project.year >= 2025);

// console.log(data);

let user1 = {
  name: "Mayank kumar",
  age: 21,
  address: {
    area: "Ganga colony",
    city: "Meerut",
    stateAndNation: {
      state: "UP",
      country: "India",
      continentAndPlanet: {
        continent: "Asia",
        Planet: "Earth",
        galaxyName: {
          name: "MilkyWay",
        },
      },
    },
  },
  subject: ["JS", "HTML", "CSS", "REACT JS", "NODE JS"],
};


// ------------------------Nested Json Manipulation -----------------------------


// import { produce } from "immer";

// Taken dummy data from the google to perform all the JSON Manipulation

const data = {
  userId: "USR-987654",
  createdAt: "2024-11-15T08:30:00Z",
  lastLogin: "2026-03-01T14:12:45Z",
  status: "active",
  profile: {
    fullName: "Mayank Sharma",
    displayName: "Mayank",
    bio: "Frontend developer | Learning JS deeply",
    avatarUrl: "https://images.example.com/avatars/mayank-2025.jpg",
    age: 28,
    location: {
      city: "Agra",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: {
        lat: 27.1767,
        lng: 78.0081,
      },
    },
    contact: {
      email: "mayank.sharma.dev@gmail.com",
      phone: "+91-9876543210",
      social: {
        github: "mayank-git",
        twitter: "@mayank_dev",
        linkedin: "in/mayank-sharma-dev",
      },
    },
    preferences: {
      theme: "dark",
      language: "en",
      notifications: {
        email: {
          enabled: true,
          frequency: "daily",
          categories: ["updates", "security", "newsletter"],
          tryNew: {
            new: "Let's see",
          },
        },
        push: {
          enabled: false,
          categories: [],
        },
        inApp: {
          enabled: true,
          sound: "soft",
          vibrate: true,
        },
      },
      privacy: {
        showEmail: false,
        showLocation: "city-only",
        activityStatus: "friends-only",
      },
    },
  },
  stats: {
    posts: 342,
    followers: 1287,
    following: 456,
    reactionsReceived: 8942,
    lastPostDate: "2026-02-28T19:45:12Z",
    achievements: [
      "first-post",
      "100-followers",
      "consistent-30d",
      "profile-completed",
    ],
  },
  learningProgress: {
    topics: [
      {
        name: "JavaScript Fundamentals",
        completed: true,
        score: 92,
        lastAttempt: "2025-12-10",
        modules: [
          { id: "js-101", completed: true },
          { id: "js-102", completed: true },
          { id: "js-103", completed: false },
        ],
      },
      {
        name: "Advanced JavaScript & Patterns",
        completed: false,
        score: 68,
        lastAttempt: "2026-02-20",
        modules: [
          { id: "closures", completed: true },
          { id: "prototypes", completed: true },
          { id: "async-deep", completed: false },
          { id: "modules-esm", completed: false },
        ],
      },
      {
        name: "React & State Management",
        completed: false,
        score: null,
        lastAttempt: null,
        modules: [],
      },
    ],
    nextRecommended: "zustand-vs-redux",
    totalHours: 148.5,
  },
  recentActivity: [
    {
      type: "post",
      id: "POST-45678",
      title: "Debounce vs Throttle – real examples",
      createdAt: "2026-03-02T09:15:33Z",
      likes: 47,
      comments: 12,
      tags: ["javascript", "performance", "frontend"],
    },
    {
      type: "comment",
      id: "CMT-98765",
      onPost: "POST-12345",
      content: "Immer makes deep updates so much cleaner!",
      createdAt: "2026-03-01T18:40:22Z",
    },
    {
      type: "like",
      id: "LIKE-33421",
      onPost: "POST-89012",
      createdAt: "2026-02-28T22:10:05Z",
    },
  ],
  settings: {
    ui: {
      sidebarCollapsed: false,
      fontSize: "medium",
      codeTheme: "dracula",
    },
    editor: {
      tabSize: 2,
      autoSave: true,
      autoSaveInterval: 30000,
      formatOnSave: true,
    },
    api: {
      preferredEndpoint: "production",
      timeout: 10000,
      retryCount: 3,
    },
  },
};

// console.log(data.profile.preferences.notifications.email.tryNew); // ---> Accessing the nested data 

const updated = {   // Chaning the nesting data using the spread method
  ...data,
  profile: {
    ...data.profile,
    preferences: {
      ...data.profile.preferences,
      notifications: {
        ...data.profile.preferences.notifications,
        email: {
          ...data.profile.preferences.notifications.email,
          tryNew: {
            new: "Something new",
          },
        },
      },
    },
  },
};

// // const updated = {
// //   ...data,
// //   profile: {
// //     ...data.profile,
// //     preferences: {
// //       ...data.profile.preferences,
// //       theme: "Light",
// //       notifications: {
// //         ...data.profile.preferences.notifications,
// //         email: !data.profile.preferences.notifications,
// //       },
// //     },
// //   },
// // };

// // console.log(updated.profile.preferences.notifications);

// // const nextState = produce(data, draft=>{  // Updating the nesting data using the immer
// //   draft.profile.preferences.notifications.push = true;

// // })
// // console.log(updated.profile.preferences.notifications.email.tryNew);

// // const nextState = produce(data, (draft) => {
// //   draft.profile.preferences.notifications.push = true;

// // });

// // console.log(nextState)

// // const newState = {
// //   ...data,
// //   profile: {
// //     ...data.profile,
// //     address: {
// //       ...data.profile.address,
// //       city: "Modinagar",
// //     },
// //   },
// // };

// // console.log(data);
// // console.log(newState);

// // Immer in Js :-

// const data = {
//   name: "Mayank",
//   age: 21,
//   profile: {
//     gender: "Male",
//     address: {
//       area: "Ganga Colony",
//       city: "Meerut",
//       state: "Uttar Pradesh",
//     },
//   },
// };

// // const newState = produce(state, (draft) => {
// //   draft.profile.address.city = "Ghaziabad";
// // });

// const state = [
//   {
//     id: 1,
//     title: "First Post",
//     comments: [
//       { id: 1, text: "Original Comment 1" },
//       { id: 2, text: "Old Text" }, // This one will be updated
//       { id: 3, text: "Original Comment 3" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Second Post",
//     comments: [{ id: 4, text: "Comment 4" }],
//   },
// ];

// // id =1 , comment id = 2 --> change text to modified text

// const nextState = state.map((ele) => {
//   if (ele.id == 1) {
//     return {
//       ...ele,
//       comments: ele.comments.map((c) => {
//         c.id === 2 ? { ...c, text: "Modified Text" } : c;
//       }),
//     };
//   }

//   return ele;
// });

// console.log(nextState);
// // const nextState = produce(draft , (state)=>{

// // })

const count = 1;
const myPromise = new Promise((res, rej) => {
  res("Pomise resolved");
});

myPromise
  .then(() => {
    // count++;
    console.log("fff")
    // return "hello"
  }).then(res=> cons)
  .catch(() => {
    // count--;
  });

console.log(count);
