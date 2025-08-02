# 🔧 Troubleshooting Guide - বাংলা শিক্ষা সহায়ক

This guide helps you solve common issues when using the Bangla Education Helper website.

## 🚨 Quick Fixes

Before diving into specific issues, try these quick fixes:

1. **Refresh the page** (Ctrl+F5 or Cmd+Shift+R)
2. **Clear browser cache** and cookies
3. **Try a different browser** (Chrome recommended)
4. **Check internet connection**
5. **Disable browser extensions** temporarily
6. **Close other tabs** to free up memory

## 📄 PDF Upload Issues

### Issue: PDF File Won't Upload

#### Symptoms:
- File selection dialog doesn't open
- File uploads but shows error
- Upload progress bar doesn't appear
- "File too large" error message

#### Solutions:

**Check File Size**
```
Maximum allowed: 50MB
Current file size: Check file properties
Solution: Compress PDF or split into smaller files
```

**Verify File Format**
- Only PDF files are supported
- File extension must be .pdf
- File must not be corrupted

**Browser Issues**
- Try different browser (Chrome, Firefox, Safari, Edge)
- Enable JavaScript in browser settings
- Disable ad blockers temporarily
- Clear browser cache and cookies

**Network Issues**
- Check internet connection speed
- Try uploading during off-peak hours
- Switch to different network if available
- Use wired connection instead of WiFi

### Issue: Upload Starts But Fails

#### Symptoms:
- Upload begins but stops at certain percentage
- "Network error" or "Upload failed" message
- Browser becomes unresponsive

#### Solutions:

**Network Stability**
```bash
# Test your connection:
1. Try uploading a smaller file first
2. Check if other websites work normally
3. Restart your router/modem
4. Contact ISP if problems persist
```

**Browser Memory**
- Close unnecessary tabs and applications
- Restart browser completely
- Try incognito/private browsing mode
- Increase browser memory if possible

**File Issues**
- Try a different PDF file to test
- Check if original PDF opens normally
- Re-download PDF if it was downloaded from internet
- Scan PDF for corruption using PDF reader

## 🔍 OCR and Text Extraction Issues

### Issue: No Text Extracted from PDF

#### Symptoms:
- Processing completes but shows "No text found"
- Empty chapter list
- "Unable to extract text" error

#### Solutions:

**PDF Content Check**
```
Image-only PDFs: Cannot extract text from scanned images
Text-based PDFs: Should work normally
Mixed PDFs: May have partial extraction
```

**Quality Issues**
- Use higher resolution scans (300 DPI minimum)
- Ensure text is clear and not blurry
- Avoid skewed or rotated pages
- Check for sufficient contrast between text and background

**Language Detection**
- Verify PDF contains Bangla text
- Check if text uses standard Bengali Unicode
- Avoid stylized or decorative fonts
- Ensure text is not embedded as images

**Technical Solutions**
- Wait longer for processing (up to 10 minutes for large files)
- Try processing smaller sections of the PDF
- Use different PDF creation software if you created the PDF
- Convert images to text using separate OCR tool first

### Issue: Partial Text Extraction

#### Symptoms:
- Some pages processed, others skipped
- Missing text from certain sections
- Incomplete chapter detection

#### Solutions:

**Page-by-Page Check**
1. Identify which pages failed
2. Check those pages for image content
3. Verify text quality on failed pages
4. Consider manual text input for missing sections

**Processing Optimization**
- Break large PDFs into smaller chunks
- Process chapters individually
- Ensure stable internet connection throughout
- Close other applications to free up memory

## 📚 Chapter Detection Issues

### Issue: No Chapters Detected

#### Symptoms:
- "No chapters found" message
- Entire document treated as single chapter
- Chapter list is empty

#### Solutions:

**Chapter Heading Patterns**
The system looks for these patterns:
```
অধ্যায় ১, অধ্যায় ২, অধ্যায় ৩...
প্রথম অধ্যায়, দ্বিতীয় অধ্যায়...
পাঠ ১, পাঠ ২, পাঠ ৩...
অধ্যায়-১, অধ্যায়-২...
```

