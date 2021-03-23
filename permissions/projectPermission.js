
const {ROLE}=require('../data');

//creating a middleware that will give permission to a specific project only
function authProject(req,res,next){
        console.log("req is",req.user)
        console.log("sdasdasd",req.project)
        //filtering project id
        if(req.user.role[2]==true||req.project.id==req.user.id)
        {
            next()       
        }
        return res.status(401).send('Unauthorised project access');
}
function postProject(req,res,next){

    if(req.user.role[2]==true||req.user.role[1]==true)
        next()
    return res.status(403).send('Forbidden to create a project');
}
function deleteProject(req,res,next){
    console.log("req is",req.user)
    console.log("sdasdasd",req.project)
    //filtering project id
    if(req.user.role==ROLE.admin||req.project.id==req.user.id)
    {
        next()       
    }
    return res.status(401).send('Unauthorised project access');
}
module.exports={
    authProject,
    postProject,
    deleteProject
}