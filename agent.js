const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Helper function for delays
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  let browser;
  try {
    // Verify image exists before starting
    const imagePath = path.join(__dirname, 'images', 'image2.jpg');
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Image not found at: ${imagePath}`);
    }

    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, 'output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    // Launch browser with improved settings
    browser = await puppeteer.launch({ 
      headless: false,
      args: [
        '--start-maximized',
        '--window-size=1920,1080',
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    
    const page = await browser.newPage();

    // Set viewport with fixed dimensions first
    await page.setViewport({
      width: 1280,
      height: 585,
      deviceScaleFactor: 1
    });

    // Navigation with timeout
    console.log('🚀 Navigating to Background Remover...');
    await page.goto('https://omniplex-self.vercel.app/Bgremover', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for page to be fully loaded
    await delay(2000);

    // Upload image
    console.log('📁 Uploading image...');
    const fileInput = await page.$('input[type="file"]');
    if (!fileInput) {
      throw new Error('File input not found');
    }
    await fileInput.uploadFile(imagePath);
    await delay(3000);

    // Click Remove Background button
    console.log('🎨 Processing image...');
    const removeButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(btn => btn.textContent.includes('Remove Background'));
    });

    if (removeButton) {
      await removeButton.click();
      console.log('✅ Remove Background button clicked');
    } else {
      throw new Error('Remove Background button not found');
    }

    // Wait for result
    await delay(5000);
    console.log('⏳ Waiting for result...');

    // Check for result image
    const resultImage = await page.$('img[alt="result"]');
    if (resultImage) {
      console.log('✅ Image processed successfully');
    }

    // Wait for download button
    const downloadButton = await page.$('a[download]');
    if (downloadButton) {
      await downloadButton.click();
      console.log('💾 Download started');
      await delay(3000);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    if (browser) {
      await browser.close();
      console.log('✨ Process completed');
    }
  }
})();