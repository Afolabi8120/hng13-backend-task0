import axios from 'axios';

export const fetchCatFact = async () => {
  try {
    const response = await axios.get('https://catfact.ninja/fact', {
      timeout: 8000
    });

    if (response.data && response.data.fact) {
      return response.data.fact;
    } else {
      throw new Error('Invalid response format from Cat Facts API');
    }
  } catch (error) {
    console.error('Error fetching cat fact:', error.message);
  }
};
