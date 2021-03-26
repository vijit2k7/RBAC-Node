const express = require('express')
const router = express.Router()
const {  ROLE } = require('../data')
const {authUser} = require('../permissions/basicAuth');
const {authProject,postProject}=require('../permissions/projectPermission');
var Storage = require('node-storage');
var store = new Storage('./dataNew');



router.get('/',authUser,fetchProjects, (req, res) => {
  var projects=store.get('main.projects');
  console.log("projects are",projects);
  res.json(projects)
})

router.get('/:projectId', setProject,authUser,authProject, (req, res) => {
  res.json(req.project)
})

router.post('/',authUser,postProject,(req,res)=>{
  //STORING LOGIC IN NODE-STORAGE
    if(!req.body.name)
       return res.status(400).send("Bad Request! Name Invalid!");
    let projects=store.get('main.projects');
    let project={
      id: projects.length+1,
      name:req.body.name,
      userId:req.body.userId
    }
    projects.push(project);
    store.put('main.projects', projects);
    
    console.log("projects after",projects);
    res.status(200).send(project);
})

//deleting a project
router.delete('/:projectId', authUser, (req, res) => {
  console.log("Project Deleted");
})

function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId)
  var projects=store.get('main.projects');
  console.log("projects are",projects);
  req.project = projects.find(project => project.id === projectId)
  
  if (req.project == null) {
    res.status(404)
    return res.send('Project not found')
  }
  next()
}

function fetchProjects(req,res,next)
{
  console.log("request is",req.user,req.project);
  var projects=store.get('main.projects');
  console.log("projects inside fetch projects are",projects);
  if(req.user.role[2]==true)
    return res.status(200).send(projects);
  else
  {
    let projectElement=projects.filter((project)=>req.user.id===project.userId)
    return res.status(200).send(projectElement)
  }
}

module.exports = router