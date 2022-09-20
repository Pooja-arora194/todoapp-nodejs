import todo from "../models/todo";

const todoController = {
  async store(req, res) {
    try{
      const { name, status } = req.body;

      const adduser = new todo({
        name,
        status,
      });
      await adduser.save();
      res.status(201).json({
        status: 'Todo Added!'
     
      });
    }
    catch(error){
      res.status(401).json({
        message: "Something went wrong"
      })
    }
 
  },

  async getdata(req, res) {
    const userdata = await todo.find();
    res.status(201).json(userdata);
  },

  async editdata(req, res) {
    try {
        const _id = req.params.id;
        const filter = { _id: _id };
        const data = req.body;
        const individualuser = await todo.findByIdAndUpdate(filter, data);
        console.log(individualuser);
        res.status(201).json({
        status: "Todo Edited!"
        });
    } catch (error) {
      res.status(422).json({
        message: "Something went wrong"
      });
    }
  },
  async deletedata(req, res) {
    try{
      const id = req.params.id;
      await todo.findByIdAndRemove(id).exec();
      res.status(201).json({
        status: "Todo deleted!"
      });
    }catch(error){
      res.status(422).json({
        message: "Something went wrong"
      });
    }
   
  },

  async handlecomplete(req, res) {
    try {
        const id = req.params.id;
        const task = await todo.findOneAndUpdate({_id:id},
            {
                status: true,
            },
            { new: true }
        );
        res.status(201).json({
          status: "Todo Completed!"
        });
    }catch(error){
        res.status(422).json({
          message: "Something went wrong"
      });
     }
  },
};
export default todoController;
