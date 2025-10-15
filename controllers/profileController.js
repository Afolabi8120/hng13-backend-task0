import { fetchCatFact } from '../services/catFactService.js';

export const getProfile = async (req, res, next) => {
  try {
    // User profile fetched from .env file
    const userProfile = {
      email: process.env.USER_EMAIL,
      name: process.env.USER_NAME,
      stack: process.env.USER_STACK
    };

    // this will fetch fact from the Cat Fact API
    const catFact = await fetchCatFact();

    const response = {
      status: "success",
      user: userProfile,
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.set('Content-Type', 'application/json');
    res.status(200).json(response);
    
  } catch (error) {
    next(error);
  }
};
