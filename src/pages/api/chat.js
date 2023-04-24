
export default function handler(req, res) {
    const message = req.body.message;
    res.status(200).json({ message:  `${message} ` });
  }
  
