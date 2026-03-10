# 🚀 Deployment Guide — Dr Najat Amharar Website

This guide takes you from zero to a live website in about 15 minutes.
Everything is free. You'll need:
- A free **GitHub** account (github.com)
- A free **Netlify** account (netlify.com)

---

## Step 1 — Upload the site to GitHub

1. Go to **github.com** and sign in (or create a free account)
2. Click the **+** button (top-right) → **New repository**
3. Name it something like `dr-najat-website`
4. Leave it **Public** (required for free Netlify hosting)
5. Click **Create repository**
6. On the next screen, click **Upload files**
7. Drag **all the files from this folder** into the upload area
8. Click **Commit changes**

✅ Your code is now on GitHub.

---

## Step 2 — Deploy to Netlify

1. Go to **netlify.com** and sign in (or create a free account — use "Sign in with GitHub")
2. From the Netlify dashboard, click **Add new site** → **Import an existing project**
3. Click **GitHub** and authorise Netlify to access your repositories
4. Select the `dr-najat-website` repository you just created
5. Netlify will detect the settings automatically (publish folder: `src`)
6. Click **Deploy site**

In ~30 seconds your site will be live at a random URL like `amazing-moon-12345.netlify.app`.

---

## Step 3 — Enable the CMS (Netlify Identity)

This lets Dr Najat log into the CMS at `/admin` on her website.

1. In your Netlify dashboard, click your site name
2. Go to **Site configuration** → **Identity** → click **Enable Identity**
3. Under **Registration preferences**, choose **Invite only** (recommended — so only Dr Najat can log in)
4. Scroll down to **Git Gateway** → click **Enable Git Gateway**
5. Go to **Identity** tab → click **Invite users** → enter Dr Najat's email
6. Dr Najat will receive an email invitation — she clicks the link and sets a password

✅ The CMS is now live at: `https://yoursite.netlify.app/admin`

---

## Step 4 — Set a custom domain (optional but recommended)

If Dr Najat has a domain (e.g. `drnajat.com`):

1. In Netlify, go to **Domain management** → **Add a domain**
2. Enter the domain and follow the instructions to update DNS records
3. Netlify provides a free SSL certificate automatically

If she doesn't have a domain yet, **Namecheap.com** is a good cheap option (~£10/year).

---

## Using the CMS

Once set up, Dr Najat (or you) can edit the site by:

1. Going to `https://yoursite.netlify.app/admin`
2. Logging in with the password set during the invite
3. Using the visual editor to change text, images, testimonials, services, prices etc.
4. Clicking **Publish** — the site updates automatically within ~30 seconds

**What can be edited from the CMS:**
- All page text and headings
- Photos (upload new images)
- Services and pricing
- Testimonials
- Contact information
- FAQs

---

## Having Claude make bigger changes

For layout changes, new pages, or design updates, just open a new conversation and say something like:

> "I have the dr-najat-website project. Can you add a new page called 'Blog'?"
> "Can you change the hero headline to [new text] and add a fourth service card?"

Share the relevant HTML file and Claude can edit it directly.

---

## Costs Summary

| Service | Cost |
|---------|------|
| GitHub | Free |
| Netlify hosting | Free (100GB bandwidth/month) |
| Netlify forms (contact form) | Free (100 submissions/month) |
| Decap CMS | Free (open source) |
| Custom domain | ~£10/year (optional) |
| **Total** | **£0–£10/year** |

---

## Files in this project

```
dr-najat-website/
├── netlify.toml          ← Netlify configuration
├── DEPLOY.md             ← This file
└── src/
    ├── index.html        ← Home page
    ├── about.html        ← About page
    ├── services.html     ← Services page
    ├── contact.html      ← Contact page
    ├── css/
    │   └── style.css     ← All styles
    ├── js/
    │   └── main.js       ← Navigation + form JS
    ├── images/           ← Put real photos here
    ├── _data/            ← Content files (edited by CMS)
    │   └── settings.json
    └── admin/
        ├── index.html    ← CMS login page
        └── config.yml    ← CMS configuration
```

---

## Replacing the placeholder photos

The site currently uses stock photos from Unsplash. To replace them:

1. Get Dr Najat's photos
2. Name them clearly (e.g. `dr-najat-portrait.jpg`, `hero-bg.jpg`)
3. Put them in the `src/images/` folder
4. In the HTML files, find the `<img src="https://images.unsplash.com/...">` lines
5. Replace the URL with the local path, e.g. `src="images/dr-najat-portrait.jpg"`

Or — after deploying — use the CMS image uploader to replace photos without touching code.

---

Need help? Just paste this guide and your question into a new Claude conversation.
