const express = require('express')
const app = express()
const { ROLE,users,projects } = require('./data')
const {authUser,adminAuth,validateRole} = require('./permissions/basicAuth');
const projectRouter = require('./routes/projects')
var Storage = require('node-storage');
var store = new Storage('./dataNew');
store.put('main', {users:users,projects:projects});
app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.post('/',authUser,adminAuth,(req,res)=>{
  //only an admin can post a new user
  let users=store.get('main.users');
  for(let i in ROLE)
  {
    console.log("body and role",req.body.role,i,req.body.name.length)
    if(req.body.role==i&&req.body.name.length>=3)
    {
      let user={ 
        id: users.length+1, 
        name: req.body.name, 
        role: ROLE[i]
      }
      users.push(user);
      store.put('main.users',users);
      console.log("users are",users);
      res.send(user);
    }
  }
    res.status(400).send('Bad Request!Please input valid role or name.')
})

//To see all the users and their roles
app.get('/admin',authUser,adminAuth, (req, res) => {
  let users=store.get('main.users');
  res.send(users);
})

//To edit the role of an existing user
app.put('/:id',authUser,adminAuth,(req,res)=>{

  console.log("valiate role is",validateRole(req.body.role),!req.body.role)
  if(!req.body.role||!validateRole(req.body.role))
    return res.status(400).send('Bad Input! Role must be correct!')

  let users=store.get('main.users');
  for(let i=0;i<users.length;i++)
  {
    if(users[i].id==req.params.id)
      users[i].role=req.body.role;
  }
  store.put('main.users',users);
  console.log("user found is",users);
  res.status(201).send('Role Updated Successfully!!');
  
})
//middleware to find the user
function setUser(req, res, next) {
  const userId = req.body.userId
  let users=store.get('main.users');
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3000)