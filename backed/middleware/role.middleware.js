const role =(roles=[])=>
{
    if (typeof roles === 'string')
    {
        roles =[roles];
    }
    return (req, res,next)=>
    {
        const account =req.account;
        if (!roles.includes(account.role))
        {
            res.status(403).json({message:"Forbiden"});
        }
        next();
    }
}
export default role;