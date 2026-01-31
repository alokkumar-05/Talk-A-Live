import express from "express";

const router = express.Router();

router.post("/signup",(req,res)=>{
  res.send("singup route");
})
router.post("/login",(req,res)=>{
  res.send("log in route");
});
router.post("/logout",(req,res)=>{
  res.send("logout  route");
});

export default router;