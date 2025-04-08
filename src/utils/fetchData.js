export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    
    // Ensure we return an array for endpoints that should return arrays
    if (url.includes('/bodyPartList') || url.includes('/exercises')) {
      return Array.isArray(data) ? data : [];
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return url.includes('/bodyPartList') || url.includes('/exercises') ? [] : null;
  }
};
