const routes = [
  {
    name: "M1",
    comp: "C1",
  },
  {
    name: "M2",
    comp: "C2",
  },
  {
    name: "M3",
    subComp: [
      {
        name: "M3A",
        comp: "C3A",
      },
      {
        name: "M3B",
        comp: "C3B",
      },
    ],
  },
  {
    name: "M4",
    subComp: [
      {
        name: "M4A",
        comp: "C4A",
      },
      {
        name: "M4B",
        comp: "C4B",
      },
    ],
  },
  {
    name: "M5",
    subComp: [
      {
        name: "M5A",
        comp: "C5A",
      },
      {
        name: "M5B",
        subComp: [
          {
            name: "M5BA",
            comp: "C5BA",
          },
          {
            name: "M5BB",
            comp: "C5BB",
          },
          {
            name: "M5BC",
            comp: "C5BC",
          },
        ],
      },
      {
        name: "M5C",
        comp: "C5C",
      },
    ],
  },
];

const subscription = [
  {
    name: "M1",
    isSub: true,
  },
  {
    name: "M2",
    isSub: false,
  },
  {
    name: "M3",
    isSub: false,
    subMod: [
      {
        name: "M3A",
        isSub: true,
      },
      {
        name: "M3B",
        isSub: true,
      },
    ],
  },
  {
    name: "M4",
    isSub: true,
    subMod: [
      {
        name: "M4A",
        isSub: false,
      },
      {
        name: "M4B",
        isSub: true,
      },
    ],
  },
  {
    name: "M5",
    isSub: true,
    subMod: [
      {
        name: "M5A",
        isSub: false,
      },
      {
        name: "M5B",
        isSub: true,

        subComp: [
          {
            name: "M5BA",
            isSub: false,
          },
          {
            name: "M5BB",
            isSub: true,
          },
          {
            name: "M5BC",
            isSub: false,
          },
        ],
      },
      {
        name: "M5C",
        isSub: true,
      },
    ],
  },
];

let subValue = new Map();

function handleSubscription(subs) {
  for (let i = 0; i < subs.length; i++) {
    if (subs[i].subMod) {
      subValue.set(subs[i].name, subs[i].isSub);
      handleSubscription(subs[i].subMod);
    } else if (subs[i].subComp) {
      subValue.set(subs[i].name, subs[i].isSub);
      handleSubscription(subs[i].subComp);
    } else {
      subValue.set(subs[i].name, subs[i].isSub);
    }
  }
  return subValue;
}

handleSubscription(subscription);

// console.log(subValue);
let result = [];
function handleRoutes(routes, header, parent) {
  header = true;

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].subComp) {
      handleRoutes(routes[i].subComp);
    } else if (subValue.get(routes[i].name) === true && header === true) {
      result.push({ redirectTo: routes[i].name });
      result.push(routes[i]);
      header = false;
    } else if (subValue.get(routes[i].name) === true && header === false) {
      result.push({ name: routes[i].name, comp: routes[i].comp });
    } else if (parent !== "") {
      result.push({ name: routes[i].name, comp: "UN" });
    } else {
      console.log(result);
      result.push({ name: routes[i].name, comp: "UN" });
    }
  }
}

handleRoutes(routes, true);
console.log(result);
