# বাংলা শিক্ষা সহায়ক - Bangla Education Helper

A free educational website that helps students create interactive quizzes from Bangla textbooks using AI technology.

## 🌟 Features

- **📄 PDF Upload**: Upload Bangla textbooks in PDF format
- **🔍 OCR Text Extraction**: Extract Bangla text using Tesseract.js
- **📚 Chapter Detection**: Automatically detect and separate chapters
- **🤖 AI Quiz Generation**: Generate MCQ questions using Google Gemini API
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices
- **🎯 Interactive Quizzes**: Take chapter-wise tests with instant scoring
- **🌐 Bilingual Support**: Interface available in Bangla and English

## 🚀 Quick Start

1. **Download the website files**
2. **Configure the Gemini API key** (see [API Setup Guide](API_SETUP_GUIDE.md))
3. **Upload to a free hosting provider** (see [Hosting Guide](HOSTING_GUIDE.md))
4. **Start using the website!**

## 📋 Requirements

### For Users
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for AI features
- PDF files with Bangla text

### For Hosting
- Free web hosting that supports HTML/CSS/JavaScript
- No server-side requirements (purely client-side)
- HTTPS support recommended for API calls

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **PDF Processing**: PDF.js
- **OCR**: Tesseract.js with Bangla language support
- **AI**: Google Gemini API for question generation
- **Fonts**: Noto Sans Bengali for proper Bangla rendering

## 📁 File Structure

```
bangla-education-website/
├── index.html              # Main application page
├── css/
│   └── styles.css          # All styling and responsive design
├── js/
│   ├── app.js              # Main application controller
│   ├── pdf-processor.js    # PDF handling and processing
│   ├── ocr-processor.js    # OCR text extraction
│   ├── chapter-detector.js # Chapter detection algorithm
│   ├── quiz-generator.js   # MCQ generation with Gemini API
│   ├── quiz-interface.js   # Quiz navigation and scoring
│   └── language.js         # Bilingual support
├── config.js               # Configuration file for API keys
├── docs/                   # Documentation files
├── tests/                  # Test files and examples
└── README.md              # This file
```

## 🎯 How It Works

1. **Upload**: Students upload their Bangla textbook PDF
2. **Process**: The system extracts text using OCR technology
3. **Detect**: Chapters are automatically identified using Bangla patterns
4. **Generate**: AI creates relevant MCQ questions for each chapter
5. **Quiz**: Students take interactive tests and get instant results

## 🔧 Configuration

### API Setup
1. Get a free Google Gemini API key
2. Edit `config.js` and add your API key
3. Configure API restrictions for security

See [API_SETUP_GUIDE.md](API_SETUP_GUIDE.md) for detailed instructions.

### Customization
- Modify `css/styles.css` for visual customization
- Edit `js/language.js` to add more languages
- Adjust `js/chapter-detector.js` for different chapter patterns

## 🌐 Hosting Options

### Recommended Free Hosting Providers
1. **GitHub Pages** - Best for open source projects
2. **Netlify** - Easy deployment with drag-and-drop
3. **Vercel** - Great performance and free tier
4. **Firebase Hosting** - Google's hosting platform

See [HOSTING_GUIDE.md](HOSTING_GUIDE.md) for step-by-step deployment instructions.

## 📖 User Guide

### For Students
1. Visit the website
2. Click "Upload PDF File" and select your textbook
3. Wait for processing (may take a few minutes)
4. Select a chapter from the detected list
5. Choose number of questions and click "Generate Questions"
6. Take the quiz and review your results

### For Teachers
- Use the website to create practice tests for students
- Generate questions from any Bangla textbook
- Review student performance and identify learning gaps

## 🔒 Privacy & Security

- **No Data Storage**: All processing happens in the browser
- **API Key Security**: Use HTTP referrer restrictions
- **Privacy First**: No personal data is collected or stored
- **Offline Capable**: Core features work without internet

## 🐛 Troubleshooting

### Common Issues

**PDF not uploading**
- Check file size (max 50MB)
- Ensure file is a valid PDF
- Try a different browser

**OCR not working**
- Ensure PDF contains text (not just images)
- Check internet connection for Tesseract.js download
- Try with a clearer PDF scan

**No questions generated**
- Verify Gemini API key is configured
- Check browser console for errors
- Ensure chapter content is sufficient

**Bangla text not displaying**
- Check if Noto Sans Bengali font is loading
- Verify browser supports Bengali text
- Clear browser cache and reload

## 🤝 Contributing

This is an open-source educational project. Contributions are welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Areas for Improvement
- Additional language support
- More question types (fill-in-the-blank, true/false)
- Better chapter detection algorithms
- Enhanced accessibility features
- Performance optimizations

## 📄 License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- **Tesseract.js** - OCR functionality
- **PDF.js** - PDF processing
- **Google Gemini** - AI question generation
- **Noto Fonts** - Bengali typography
- **Bangladesh Education Community** - Inspiration and feedback

## 📞 Support

For support and questions:
- Check the [User Manual](USER_MANUAL.md)
- Review [Troubleshooting Guide](TROUBLESHOOTING.md)
- Open an issue on GitHub

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- PDF upload and OCR processing
- Chapter detection for Bangla text
- MCQ generation with Gemini API
- Interactive quiz interface
- Responsive design
- Bilingual support

---

**Made with ❤️ for Bangla education**

