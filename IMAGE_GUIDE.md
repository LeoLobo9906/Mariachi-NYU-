# Image Organization Guide

## Required Images for Your Website

Place your images in the `static/images/` folder according to this structure:

```
static/
└── images/
    ├── logo/
    │   └── nyu-logo.png (or .svg)           # NYU logo for navbar
    │
    ├── hero-background.jpg                   # Main hero section background
    ├── mariachi-sign.png                     # Mariachi logo/title graphic
    ├── cta-background.jpg                    # "Wanna join" section background
    │
    ├── performances/
    │   ├── performance-1.jpg
    │   ├── performance-2.jpg
    │   └── performance-3.jpg
    │
    ├── instruments/
    │   ├── armonia.jpg                       # Armonia section image
    │   ├── violin.jpg                        # Violin section image
    │   └── brass-woodwinds.jpg               # Brass/woodwinds image
    │
    ├── members/
    │   ├── member-1.jpg
    │   ├── member-2.jpg
    │   ├── member-3.jpg
    │   └── member-4.jpg
    │
    └── albums/
        ├── album-el-rey.jpg                  # Vicente Fernandez album
        └── album-ya-no-me-entersas.jpg       # Luchas Villa album
```

## Image Specifications

### Navbar Logo (nyu-logo.png)
- **Recommended size:** 200px wide, transparent background
- **Format:** PNG or SVG
- **Background:** Transparent (will show on purple navbar)

### Hero Background (hero-background.jpg)
- **Recommended size:** 1920x1080px or larger
- **Format:** JPG
- **Subject:** Performance photo, stage shot, or group photo
- **Note:** Will have purple overlay applied

### Mariachi Sign (mariachi-sign.png)
- **Recommended size:** 800px wide, transparent background
- **Format:** PNG
- **Subject:** Your mariachi logo or decorative text
- **Background:** Transparent

### CTA Background (cta-background.jpg)
- **Recommended size:** 1920x1080px or larger
- **Format:** JPG
- **Subject:** Performance photo, preferably with good lighting
- **Note:** Will have purple overlay applied

### Performance Photos
- **Recommended size:** 800x600px
- **Format:** JPG
- **Aspect ratio:** 4:3 or 16:9
- **Subject:** Performance moments, venues, group shots

### Instrument Section Photos
- **Recommended size:** 600x400px
- **Format:** JPG
- **Subject:** Close-ups of instruments or sections performing

### Member Photos
- **Recommended size:** 600x800px (portrait)
- **Format:** JPG
- **Aspect ratio:** 3:4 (portrait orientation)
- **Subject:** Individual or small group portraits

### Album Covers
- **Recommended size:** 500x500px (square)
- **Format:** JPG or PNG
- **Subject:** Album artwork from the songs in your setlist

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Aim for under 200KB per image
   - Balance quality vs file size

2. **Use appropriate formats**:
   - **JPG** for photos (smaller file size)
   - **PNG** for graphics with transparency (logo, sign)
   - **SVG** for vector graphics (best for logos if available)

3. **Name files consistently**:
   - Use lowercase
   - Use hyphens instead of spaces
   - Be descriptive: `member-john-smith.jpg` not `img123.jpg`

4. **Backup originals**:
   - Keep high-resolution originals in a separate folder
   - Only upload web-optimized versions to the site

## Quick Start Checklist

- [ ] Add NYU logo to `static/images/logo/`
- [ ] Add hero background to `static/images/`
- [ ] Add mariachi sign graphic to `static/images/`
- [ ] Add CTA background to `static/images/`
- [ ] Add 3+ performance photos to `static/images/performances/`
- [ ] Add 3 instrument photos to `static/images/instruments/`
- [ ] Add 4+ member photos to `static/images/members/`
- [ ] Add 2+ album covers to `static/images/albums/`

## Updating Images in Code

If you need to change image filenames or add more images, update these files:

### For index.html:
- Line ~16: Navbar logo
- Line ~28: Mariachi sign in hero
- Line ~48-50: Performance images (currently using placeholder divs)
- Line ~72-74: Instrument images (currently using placeholder divs)
- Line ~88-90: Member photos (currently using placeholder divs)
- Line ~99-106: Album covers in setlist

### For CSS (style.css):
- Line ~123: Hero background image
- Line ~235: CTA section background image

## Adding More Images

### To add more performance photos:
```html
<div class="performance-card">
    <div class="performance-image">
        <img src="static/images/performances/new-photo.jpg" alt="Description">
    </div>
</div>
```

### To add more members:
```html
<div class="member-card">
    <div class="member-image">
        <img src="static/images/members/new-member.jpg" alt="Member Name">
    </div>
    <div class="member-info">
        <h3>Member Name</h3>
        <p>Instrument</p>
    </div>
</div>
```

### To add more setlist items:
```html
<div class="setlist-item">
    <img src="static/images/albums/new-album.jpg" alt="Song Title - Artist">
    <h3>Song Title</h3>
    <p>Artist Name</p>
</div>
```

## Video Section (Optional)

If you want to add videos to your media page, place them in:
```
static/
└── videos/
    ├── performance-1.mp4
    ├── performance-2.mp4
    └── promotional.mp4
```

**Note:** Videos should be compressed and optimized for web:
- Format: MP4 (H.264 codec)
- Max size: 50MB per video
- Consider using YouTube embeds for larger videos

## Getting Images

### Free Stock Photos (if needed):
- [Unsplash](https://unsplash.com/) - High-quality free photos
- [Pexels](https://www.pexels.com/) - Free stock photos and videos

### Your Own Photos:
- Ask members to contribute performance photos
- Use photos from past performances
- Take new promotional photos
- Reach out to event organizers for professional photos

## Need Help?

If you're stuck or need to adjust image sizes/positions, check:
- `css/style.css` for styling adjustments
- `index.html` for HTML structure
- Browser DevTools (F12) to inspect elements