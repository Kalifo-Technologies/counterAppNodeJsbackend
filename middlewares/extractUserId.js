export const extractUserId = (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({
      status: "error",
      message: "User ID is missing",
    });
  }
  req.userId = userId; 
  next();
};
