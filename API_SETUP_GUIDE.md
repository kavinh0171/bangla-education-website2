# Gemini API Setup Guide
## বাংলা শিক্ষা সহায়ক - API সেটআপ গাইড

This guide will help you set up the Google Gemini API for the Bangla Education Helper website.

## Step 1: Get Your Free Gemini API Key

1. **Visit Google AI Studio**: Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

2. **Sign in**: Use your Google account to sign in

3. **Create API Key**: 
   - Click "Create API Key"
   - Choose "Create API key in new project" (recommended for new users)
   - Copy the generated API key

## Step 2: Configure the Website

1. **Open config.js**: Navigate to your website folder and open `config.js`

2. **Replace API Key**: Find this line:
   ```javascript
   GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
   ```
   
   Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key:
   ```javascript
   GEMINI_API_KEY: 'AIzaSyC-your-actual-api-key-here',
   ```

3. **Save the file**

## Step 3: Secure Your API Key (Important!)

### For Production Deployment:

1. **Go to Google Cloud Console**: Visit [https://console.cloud.google.com/](https://console.cloud.google.com/)

2. **Navigate to APIs & Services > Credentials**

3. **Find your API key** and click the edit button

4. **Set Application Restrictions**:
   - Choose "HTTP referrers (web sites)"
   - Add your website domains:
     ```
     https://yourdomain.com/*
     https://www.yourdomain.com/*
     ```

5. **Set API Restrictions**:
   - Choose "Restrict key"
   - Select "Generative Language API"

6. **Set Usage Quotas** (recommended):
   - Go to "Quotas" section
   - Set daily limits (e.g., 1000 requests/day)
   - Set per-minute limits (e.g., 60 requests/minute)

## Step 4: Test the Setup

1. **Open your website** in a browser
2. **Upload a sample PDF** with Bangla text
3. **Try generating questions** from a chapter
4. **Check browser console** for any errors

## Free Tier Limits

The Gemini API free tier includes:
- **60 requests per minute**
- **1,500 requests per day**
- **1 million tokens per month**

This should be sufficient for a small to medium educational website.

## Troubleshooting

### Common Issues:

1. **"API key not configured" error**:
   - Make sure you've replaced the placeholder in `config.js`
   - Check for typos in the API key

2. **"API Error: 403" or "API Error: 400"**:
   - Verify your API key is correct
   - Check if the Generative Language API is enabled in your Google Cloud project
   - Ensure you haven't exceeded rate limits

3. **"No questions generated"**:
   - The website will fall back to sample questions if the API fails
   - Check your internet connection
   - Verify the API key restrictions allow your domain

4. **CORS errors**:
   - This shouldn't happen with the Gemini API, but if it does, check your domain restrictions

### Getting Help:

1. **Check the browser console** for detailed error messages
2. **Verify API key status** in Google Cloud Console
3. **Test with a simple API call** using tools like Postman

## Security Best Practices

1. **Never commit API keys to public repositories**
2. **Use environment variables** for production deployments
3. **Set up proper domain restrictions**
4. **Monitor API usage** regularly
5. **Rotate API keys** periodically

## Alternative Setup (Environment Variables)

For more secure deployment, you can use environment variables:

1. **Create a `.env` file** (don't commit this to git):
   ```
   GEMINI_API_KEY=your-actual-api-key-here
   ```

2. **Modify config.js** to read from environment:
   ```javascript
   GEMINI_API_KEY: process.env.GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE',
   ```

3. **Use a build process** that injects the environment variable

## Free Hosting Considerations

When deploying to free hosting services:

1. **Static hosting** (like Netlify, Vercel): Use build-time environment variables
2. **Traditional hosting** (like InfinityFree): Directly edit the config.js file
3. **GitHub Pages**: Be careful not to expose API keys in public repositories

## Support

If you encounter issues:
1. Check the [Google AI documentation](https://ai.google.dev/docs)
2. Review the [Gemini API documentation](https://ai.google.dev/gemini-api/docs)
3. Check the browser console for error messages

---

**Note**: This website is designed for educational purposes. Please use the API responsibly and within the terms of service.

