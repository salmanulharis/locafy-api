import prisma from '../config/db.config.js';

export const loginController = {
  // Create shop
  async login(req, res) {
    const data = {
        ok: "true"
    }
    res.status(200).json(data)
  },

  async verifyOTP(req, res) {
    const phoneNumber = req.body.phoneNumber;
    if(phoneNumber){
      const user = await prisma.user.findUnique({
        where: { phoneNumber: phoneNumber }
      });
      if(user){
        const data = {
            ok: "true",
            userId: user.id
        }
        res.status(200).json(data)
      }else {
          const data = {
              ok: "false",
              message: "User with this phone number not found"
          }
          res.status(400).json(data)
      } 
    }else {
        const data = {
            ok: "false",
            message: "User with this phone number not found"
        }
        res.status(400).json(data)
    }
    
  }
};