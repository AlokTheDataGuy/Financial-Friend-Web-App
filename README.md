# Financial Friend Web App 💰

A friendly financial analysis tool that turns your boring bank statements into engaging insights. Upload your statement, get personalized spending analysis with charts, highlights, and actionable recommendations.

## Features ✨

- **Smart File Upload**: Supports CSV, PDF, Excel files (.xlsx, .xls)
- **Friendly Insights**: Get conversational analysis of your spending patterns
- **Visual Charts**: Interactive pie charts and bar charts to visualize your data
- **Spending Highlights**: Discover your biggest spending categories and patterns
- **Actionable Tips**: Personalized recommendations to save money
- **Weekend vs Weekday Analysis**: See how your spending differs across the week
- **Time-based Patterns**: Identify late-night spending habits

## Tech Stack 🛠️

### Backend
- **FastAPI**: Modern, fast web framework for Python
- **Python 3.8+**: Core language
- **Uvicorn**: ASGI server for production
- **CORS Middleware**: Cross-origin request handling

### Frontend  
- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with modern features
- **Chart Components**: Custom pie and bar chart implementations

## Project Structure 📁

```
Financial Friend Web App/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FileUpload.jsx      # File upload component
│   │   │   ├── Report.jsx          # Main report display
│   │   │   ├── SimpleBarChart.jsx  # Bar chart component
│   │   │   └── SimplePieChart.jsx  # Pie chart component
│   │   ├── pages/
│   │   │   └── Upload.jsx          # Upload page
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx               # React entry point
│   ├── package.json         # Node.js dependencies
│   └── vite.config.js       # Vite configuration
├── shared/
│   └── insight_contract.json # API response structure
└── README.md
```

## Getting Started 🚀

### Prerequisites
- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment** (recommended)
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the server**
   ```bash
   python main.py
   ```
   
   The API will be running at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   The frontend will be running at `http://localhost:5173`

## API Documentation 📚

### Endpoints

#### `POST /analyze-statement`
Upload a financial statement for analysis.

**Request:**
- File upload (multipart/form-data)
- Supported formats: CSV, PDF, XLSX, XLS

**Response:**
```json
{
  "success": true,
  "filename": "statement.csv",
  "file_size": 1024,
  "insights": {
    "summary": {
      "text": "You spent ₹35,000 in 90 days — about ₹389/day.",
      "total_amount": 35000,
      "period_days": 90,
      "daily_average": 389
    },
    "highlights": [...],
    "charts": [...],
    "actions": [...]
  }
}
```

#### `GET /health`
Health check endpoint.

#### `GET /`
API status endpoint.

## Sample Insights 📊

The app provides several types of insights:

### Spending Highlights
- **Top Category Analysis**: "Food & Dining Rules Your Wallet"
- **Weekend vs Weekday Patterns**: Compare spending behavior
- **Time-based Analysis**: Late night spending patterns

### Visual Charts
- **Pie Chart**: Category-wise spending breakdown
- **Bar Chart**: Daily spending patterns across the week

### Actionable Recommendations
- Cut late-night food orders
- Cancel unused subscriptions
- Weekend spending optimization

## Development Notes 🔧

### Current Implementation
- **Mock Data**: The backend currently generates realistic mock insights based on filename
- **File Processing**: Files are uploaded and validated, but actual parsing is not implemented yet
- **CORS**: Configured for local development (ports 3000 and 5173)

### Future Enhancements
- [ ] Real statement parsing (CSV, PDF, Excel)
- [ ] Machine learning for spending pattern analysis
- [ ] User accounts and data persistence
- [ ] Budget setting and tracking
- [ ] Export reports functionality
- [ ] Mobile app version

## Environment Configuration 🌍

### Backend
- Default port: `8000`
- CORS origins: `localhost:5173`, `localhost:3000`

### Frontend  
- Development port: `5173` (Vite default)
- API base URL: `http://localhost:8000`

## Troubleshooting 🔍

### Common Issues

1. **CORS Errors**
   - Ensure backend is running on port 8000
   - Check CORS configuration in `main.py`

2. **File Upload Fails**
   - Verify file format is supported (CSV, PDF, XLSX, XLS)
   - Check file size limits

3. **Charts Not Displaying**
   - Ensure all frontend dependencies are installed
   - Check browser console for JavaScript errors

### Debug Mode
Start backend with debug logging:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload --log-level debug
```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is open source and available under the [MIT License](LICENSE).

## Support 💬

If you encounter any issues or have questions, please feel free to open an issue on GitHub or reach out to the development team.

---

*Made with ❤️ for better financial awareness*