const apiKey = 'AIzaSyA8nL2kDpTBY_YXmFHKXQJ2GTLE6KH-Fo8';  // Replace with your Gemini API Key
const apiUrl = 'https://api.gemini.ai/v1/endpoint';  // Replace with the correct Gemini API endpoint

async function callGeminiApi(inputText) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            input: inputText
        })
    });

    const data = await response.json();
    return data;
}

document.querySelector('#submitBtn').addEventListener('click', async () => {
    const inputText = document.querySelector('#inputField').value;

    // Display loading message
    document.querySelector('#output').textContent = 'Loading...';

    try {
        const result = await callGeminiApi(inputText);
        document.querySelector('#output').textContent = result.response || 'No response';  // Adjust based on API response structure
    } catch (error) {
        document.querySelector('#output').textContent = 'Error: Unable to fetch response';
        console.error(error);
    }
});
