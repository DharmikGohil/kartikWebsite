# 🚀 Deployment Guide - ChemAssure Global

## **📋 Prerequisites**
- GitHub account
- Vercel account (free)
- Resend.com account (free)

---

## **🔧 Development Setup (Local Testing)**

### **1.1 Start Development Environment**
```bash
# Start both frontend and backend servers
npm run dev:full

# Or run them separately:
# Terminal 1: Backend API server
npm run dev:server

# Terminal 2: Frontend development server  
npm run dev
```

### **1.2 Test Contact Form Locally**
1. Frontend runs on: `http://localhost:3000`
2. Backend API runs on: `http://localhost:3001`
3. Vite proxy forwards `/api/*` to backend
4. Contact form submissions are logged to backend console

### **1.3 What Happens in Development**
- ✅ Form validation works
- ✅ API calls succeed
- ✅ Data logged to console (no real emails)
- ✅ Success/error messages display correctly

---

## **🔑 Step 1: Setup Resend.com**

### **1.1 Create Resend.com Account**
1. Go to [resend.com](https://resend.com)
2. Sign up with your email
3. Verify your email address

### **1.2 Get API Key**
1. Login to Resend.com dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Copy the API key (starts with `re_`)

### **1.3 Verify Domain (Optional but Recommended)**
1. Go to **Domains** section
2. Add your domain (e.g., `chemassure.global`)
3. Follow DNS verification steps
4. This allows you to send emails from `noreply@chemassure.global`

---

## **🌐 Step 2: Deploy to Vercel**

### **2.1 Push to GitHub**
```bash
git add .
git commit -m "Add Resend.com email integration with development server"
git push origin main
```

### **2.2 Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### **2.3 Add Environment Variables**
1. In Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (e.g., `re_abc123...`)
   - **Environment**: Production, Preview, Development

### **2.4 Deploy**
1. Click **Deploy**
2. Wait for build to complete
3. Your site will be live at `https://your-project.vercel.app`

---

## **✅ Step 3: Test Contact Form**

### **3.1 Test Locally (Development)**
```bash
npm run dev:full
# Then visit http://localhost:3000/contact
# Form submissions will be logged to backend console
```

### **3.2 Test on Live Site (Production)**
1. Visit your deployed site
2. Go to **Contact** page
3. Fill out the contact form
4. Submit and check:
   - Success message appears
   - Email received at `chemsassureglobal@gmail.com`

---

## **🔧 Troubleshooting**

### **Common Issues:**

#### **1. "Failed to send email" Error**
- Check if `RESEND_API_KEY` is set in Vercel
- Verify API key is correct
- Check Resend.com dashboard for errors

#### **2. API Route Not Found**
- Ensure `api/contact.ts` is in the root directory
- Check `vercel.json` configuration
- Redeploy after changes

#### **3. CORS Issues**
- Vercel handles this automatically
- If issues persist, check browser console

#### **4. Development Server Issues**
- Make sure both servers are running (`npm run dev:full`)
- Check backend console for errors
- Verify Vite proxy configuration

---

## **📧 Email Configuration**

### **From Address Options:**
1. **Default**: `noreply@resend.dev` (works immediately)
2. **Custom Domain**: `noreply@chemassure.global` (requires domain verification)

### **Email Template:**
- Professional HTML email with ChemAssure Global branding
- Plain text fallback
- Includes all form fields
- Timestamp in Indian timezone

---

## **🚀 What Happens Now:**

✅ **Contact form sends REAL emails**  
✅ **Emails go to `chemsassureglobal@gmail.com`**  
✅ **Professional email templates**  
✅ **Form validation and error handling**  
✅ **Vercel serverless functions**  
✅ **100% free tier (100 emails/day)**  
✅ **Local development server for testing**  

---

## **🎯 Next Steps:**
1. **Test locally** with `npm run dev:full`
2. **Deploy to Vercel** following steps above
3. **Test contact form** with real submission
4. **Monitor email delivery** in Resend.com dashboard
5. **Customize email template** if needed

**Your contact form is now PRODUCTION-READY! 🎉**
