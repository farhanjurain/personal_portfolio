# Personal Portfolio Website

A clean, responsive personal portfolio website to showcase your work, skills, and social media presence.

## Features

- Modern, responsive design
- Sections for About, Projects, Awards & Honors, Skills, and Contact
- Social media integration
- Smooth scrolling navigation
- Interactive elements with JavaScript
- Mobile-friendly layout

## How to Customize

### Basic Information

1. Open `index.html` and replace the following:
   - "Your Name" with your actual name
   - "Developer | Tech Enthusiast | Creator" with your own tagline
   - The placeholder image with your own profile image 
   - The About Me text with your own introduction
   - Project information with details about your own projects
   - Award information with your own achievements and recognitions
   - Skills with your own technical skills and expertise
   - Social media links with your own profile URLs

### Colors and Styling

1. Open `styles.css` to customize the color scheme:
   - Modify the CSS variables at the top of the file:
     ```css
     :root {
         --primary-color: #4a6fdc; /* Change this to your preferred primary color */
         --secondary-color: #2c3e50; /* Change this to your preferred secondary color */
         /* Other variables... */
     }
     ```

### Adding Projects

To add more projects:

1. In `index.html`, copy and paste a project card element:
   ```html
   <div class="project-card">
       <h3>Project Title</h3>
       <p>Project description here.</p>
       <a href="#" class="btn">View Project</a>
   </div>
   ```
2. Update the content with your project details
3. Update the link to point to your project

### Adding Awards

To add more awards or honors:

1. In `index.html`, copy and paste an award item element:
   ```html
   <div class="award-item">
       <div class="award-icon">
           <i class="fas fa-trophy"></i>
       </div>
       <div class="award-content">
           <h3>Award Title</h3>
           <p class="award-issuer">Issuing Organization</p>
           <p class="award-date">Month Year</p>
           <p class="award-description">Brief description of this award.</p>
       </div>
   </div>
   ```
2. Update the content with your award details
3. Change the icon if desired (use any icon from [Font Awesome](https://fontawesome.com/icons))

### Adding Social Media

To add more social media links:

1. In `index.html`, add another link in the social-links section:
   ```html
   <a href="https://platform.com/yourusername" target="_blank">
       <i class="fab fa-platform-icon"></i>
   </a>
   ```
2. Replace `fa-platform-icon` with the appropriate Font Awesome icon class
3. Update the href to your profile URL

## Hosting Your Portfolio

You can host this portfolio for free using:

1. **GitHub Pages**
   - Push this code to a GitHub repository
   - Go to repository settings > Pages
   - Deploy from your main branch

2. **Netlify**
   - Create an account on Netlify
   - Drag and drop your project folder to deploy

3. **Vercel**
   - Create an account on Vercel
   - Connect your GitHub repository
   - Let Vercel deploy automatically

## Further Customization

- Add a custom domain
- Implement a dark/light mode toggle
- Add a contact form
- Include a blog section
- Add project filtering by category 