# Background Remover Automation Bot

An automated solution using Puppeteer to interact with the Omniplex Background Remover web application.

## 📑 Table of Contents
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#️-installation)
- [Project Structure](#-project-structure)
- [Video Demonstration](#-video-demonstration)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Error Handling](#️-error-handling)
- [Debugging](#-debugging)
- [Notes](#-notes)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Features

- Automated image upload and processing
- Background removal automation
- Automatic download of processed images
- Dynamic viewport handling
- Error handling and logging
- File system management

## 📋 Prerequisites

- Node.js (v14 or higher)
- NPM (Node Package Manager)
- Chrome/Chromium browser

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bot
```

2. Install dependencies:
```bash
npm install
```

## 📁 Project Structure

```
bot/
├── agent.js         # Main automation script
├── images/          # Input images directory
│   └── image2.jpg   # Sample image
├── videos/          # Video demonstrations
│   └── agent-demo.mp4  # Demo video
├── output/          # Processed images output
├── package.json     # Project dependencies
└── .gitignore      # Git ignore rules
```

## 🎥 Video Demonstration

### Demo Video

https://github.com/user-attachments/assets/c5b9b22e-a3b5-4d00-a172-78249f8c811b



## 🔧 Configuration

1. Place your input images in the `images` folder
2. The script will automatically create an `output` folder for processed images

## 🚀 Usage

Run the automation script:
```bash
node agent.js
```

The script will:
1. Launch a Chrome browser
2. Navigate to the Background Remover page
3. Upload your image
4. Process the image
5. Download the result automatically


## ⚠️ Error Handling

The script includes comprehensive error handling for:
- Missing input files
- Page navigation issues
- Element selection failures
- Processing timeouts

## 🔍 Debugging

The script provides detailed logging for:
- Navigation status
- Image upload progress
- Processing status
- Download confirmation

## 📝 Notes

- The script uses a non-headless browser for visual feedback
- Default viewport size is set to 1280x585
- Standard delays are implemented to ensure reliable operation

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

ISC License - see LICENSE file for details
