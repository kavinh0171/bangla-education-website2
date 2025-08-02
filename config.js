// Configuration file for Bangla Education Website
// This file contains settings that need to be configured before deployment

const CONFIG = {
    // Gemini API Configuration
    // IMPORTANT: Replace 'AIzaSyD_8-y2ngudKuoNskiawgIDcBzpp9RaKEw' with your actual Gemini API key
    // Get your free API key from: https://makersuite.google.com/app/apikey
    GEMINI_API_KEY: 'AIzaSyD_8-y2ngudKuoNskiawgIDcBzpp9RaKEw',
    
    // API Settings
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    MAX_RETRIES: 3,
    RETRY_DELAY: 1000, // milliseconds
    
    // OCR Settings
    TESSERACT_LANGUAGE: 'ben', // Bengali language code
    OCR_CONFIDENCE_THRESHOLD: 60, // Minimum confidence percentage
    
    // File Upload Settings
    MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB in bytes
    ALLOWED_FILE_TYPES: ['application/pdf'],
    
    // Quiz Settings
    DEFAULT_QUESTION_COUNT: 10,
    MIN_QUESTION_COUNT: 5,
    MAX_QUESTION_COUNT: 20,
    
    // Chapter Detection Settings
    MIN_CHAPTER_LENGTH: 100, // Minimum characters for a valid chapter
    MAX_CHAPTERS: 50, // Maximum number of chapters to detect
    
    // UI Settings
    DEFAULT_LANGUAGE: 'bn', // 'bn' for Bangla, 'en' for English
    ANIMATION_DURATION: 300, // milliseconds
    
    // Development Settings
    DEBUG_MODE: false, // Set to true for debugging
    ENABLE_CONSOLE_LOGS: true,
    
    // Security Settings (for production)
    // These should be configured in Google Cloud Console for your API key
    SECURITY_SETTINGS: {
        // Restrict API key to specific domains (HTTP referrers)
        allowedReferrers: [
            'https://yourdomain.com/*',
            'https://www.yourdomain.com/*'
            // Add your actual domain here
        ],
        
        // Rate limiting (configure in Google Cloud Console)
        dailyQuotaLimit: 1000, // requests per day
        perMinuteQuotaLimit: 60 // requests per minute
    }
};

// Function to validate configuration
function validateConfig() {
    const errors = [];
    
    if (CONFIG.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        errors.push('Gemini API key not configured. Please set your API key in config.js');
    }
    
    if (CONFIG.MAX_FILE_SIZE > 100 * 1024 * 1024) {
        errors.push('Maximum file size should not exceed 100MB for free hosting');
    }
    
    if (CONFIG.MAX_QUESTION_COUNT > 25) {
        errors.push('Maximum question count should not exceed 25 to avoid API rate limits');
    }
    
    return errors;
}

// Function to get configuration value
function getConfig(key) {
    return CONFIG[key];
}

// Function to check if API key is configured
function isApiKeyConfigured() {
    return CONFIG.GEMINI_API_KEY && CONFIG.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE';
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, validateConfig, getConfig, isApiKeyConfigured };
} else {
    // Browser environment
    window.CONFIG = CONFIG;
    window.validateConfig = validateConfig;
    window.getConfig = getConfig;
    window.isApiKeyConfigured = isApiKeyConfigured;
}

