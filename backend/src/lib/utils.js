import jwt from "jsonwebtoken"
export const generateToken = async(userId,res)=>{
     const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
       expiresIn: "7d",
     });
     res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000, //MS
        httpOnly: true, //prevent XSS attacks cross-site scripting attacks
         sameSite:"strict", //CSRF attacks cross-site request forgery attacks
         secure:process.env.NODE_ENV!=="development",
     })
    return token
}



// This function generates a JWT using the userId and stores it in a secure cookie. We use httpOnly to prevent XSS, sameSite to prevent CSRF, and secure to ensure cookies are only sent over HTTPS. We also set an expiry for both the token and cookie. Without these options, our app would be vulnerable to common web attacks and insecure in production
