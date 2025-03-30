# My Project

This is a personal blog project.

Bikalpa's Wanderlust Website Guide

1. QUICK START
- Homepage: index.html
- Add posts: /posts/[category]-[description].html 
  Example: /posts/travel-paris.html

2. IMAGE RULES
Type	Size	Max KB
Hero	1920x1080	500
Post	800x600	300
Thumbnail	400x400	150

2.1 Optimization Tools
1.	Resize: BIRME (Free online tool)
2.	Compress: TinyPNG
3.	Editor: Photopea (Free Photoshop alternative)

3. TEMPLATE FOR NEW POSTS
File: /posts/travel-paris.html 
<!DOCTYPE html>
<html>
<!-- COPY HEAD FROM EXISTING POST -->
<body>
  <!-- PASTE HEADER FROM index.html -->
  <article class="diary-entry">
    <div class="entry-meta">[Date] | Travel | Paris</div>
    <h1>Your Title</h1>
    <img src="/images/travel-paris.jpg" class="responsive-img">
    [Your content here]
  </article>
  <!-- PASTE FOOTER FROM index.html -->
</body>
</html>

4. EMERGENCY FIXES
- Broken CSS: git checkout -- styles/main.css
- Missing image: Check /images/ folder name
- Mobile issues: Test in Chrome DevTools (F12)

5. MAINTENANCE SCHEDULE
- Weekly: Add new posts
- Monthly: Check links
- Yearly: Update design colors
