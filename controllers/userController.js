export const getProfile = async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    res.json(req.user);
  };
  