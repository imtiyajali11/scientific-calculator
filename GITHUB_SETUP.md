# GitHub Publishing & Deployment Guide

## Step 1: Initialize Git Repository Locally

Open terminal in your project directory and run:

```bash
cd "Scientific Calculator"
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "Initial commit: Scientific Calculator"
```

## Step 2: Create Repository on GitHub

1. Go to [github.com](https://github.com) and log in
2. Click **New** (top-left, under your profile)
3. Repository name: `scientific-calculator`
4. Description: "A modern web-based scientific calculator built with Flask and vanilla JavaScript"
5. Choose **Public** (to make it accessible to everyone)
6. **DO NOT** initialize with README (you already have one)
7. Click **Create repository**

## Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show commands. Run these:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scientific-calculator.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Verify on GitHub

- Go to your repository: `https://github.com/YOUR_USERNAME/scientific-calculator`
- You should see all your files publicly listed
- The README.md will be displayed on the main page

## Step 5: Deploy for Sharing (Optional but Recommended)

### Option A: Deploy to Heroku (Easiest)

1. Create an account at [heroku.com](https://heroku.com)
2. Install Heroku CLI: `brew install heroku` (macOS)
3. Run in your project directory:

```bash
heroku login
heroku create your-calculator-name
git push heroku main
```

3. Your calculator will be live at: `https://your-calculator-name.herokuapp.com`

### Option B: Deploy to PythonAnywhere

1. Sign up at [pythonanywhere.com](https://pythonanywhere.com)
2. Upload files via their web interface
3. Configure Flask app in Web tab
4. Your app gets a free subdomain

### Option C: Deploy to Replit

1. Go to [replit.com](https://replit.com)
2. Create new Python project
3. Upload `app.py`, `index.html`, `static/` folder
4. Click "Run"
5. Share the generated URL with colleagues

### Option D: Local Network Sharing

For immediate sharing with colleagues on same network:

```bash
python app.py
```

Find your IP address:
```bash
ifconfig | grep inet
```

Share: `http://<YOUR_IP>:5001`

## File Structure Check

Before final push, ensure you have:
```
scientific-calculator/
├── .github/
│   └── copilot-instructions.md
├── .gitignore          ✅ (Added)
├── Procfile            ✅ (Added)
├── runtime.txt         ✅ (Added)
├── app.py
├── index.html
├── requirements.txt
├── README.md
└── static/
    ├── style.css
    └── script.js
```

## Sharing the Repository

### On GitHub
- Share the link: `https://github.com/YOUR_USERNAME/scientific-calculator`
- Users can:
  - View the code
  - Clone it: `git clone https://github.com/YOUR_USERNAME/scientific-calculator.git`
  - Run locally following README instructions
  - Fork it to create their own version
  - Star it if they like it ⭐

### With Colleagues
1. **For Testing**: Share deployed URL (Heroku/Replit)
2. **For Development**: Share GitHub repo link
3. **For Local Use**: Share GitHub link + README instructions

## Known Features/Status

✅ **Working**
- All 30+ scientific functions
- Parentheses support
- Calculation history
- Keyboard input
- Responsive design
- Casio-style UI

⚠️ **Mathematical Constraints** (Not bugs)
- `factorial(-5)` → Error (negative invalid)
- `sqrt(-4)` → Error (imaginary numbers)
- `asin(2)` → Error (domain out of range [-1, 1])
- `log(0)` → Error (undefined)

## Recommended GitHub Settings

1. **Add Topics** (helps people find it):
   - calculator
   - scientific
   - flask
   - python
   - javascript

2. **Add License** (optional):
   - MIT License recommended

3. **GitHub Pages** (optional):
   - Not applicable (backend app, not static)

## Future Enhancement Ideas

- [ ] Add complex number support
- [ ] Add graphing capability
- [ ] Add derivatives/integrals
- [ ] Add more languages
- [ ] Dark mode toggle
- [ ] Mobile app version

---

**Your calculator is ready for the world!** 🚀
