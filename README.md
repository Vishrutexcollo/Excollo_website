# SEO Feedback Tool

A standalone web application that provides comprehensive SEO analysis and feedback for websites. Built with Next.js and Material-UI.

## Features

- **Website Analysis**: Submit any website URL for SEO analysis
- **Email Reports**: Receive detailed PDF reports via email
- **Real-time Status**: Track analysis progress with status dialogs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with dark theme

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: Material-UI (MUI)
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material-UI Icons
- **Fonts**: Inter & Outfit (Google Fonts)

## Prerequisites

- Node.js >= 20.9.0
- npm >= 9.0.0

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Excollo-Website-Next.js
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## How It Works

1. **Enter Website URL**: Input the URL of the website you want to analyze
2. **Provide Email**: Enter your email address to receive the report
3. **Submit**: Click "Send me the report" button
4. **Wait**: The analysis runs in the background (approximately 10 minutes)
5. **Receive Report**: Check your email for the PDF report with SEO insights

## Backend Integration

This tool connects to an n8n webhook endpoint that:
- Analyzes the submitted website
- Generates a comprehensive SEO report
- Sends the report as a PDF to the provided email address

**Webhook URL**: `https://n8n-excollo.azurewebsites.net/webhook/528aa770-e351-4ae0-9626-38b398e40487`

## Project Structure

```
├── app/
│   ├── layout.jsx              # Root layout with fonts and providers
│   ├── page.jsx                # Homepage (redirects to SEO tool)
│   ├── globals.css             # Global styles
│   └── sampletools/
│       └── seofeedback/
│           └── page.jsx        # SEO Feedback tool component
├── components/
│   ├── SimpleHeader.jsx        # Header component
│   ├── SimpleFooter.jsx        # Footer component
│   └── ClientProviders.jsx     # Client-side providers
├── public/                     # Static assets
└── package.json               # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

## Environment Variables

No environment variables are required for basic functionality. The webhook URL is hardcoded in the component.

If you want to make it configurable:

```env
NEXT_PUBLIC_SEO_FEEDBACK_WEBHOOK_URL=your-webhook-url
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.
