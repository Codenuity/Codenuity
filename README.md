# Codenuity Solutions - Website & Chatbot

A modern, full-stack web application featuring a Next.js frontend with an Express.js backend powered by NLP capabilities.

## 🚀 Project Structure

```
codenuity/
├── client/                 # Next.js 14 frontend
│   ├── src/
│   │   ├── app/           # Next.js app router
│   │   ├── components/    # React components
│   │   ├── apis/          # API integrations
│   │   ├── settings/      # Configuration files
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/
│   └── bot/               # Express.js backend + NLP
│       ├── index.js       # Main server file
│       ├── routes.js      # API routes
│       ├── nlp.js         # NLP manager
│       ├── train/         # Training data
│       └── package.json
└── package.json          # Root package (workspaces)
```

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd codenuity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   **Client (.env.local)**
   ```
   NEXT_PUBLIC_WS_URL=ws://localhost:5000
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_CONTACT_EMAIL=contact@codenuity.com
   ```

   **Server (.env)**
   ```
   PORT=5000
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

## 🏃 Running the Project

### Development Mode

**Option 1: Run both servers together**
```bash
npm run dev
```

**Option 2: Run individually**

Terminal 1 - Frontend:
```bash
cd client
npm run dev
# Visit http://localhost:3000
```

Terminal 2 - Backend:
```bash
cd server/bot
npm run dev
# Server runs on http://localhost:5000
```

### Production Mode

```bash
npm run build
npm run start
```

## 📡 API Endpoints

### WebSocket
- **URL**: `ws://localhost:5000`
- **Purpose**: Real-time chatbot communication
- **Message Format**: Plain text strings

### REST API

#### Health Check
```
GET /health
```

#### Bot Status
```
GET /bot/
Response: { status: "ok", message: "..." }
```

#### Contact Form
```
POST /bot/contact
Content-Type: application/json

Body: {
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "company": "string",
  "subject": "string",
  "message": "string"
}

Response: {
  "status": "success|error",
  "message": "string",
  "submissionId": "string" (on success)
}
```

## 🤖 NLP Capabilities

The chatbot is trained to recognize and respond to:

- **Greetings**: Hello, Hi, Goodbye, Bye, etc.
- **Service Inquiries**: Mobile, Web, AI, Blockchain, Security, Design
- **Pricing**: Cost and quotation questions
- **Timeline**: Project duration and scheduling
- **Company Info**: About Codenuity Solutions
- **Contact**: How to reach us
- **More**: Easily expandable training data

### Adding New Intents

Edit `server/bot/train/greetings.js`:

```javascript
"new_intent": [
  "question variation 1",
  "question variation 2",
  // ... more variations
],
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP, Lottie
- **Real-time**: WebSocket
- **Components**: Radix UI, Lucide Icons

### Backend
- **Framework**: Express.js
- **NLP**: node-nlp
- **Real-time**: WebSocket (ws)
- **CORS**: Enabled for frontend

## 📝 Features Implemented

✅ Environment variable configuration
✅ WebSocket with reconnection logic
✅ Contact form with validation
✅ Error handling & error boundaries
✅ Expanded NLP training data
✅ Error boundary component
✅ Graceful server shutdown
✅ Health check endpoints
✅ CORS configuration
✅ Request validation

## 🔐 Security Features

- Input validation (email, required fields)
- CORS protection
- Error boundary for frontend crashes
- Secure error messages
- Environment variable separation

## 🚀 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy with appropriate runtime
3. Update `CORS_ORIGIN` for production domain

## 📚 Development

### Adding a New Component

1. Create file in `client/src/components/`
2. Export as default or named export
3. Import and use in pages

### Adding a New API Route

1. Create route in `server/bot/routes.js`
2. Add error handling
3. Document in this README

### Testing

Currently no automated tests. Consider adding:
- Jest for unit tests
- React Testing Library for component tests
- Supertest for API testing

## 🐛 Troubleshooting

### WebSocket Connection Failed
- Check if backend is running on port 5000
- Verify `NEXT_PUBLIC_WS_URL` environment variable
- Check CORS settings

### Contact Form Submission Fails
- Verify email validation regex
- Check backend is running
- Review browser console for errors
- Confirm required fields are filled

### NLP Not Recognizing Queries
- Add more training variations in `greetings.js`
- Retrain the model (happens automatically on server start)
- Check browser console for NLP response

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [node-nlp Documentation](https://github.com/axa-group/nlp.js)
- [Express.js Documentation](https://expressjs.com/)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

## 👨‍💻 Contributing

1. Create a feature branch
2. Make changes with clear commit messages
3. Submit pull request with description

## 📄 License

ISC License

## 📞 Support

For issues or questions, contact: contact@codenuity.com

---

**Last Updated**: February 4, 2026
