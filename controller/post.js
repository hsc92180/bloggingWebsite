const postmodel = require("../model/post");

const createnewpost = async (req, res) => {
    // console.log(req.user._id);
    const newmodel = await new postmodel({ ...req.body ,userId:req.user._id});
    await newmodel.save();
    res.json({
        msg:"createnewpost"
    })
}

const getAllposts = async (req, res) => {
    const result = await postmodel.find().populate("userId");
    res.json({
        result:result,
    })
}

const getSpecificpost = async (req, res) => {
    const postid = req.params.id;
    const post = await postmodel.findById(postid);
    res.json({
      result:post,
    })
}


const updateapost = async (req, res) => {
    const postid = req.params.id;
    await postmodel.findByIdAndUpdate(postid, req.body);
    res.json({
        msg:"updated post"
    })
}
const deletepost = async (req, res) => {
    const postid = req.params.id;
    await postmodel.findByIdAndDelete(postid);
    res.json({
        msg:"delete post"
    })
}
// commenting part

const postComments = async (req, res) => {
    console.log(req.params.postId);

    await postmodel.updateOne({ _id:req.params.postId }, {
        $push: {
            comments:req.body,
        }
    })
    res.json({
        message:"Comment Done",
    })
}

const deleteComment = async (req, res) => {
    await postmodel.updateOne({ _id: req.params.id }, {
        $pop: {
            
        }
    })
    res.json({
        message:"Comment Deleted",
    })
}

const postcontrollers = {
    createnewpost,getSpecificpost,getAllposts,updateapost,deletepost,postComments,deleteComment
}

module.exports=postcontrollers;