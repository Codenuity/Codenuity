# Codenuity Solutions - Getting Started Guide

## 🎯 Quick Start (5 Minutes)

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git

### Installation

```bash
# 1. Navigate to the project
cd codenuity

# 2. Install all dependencies
npm install

# 3. Set up environment variables (already included, just verify)
# Client: client/.env.local (pre-configured)
# Server: server/bot/.env (pre-configured)

# 4. Start development servers
npm run dev
```

### Access the App
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **WebSocket**: ws://localhost:5000

---

## 📂 Project Structure Explained

```
codenuity/
├── client/                          # Next.js Frontend
│   ├── src/
│   │   ├── app/                    # Page routes
│   │   │   ├── page.tsx            # Home page
│   │   │   ├── contact/            # Contact page
│   │   │   ├── layout.tsx          # Root layout
│   │   │   ├── robots.ts           # SEO robots file
│   │   │   └── sitemap.ts          # SEO sitemap
│   │   ├── components/             # React components
│   │   │   ├── common/             # Shared components (ErrorBoundary)
│   │   │   ├── contact/            # Contact form components
│   │   │   ├── navbar/             # Navigation
│   │   │   ├── footer/             # Footer
│   │   │   ├── home/               # Home page sections
│   │   │   └── ui/                 # UI components (animations, etc.)
│   │   ├── apis/                   # API integrations
│   │   │   └── chatbot.ts          # WebSocket client (FIXED)
│   │   ├── settings/               # Configuration
│   │   │   ├── contact.ts
│   │   │   ├── nav-items.ts
│   │   │   ├── home.ts
│   │   │   └── ...
│   │   ├── utils/                  # Utility functions
│   │   └── lib/                    # Custom hooks/lib
│   ├── .env.example                # Environment template
│   ├── .env.local                  # Environment (LOCAL)
│   ├── next.config.mjs             # Next.js config
│   ├── tsconfig.json               # TypeScript config
│   ├── tailwind.config.ts          # Tailwind CSS config
│   └── package.json                # Dependencies
│
├── server/
│   └── bot/                        # Express.js Backend
│       ├── index.js                # Main server (IMPROVED)
│       ├── routes.js               # API routes (ENHANCED)
│       ├── nlp.js                  # NLP manager
│       ├── train/
│       │   ├── greetings.js        # Training data (EXPANDED)
│       │   └── settings.js         # Training settings
│       ├── .env.example            # Environment template
│       ├── .env                    # Environment (LOCAL)
│       └── package.json            # Dependencies
│
├── .gitignore                      # Git ignore rules
├── package.json                    # Root package (monorepo)
├── README.md                       # Full documentation
└── CHANGES.md                      # This changes summary
```

---

## 🔧 Key Features Implemented

### 1️⃣ WebSocket Connection (chatbot.ts)
```typescript
// ✓ Environment variable configuration
// ✓ Auto-reconnection with backoff
// ✓ Promise-based API
// ✓ Error handling

const { isConnected, connect, sendMessage, receiveMessage } = require('./chatbot');

// Connect
await connect((message) => console.log(message));

// Send message
await sendMessage("Hello!");

// Check connection
if (isConnected()) {
  console.log("Connected!");
}
```

### 2️⃣ Contact Form (ContactForm.tsx)
```typescript
// ✓ Form state management
// ✓ Client-side validation
// ✓ Email validation
// ✓ Loading states
// ✓ Error messages
// ✓ Backend integration

<ContactForm />
```

### 3️⃣ NLP Chatbot (greetings.js)
Trained to recognize:
- Greetings
- Service inquiries (mobile, web, AI, blockchain, design, security)
- Pricing questions
- Timeline queries
- Company information
- Contact information

### 4️⃣ Error Boundary
```typescript
// Wraps components to catch errors
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

---

## 📋 API Reference

### WebSocket Connection

**URL**: `ws://localhost:5000`

**Example**:
```javascript
const socket = new WebSocket('ws://localhost:5000');

socket.onopen = () => {
  socket.send("What services do you offer?");
};

socket.onmessage = (event) => {
  console.log(event.data); // Response from chatbot
};
```

### REST Endpoints

#### 1. Health Check
```
GET http://localhost:5000/health
```
Response:
```json
{
  "status": "ok",
  "timestamp": "2026-02-04T...",
  "connectedClients": 5
}
```

