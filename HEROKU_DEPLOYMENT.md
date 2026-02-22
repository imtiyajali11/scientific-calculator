# Heroku Deployment Guide

Deploy your Scientific Calculator to Heroku in 5 minutes and get a live, shareable URL!

## Prerequisites

- GitHub account with the repository pushed
- Heroku account (free tier available)
- Heroku CLI installed

## Installation Steps

### 1. Install Heroku CLI

**macOS:**
```bash
brew tap heroku/brew && brew install heroku
```

**Windows:**
Download from [heroku.com/windows](https://dashboard.heroku.com/apps)

**Linux:**
```bash
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

### 2. Login to Heroku

```bash
heroku login
```

This will open your browser to authenticate. If using SSH, use:
```bash
heroku login -i
```

### 3. Create Heroku App

Navigate to your project directory and run:

```bash
cd "Scientific Calculator"
heroku create your-calculator-name
```

Replace `your-calculator-name` with a unique name (e.g., `ali-scientific-calc-2026`).

**Note**: App names must be lowercase, no spaces, 3-30 characters.

### 4. Configure Environment

Set production environment:
```bash
heroku config:set FLASK_ENV=production
```

### 5. Deploy to Heroku

Push your code to Heroku:

```bash
git push heroku main
```

Watch the deployment logs in real-time.

### 6. Verify Deployment

Check app status:
```bash
heroku logs --tail
```

Open your live app:
```bash
heroku open
```

Or visit: `https://your-calculator-name.herokuapp.com`

## Troubleshooting

### Issue: "No such app"
**Solution:** Make sure you created the app first:
```bash
heroku apps:create your-calculator-name
```

### Issue: "Procfile not found"
**Solution:** Ensure `Procfile` exists in project root (without extension)

### Issue: Application Error
**Solution:** Check logs:
```bash
heroku logs -n 50
```

### Issue: Port already in use
**Solution:** Heroku automatically assigns the PORT environment variable. Our app.py handles this automatically.

## Post-Deployment

### Share Your App

- **Direct URL**: `https://your-calculator-name.herokuapp.com`
- **GitHub Link**: Direct users to repository
- **Social Media**: Share with colleagues and friends

### Monitor Performance

```bash
# View app info
heroku apps:info your-calculator-name

# Check recent logs
heroku logs --tail

# View metrics
heroku metrics
```

### Update Your App

After making changes locally:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main        # Push to GitHub
git push heroku main        # Deploy to Heroku
```

### Scale Your App (Advanced)

By default, your app runs on 1 free dyno (sleep after 30 mins of inactivity).

To keep it running 24/7, upgrade to hobby tier:
```bash
heroku ps:scale web=1:hobby
```

This costs ~$7/month.

## Free Heroku Tier

✅ **Included**:
- 1 free dyno
- Custom domain support
- Free tier sleep (30 min inactivity)
- 512 MB RAM

❌ **Limitations**:
- App sleeps after 30 min without web traffic
- First wake-up takes 5-10 seconds longer
- Limited to 1 dyno

## Upgrade (Optional)

### Option 1: Keep Free + Wake-up Service
Use a free service to keep your app awake:
- [UptimeRobot](https://uptimerobot.com) - Ping your app every 5 min

### Option 2: Upgrade to Paid
```bash
heroku dyno:type -a your-calculator-name
```

### Option 3: Use Alternative
Deploy to:
- [Railway.app](https://railway.app) - $5/month, always on
- [Render.com](https://render.com) - Free tier with sleep
- [Replit](https://replit.com) - Always on, free tier

## Using UptimeRobot (Keep Free App Always On)

1. Go to [uptimerobot.com](https://uptimerobot.com)
2. Sign up (free)
3. Add new monitor:
   - Monitor Type: HTTP
   - URL: `https://your-calculator-name.herokuapp.com`
   - Interval: 5 minutes
4. Save and activate

Your app will now stay awake 24/7!

## Continuous Deployment (Optional)

### Automatic Deploy on GitHub Push

1. Go to [Heroku Dashboard](https://dashboard.heroku.com/)
2. Select your app
3. Go to **Deploy** tab
4. Under "Deployment method", select **GitHub**
5. Connect your GitHub account
6. Select your repository
7. Enable "Automatic deploys" from main branch

Now every time you push to GitHub, Heroku automatically deploys!

## Environment Variables

Set environment variables:

```bash
heroku config:set KEY=value

# Example
heroku config:set FLASK_ENV=production
```

View all variables:
```bash
heroku config
```

## Logs and Monitoring

View latest logs:
```bash
heroku logs --tail -n 100
```

View logs for specific time:
```bash
heroku logs --tail -n 100 --since 1h
```

## Useful Commands

```bash
# List all your apps
heroku apps

# Rename app
heroku apps:rename newname

# Stop app
heroku ps:scale web=0

# Restart app
heroku restart

# Kill and recreate
heroku ps:restart

# View running processes
heroku ps
```

## Security Best Practices

✅ Always use HTTPS (Heroku provides free SSL)
✅ Never commit secrets to Git
✅ Use `.env` file for local development (add to .gitignore)
✅ Rotate tokens regularly
✅ Monitor logs for suspicious activity

## Cost Estimate

- **Free tier**: $0/month (with sleep limitations)
- **Hobby tier**: $7/month (always running)
- **Professional tier**: $50+/month (production)

For a personal project, free tier is perfect!

## Next Steps

1. ✅ Deploy app to Heroku
2. ✅ Test in production environment
3. ✅ Share URL with colleagues
4. ✅ Set up UptimeRobot (optional, keeps app awake)
5. ✅ Enable GitHub automatic deploys (optional)
6. ✅ Add to portfolio/resume

---

**Your Scientific Calculator is now LIVE!** 🚀

Share your app: `https://your-calculator-name.herokuapp.com`
