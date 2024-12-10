//@desc authentica and set token
//route POST /api/user/atuh
//@access public
//these annotations are optional
const authUser = (req, res) => {
    res.status(200).json({message:'Auth'}); 
}

export {
    authUser,
};