#### 2. Bot Status
```
GET http://localhost:5000/bot/
```
Response:
```json
{
  "status": "ok",
  "message": "Codenuity Bot Server is running"
}
```

#### 3. Contact Form Submission
```
POST http://localhost:5000/bot/contact
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "subject": "App Development",
  "message": "I need an iOS app"
}
```

Response (Success):
```json
{
  "status": "success",
  "message": "Thank you for contacting Codenuity Solutions...",
  "submissionId": "SUB-1707046400000"
}
```

---

## 🌍 Environment Variables

### Client (client/.env.local)
```bash
# WebSocket Server URL
NEXT_PUBLIC_WS_URL=ws://localhost:5000

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000

# Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=contact@codenuity.com
```

### Server (server/bot/.env)
```bash
# Port
PORT=5000

# Environment
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Email (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 📱 Development Workflow

### 1. Add a New Feature

```typescript
// 1. Create component
// client/src/components/MyComponent.tsx

export default function MyComponent() {
  return <div>Hello</div>;
}

// 2. Import in page
// client/src/app/page.tsx

import MyComponent from '@/components/MyComponent';

export default function Home() {
  return <MyComponent />;
}
```

### 2. Add a New API Endpoint

```javascript
// server/bot/routes.js

router.post('/my-endpoint', async (req, res) => {
  try {
    const data = req.body;
    
    // Process data
    
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: 'Internal error' });
  }
});
```

### 3. Add NLP Training Data

```javascript
// server/bot/train/greetings.js

export const greetings = {
  questions: {
    "new.intent": [
      "question 1",
      "question 2",
      // ...
    ]
  },
  answers: {
    "new.intent": [
      "answer 1",
      "answer 2",
      // ...
    ]
  }
}
```

---

## 🧪 Testing the Application

### Test Contact Form
1. Open http://localhost:3000/contact
2. Fill in all fields
3. Click Submit
4. Check that you get success/error message

### Test Chatbot
1. Open browser DevTools
2. Run in console:
   ```javascript
   const socket = new WebSocket('ws://localhost:5000');
   socket.onmessage = (e) => console.log(e.data);
   socket.send('Hello!');
   ```
3. Should receive a greeting response

### Test API Endpoints
```bash
# Health check
curl http://localhost:5000/health

# Contact form
curl -X POST http://localhost:5000/bot/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

---

## 🚀 Deployment

### Deploy Frontend (Vercel)
1. Connect GitHub repo to Vercel
2. Add environment variables in Vercel settings
3. Deploy automatically on push

### Deploy Backend (Railway/Heroku)
1. Create account on Railway or Heroku
2. Connect GitHub repo
3. Add environment variables
4. Deploy

### Production Environment Variables

**Client (.env.production)**
```
NEXT_PUBLIC_WS_URL=https://yourdomain.com/ws
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

**Server (.env.production)**
```
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com
```

---

## 🐛 Troubleshooting

### Issue: Cannot connect to WebSocket
**Solution**:
- Check if backend is running (`npm run dev` in server/bot)
- Verify `NEXT_PUBLIC_WS_URL` environment variable
- Check browser network tab for WebSocket connection

### Issue: Contact form not submitting
**Solution**:
- Check email validation (must be valid format)
- Verify all required fields are filled
- Check backend is running
- Look at browser console for errors

### Issue: Chatbot not responding
**Solution**:
- Ensure training data is loaded (check server logs)
- Verify WebSocket connection is open
- Try simple greeting like "Hello"
- Check server console for errors

### Issue: Build fails
**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [node-nlp Documentation](https://github.com/axa-group/nlp.js)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

---

## ✅ Checklist for Running the App

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Client .env.local configured
- [ ] Server .env configured
- [ ] Backend server running on port 5000
- [ ] Frontend running on port 3000
- [ ] Can connect to WebSocket
- [ ] Contact form submits successfully
- [ ] Chatbot responds to queries

---

## 🎓 Key Improvements Made

- ✅ WebSocket with auto-reconnect
- ✅ Fully functional contact form
- ✅ 12 NLP intents (was 2)
- ✅ Error boundaries
- ✅ Environment configuration
- ✅ API endpoints with validation
- ✅ Production-ready error handling
- ✅ Complete documentation

---

## 📞 Support

For issues or questions, please contact: **contact@codenuity.com**

---

**Version**: 1.0.0
**Last Updated**: February 4, 2026
**Status**: ✅ Production Ready
