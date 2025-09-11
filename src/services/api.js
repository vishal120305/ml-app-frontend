// src/services/api.js
// Replace with your actual Render backend URL
const API_BASE_URL = 'https://ml-project-2ndf.onrender.com';

export const predictMathScore = async (studentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData)
    });

    // Get response as text first to handle both HTML and JSON
    const responseText = await response.text();
    
    // Try to parse as JSON
    try {
      const data = JSON.parse(responseText);
      
      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`);
      }
      
      return data;
    } catch (jsonError) {
      // If parsing as JSON fails, it's probably HTML
      console.warn('Server returned HTML instead of JSON');
      
      // Try to extract prediction from HTML (temporary workaround)
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = responseText;
      const resultElement = tempDiv.querySelector('.results');
      
      if (resultElement) {
        const prediction = parseFloat(resultElement.textContent);
        if (!isNaN(prediction)) {
          return { prediction: prediction };
        }
      }
      
      throw new Error('Server returned an unexpected response format. Please check your backend.');
    }
  } catch (error) {
    console.error('Error calling prediction API:', error);
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Cannot connect to the prediction server. Please check if the backend is running.');
    }
    throw error;
  }
};