**Manual Workarounds**
- Note chapter boundaries manually
- Use full document content for questions
- Split PDF into separate chapter files
- Edit chapter headings to match expected patterns

**Content Structure**
- Ensure chapter headings are on separate lines
- Check for consistent formatting
- Verify headings use standard Bengali numerals
- Remove extra spaces or special characters

### Issue: Wrong Chapter Boundaries

#### Symptoms:
- Chapters split at wrong locations
- Multiple chapters combined into one
- Chapter titles incorrect

#### Solutions:

**Heading Consistency**
- Check if all chapters use same heading format
- Look for variations in spacing or punctuation
- Verify chapter numbers are sequential
- Ensure no duplicate chapter numbers

**Content Review**
- Manually verify detected chapter boundaries
- Check if content makes sense for each chapter
- Look for missing or extra content
- Consider using individual chapter files

## 🤖 Question Generation Issues

### Issue: No Questions Generated

#### Symptoms:
- "Failed to generate questions" error
- Empty question list after processing
- API error messages

#### Solutions:

**API Configuration**
```javascript
// Check config.js file:
const CONFIG = {
    GEMINI_API_KEY: 'your-key-here', // Must be valid
    // Other settings...
};
```

**Content Requirements**
- Ensure chapter has sufficient content (minimum 100 words)
- Check if content is meaningful and educational
- Verify text is in proper Bangla language
- Remove any corrupted or garbled text

**Network and API Issues**
- Check internet connection
- Verify API key is active and has quota
- Try generating fewer questions (5 instead of 15)
- Wait and try again later (API may be temporarily unavailable)

**Browser Console Check**
1. Press F12 to open developer tools
2. Go to Console tab
3. Look for error messages
4. Note any API-related errors

### Issue: Poor Quality Questions

#### Symptoms:
- Questions don't match chapter content
- Incorrect or nonsensical options
- Repeated questions

#### Solutions:

**Content Quality**
- Ensure source text is clear and well-formatted
- Remove any OCR errors from extracted text
- Check if chapter content is educational material
- Verify text is complete and not truncated

**Question Parameters**
- Try generating fewer questions for better quality
- Use shorter chapters for more focused questions
- Regenerate questions if quality is poor
- Consider manual review and editing

## 🎯 Quiz Interface Issues

### Issue: Quiz Won't Start

#### Symptoms:
- "Start Quiz" button doesn't work
- Blank quiz screen
- JavaScript errors

#### Solutions:

**Browser Compatibility**
- Use modern browser (Chrome, Firefox, Safari, Edge)
- Enable JavaScript in browser settings
- Disable browser extensions that might interfere
- Try incognito/private browsing mode

**Content Loading**
- Wait for all questions to load completely
- Check if questions were generated successfully
- Refresh page and regenerate questions if needed
- Verify internet connection is stable

### Issue: Navigation Problems

#### Symptoms:
- Can't move between questions
- Buttons don't respond
- Keyboard shortcuts not working

#### Solutions:

**Interface Reset**
- Refresh the page and restart quiz
- Clear browser cache and reload
- Try different browser
- Check if JavaScript is enabled

**Input Issues**
- Click directly on answer options
- Use mouse instead of keyboard if shortcuts fail
- Ensure page has focus (click on quiz area)
- Try touch interface on mobile devices

## 📱 Mobile Device Issues

### Issue: Poor Mobile Performance

#### Symptoms:
- Slow loading on mobile
- Interface elements too small
- Touch targets hard to tap

#### Solutions:

**Device Optimization**
- Close other apps to free memory
- Use WiFi instead of mobile data
- Rotate to landscape mode for better view
- Ensure device has sufficient storage space

**Browser Settings**
- Use mobile Chrome or Safari
- Enable "Desktop site" if mobile version has issues
- Clear mobile browser cache
- Update browser to latest version

**Network Considerations**
- Use stable WiFi connection
- Avoid peak usage times
- Consider downloading content for offline use
- Reduce number of questions for faster processing

## 🌐 Browser-Specific Issues

