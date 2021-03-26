function authUser(req,res,next){
    console.log("req is",req.user);
    if(!req.user)
    {
        res.status(403).send('You need to sign in')
    
    }
    next()
}


function adminAuth(req,res,next){
        if(!req.user.role[3].admin)
            return res.status(401).send('Unauthorised')
        
        next();

}

function validateRole(role)
{
    console.log("ssssssssssssss",Array.isArray(role),role.length)
    if(Array.isArray(role)&&role.length==3)
    {
        for(let i=0;i<role.length;i++)
            {
                console.log("type of",typeof(role[i]))
                if(typeof(role[i])!=='boolean')
                    return false;
            }
        return true;
    }
    else    
        return false;
}

module.exports={
    authUser,
    adminAuth,
    validateRole
}