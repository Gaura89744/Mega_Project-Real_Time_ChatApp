//for user authentication
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
export const protectRoute=async(req,res,next)=>{
  try {
    const token = req.cookies.jwt;
   console.log("jwt from token",token)
    if(!token){
      return res.status(401).json({message:"Unauthorized - No Token Provided"})
    }
     const decoded = jwt.verify(token, process.env.JWT_SECRET);//it verifies token is right or wrong and make able to userId which have user._id

     if(!decoded){
      return res.status(401).json({message:"Unauthorized - Invalid Token"})
     }

     const user =await User.findById(decoded.userId).select("-password")//fetching data which id is decoded.userId and select("-password") used for hiding password at giving data.
     if(!user){
      return res.status(404).json({message:"User not found"})
     }

     req.user = user;  //so that we can use protectRoute any where without authenticate again and again.it gives that user is authenticate
     next()

  } catch (error) {
    console.log("Error in protectRoute middleware",error.message)
    res.status(500).json({message:"Internal Server error"})
  }
}