### Google Chrome
**Common Issues:**
- Memory usage with large PDFs
- Extension conflicts

**Solutions:**
- Increase memory allocation
- Disable unnecessary extensions
- Use incognito mode for testing

### Mozilla Firefox
**Common Issues:**
- PDF.js compatibility
- Font rendering

**Solutions:**
- Update to latest version
- Check PDF.js settings
- Enable font downloading

### Safari
**Common Issues:**
- File upload restrictions
- JavaScript limitations

**Solutions:**
- Enable file uploads in settings
- Allow JavaScript for the website
- Clear website data

### Microsoft Edge
**Common Issues:**
- Legacy compatibility mode
- Security restrictions

**Solutions:**
- Use modern Edge (Chromium-based)
- Adjust security settings
- Enable necessary permissions

## 🔤 Font and Display Issues

### Issue: Bangla Text Not Displaying

#### Symptoms:
- Bengali characters appear as boxes (□)
- Question marks instead of text
- Garbled or incorrect characters

#### Solutions:

**Font Loading**
```css
/* Check if these fonts are loading: */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap');
```

**Browser Settings**
- Enable font downloading in browser
- Check if Bengali language support is installed
- Clear font cache and reload
- Try different browser

**System Fonts**
- Install Bengali fonts on your system
- Update operating system
- Check regional settings for Bengali support
- Restart browser after font installation

### Issue: Layout Problems

#### Symptoms:
- Text overlapping
- Buttons misaligned
- Responsive design not working

#### Solutions:

**CSS Issues**
- Clear browser cache completely
- Disable browser zoom (set to 100%)
- Check if CSS files are loading
- Try different screen resolution

**Compatibility Mode**
- Disable compatibility mode in IE/Edge
- Use standard document mode
- Check viewport meta tag
- Ensure modern HTML5 support

## 🔧 Advanced Troubleshooting

### Browser Console Debugging

1. **Open Developer Tools**
   - Chrome/Edge: F12 or Ctrl+Shift+I
   - Firefox: F12 or Ctrl+Shift+K
   - Safari: Cmd+Option+I

2. **Check Console Tab**
   - Look for red error messages
   - Note any failed network requests
   - Check for JavaScript errors

3. **Network Tab**
   - Monitor file uploads
   - Check API calls
   - Verify resource loading

### Common Error Messages

**"Failed to load PDF"**
- File is corrupted or invalid
- Browser doesn't support PDF.js
- Network timeout during upload

**"OCR processing failed"**
- Tesseract.js failed to load
- Insufficient memory
- Network connectivity issues

**"API request failed"**
- Invalid API key
- Network connectivity problems
- API quota exceeded

**"Chapter detection failed"**
- No recognizable chapter patterns
- Text extraction incomplete
- Processing timeout

### Performance Optimization

**For Large Files:**
```
1. Split into smaller PDFs (under 20MB each)
2. Process during off-peak hours
3. Close other applications
4. Use wired internet connection
5. Increase browser memory allocation
```

**For Slow Devices:**
```
1. Reduce number of questions generated
2. Process one chapter at a time
3. Clear browser cache regularly
4. Restart browser between sessions
5. Use desktop instead of mobile when possible
```

## 📞 When to Seek Help

### Contact Support If:
- Issues persist after trying all solutions
- Error messages are unclear or technical
- Website appears to be down
- Data loss or corruption occurs

### Information to Provide:
1. **Browser and version** (e.g., Chrome 91.0.4472.124)
2. **Operating system** (e.g., Windows 10, macOS 11.4)
3. **Device type** (desktop, laptop, tablet, mobile)
4. **Exact error message** (screenshot if possible)
5. **Steps to reproduce** the problem
6. **File details** (size, type, source)

### Self-Help Checklist:
- [ ] Tried different browser
- [ ] Cleared cache and cookies
- [ ] Checked internet connection
- [ ] Tested with different file
- [ ] Reviewed this troubleshooting guide
- [ ] Checked browser console for errors

---

**Remember: Most issues can be resolved with basic troubleshooting. Don't hesitate to try the simple solutions first!** 🛠️

