# Mariachi-NYU
Website for the NYU mariachi club

## Project Overview
This is the official website for NYU Mariachi, a student-led musical ensemble at New York University dedicated to celebrating and sharing the rich traditions of Mexican mariachi music.

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla)
- Optional: Font libraries, image optimization tools

## Project Structure
```
Mariachi-NYU/
├── index.html              # Home page
├── about.html              # About page
├── performances.html       # Performances page
├── media.html             # Media/gallery page
├── members.html           # Members page
├── contact.html           # Contact page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── static/
│   ├── images/            # Image assets
│   │   ├── logo/
│   │   ├── performances/
│   │   ├── members/
│   │   ├── instruments/
│   │   └── albums/
│   └── videos/            # Video assets (optional)
├── README.md
├── SETUP_GUIDE.md
└── IMAGE_GUIDE.md
```

## Setup Instructions

### Prerequisites
- A code editor (VS Code recommended)
- A web browser (Chrome, Firefox, Safari, etc.)
- Git installed on your machine

### Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd Mariachi-NYU
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **View the website locally**
   - Option 1: Right-click on `index.html` and open with your browser
   - Option 2: Use VS Code Live Server extension
     - Install "Live Server" extension in VS Code
     - Right-click `index.html` → "Open with Live Server"

### Development Workflow

1. Create a new branch for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally

3. Commit your changes
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. Push to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request on GitHub

## Pages to Implement

Based on the navigation bar:
- ⏳ Home - Main landing page with hero image
- ⏳ About - Information about the mariachi club
- ⏳ Performances - Upcoming and past performances
- ⏳ Media - Photo/video gallery
- ⏳ Members - Meet the team/instrument sections
- ⏳ Contact - Contact form and social links

## Design Notes

### Color Scheme
- Primary: Purple/Violet (#57068C or #4B0082)
- Secondary: White (#FFFFFF)
- Accent: Gold/Yellow for highlights
- Text: White on purple, dark text on white backgrounds

### Key Features
- Responsive navigation bar with NYU logo
- Hero section with large background image
- "The NYU Mariachi" section with description
- "Our performances" showcase section
- "Wanna join - Fill out form now!" CTA section
- Instrument groups section (Armonia, Violin, Woodwinds/Brass)
- "Get to meet your mariachi" member profiles
- "Fall 2025 setlist" with album covers
- Footer with school info and social links

## Recommended VS Code Extensions
- **Live Server** - Launch a local development server
- **Prettier** - Code formatter
- **Auto Rename Tag** - Auto rename paired HTML tags
- **CSS Peek** - Peek at CSS definitions
- **HTML CSS Support** - CSS class name completion

## Installing Live Server (Recommended)
1. Open VS Code
2. Click Extensions icon (or press Ctrl+Shift+X)
3. Search for "Live Server"
4. Click Install on "Live Server" by Ritwick Dey
5. After installation, right-click any HTML file and select "Open with Live Server"

## Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [Google Fonts](https://fonts.google.com/) - Free web fonts
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Unsplash](https://unsplash.com/) - Free high-quality images

## Contributing
1. Discuss changes in team meetings or via issues
2. Follow the branching strategy
3. Test your changes before pushing
4. Keep commits clear and descriptive
5. Ensure responsive design works on mobile

## Deployment
Once ready, this site can be deployed to:
- **GitHub Pages** (free) - Easiest option
- **Netlify** (free) - Drag and drop deployment
- **Vercel** (free) - Great for modern sites

### Deploying to GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Under "Source", select main branch
4. Click Save
5. Your site will be live at: `https://[username].github.io/Mariachi-NYU/`

## Contact
For questions about this repository, contact: @nyu_mariachi@nyu.edu