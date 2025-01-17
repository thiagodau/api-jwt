module.exports = {
  //GET /welcome
  welcome: (req, res) => {
    const displayName = req.authenticatedUser?.name ?? 'Visitante'
    res.status(200).json({ message: `${displayName} welcome to our AP!` });
  } 
}