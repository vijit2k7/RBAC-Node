const ROLE = {
  admin: [true,true,true],
  user:[true,true,false],
  guest:[true,false,false] //read-only access
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Kyle', role: ROLE.admin }, //0-read,1-write,2-delete
    { id: 2, name: 'Sally', role: ROLE.user },
    { id: 3, name: 'Joe', role: ROLE.guest }
  ],
  projects: [
    { id: 1, name: "Kyle's Project", userId: 1 },
    { id: 2, name: "Sally's Project", userId: 2 },
    { id: 3, name: "Joe's Project", userId: 3 }
  ]
}