
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List, Any
import json
from datetime import datetime
import random

app = FastAPI(title="Financial Friend API", version="1.0.0")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite dev server
        "http://localhost:3000",  # CRA dev server (if you ever use it)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def generate_mock_insights(filename: str) -> Dict[str, Any]:
    """Generate realistic mock insights based on filename"""
    
    # Vary the mock data slightly based on filename
    random.seed(hash(filename) % 1000)
    
    total_amount = random.randint(28000, 45000)
    daily_avg = total_amount // 90
    
    categories = [
        {"label": "Food & Dining", "value": int(total_amount * 0.4), "color": "#FF6B6B"},
        {"label": "Shopping", "value": int(total_amount * 0.25), "color": "#4ECDC4"},
        {"label": "Transport", "value": int(total_amount * 0.15), "color": "#45B7D1"},
        {"label": "Entertainment", "value": int(total_amount * 0.12), "color": "#96CEB4"},
        {"label": "Others", "value": int(total_amount * 0.08), "color": "#FFEAA7"}
    ]
    
    highlights = [
        {
            "id": "top_category",
            "title": f"{categories[0]['label']} Rules Your Wallet",
            "description": f"₹{categories[0]['value']:,} went to restaurants and food delivery — that's {int(categories[0]['value']/total_amount*100)}% of all spending",
            "amount": categories[0]['value'],
            "percentage": int(categories[0]['value']/total_amount*100),
            "icon": "🍕"
        },
        {
            "id": "weekend_pattern", 
            "title": "Weekend Warrior Spending",
            "description": f"You spend 60% more on weekends (₹{daily_avg + 100}/day vs ₹{daily_avg - 50}/day weekdays)",
            "weekend_avg": daily_avg + 100,
            "weekday_avg": daily_avg - 50,
            "icon": "📅"
        },
        {
            "id": "night_spending",
            "title": "Late Night Money Leaks", 
            "description": f"₹{int(total_amount * 0.25):,} spent between 10 PM - 2 AM, mostly on food delivery",
            "amount": int(total_amount * 0.25),
            "time_range": "10 PM - 2 AM",
            "icon": "🌙"
        }
    ]
    
    actions = [
        {
            "id": "cut_night_snacks",
            "title": "Cut Late-Night Food Orders",
            "description": f"Reducing midnight snacks by 50% saves ₹{random.randint(3000, 5000):,}/year",
            "potential_saving_yearly": random.randint(3000, 5000),
            "difficulty": "easy",
            "impact": "medium"
        },
        {
            "id": "subscription_audit", 
            "title": "Cancel Unused Subscriptions",
            "description": f"Review and cancel 2-3 unused services to save ₹{random.randint(5000, 8000):,}/year",
            "potential_saving_yearly": random.randint(5000, 8000),
            "difficulty": "easy",
            "impact": "medium"
        }
    ]
    
    return {
        "summary": {
            "text": f"You spent ₹{total_amount:,} in 90 days — about ₹{daily_avg}/day.",
            "total_amount": total_amount,
            "period_days": 90,
            "daily_average": daily_avg
        },
        "highlights": highlights,
        "charts": [
            {
                "type": "pie",
                "title": "Where Your Money Went",
                "data": categories
            },
            {
                "type": "bar", 
                "title": "Daily Spending Pattern",
                "data": [
                    {"label": "Mon", "value": daily_avg - 20},
                    {"label": "Tue", "value": daily_avg - 10},
                    {"label": "Wed", "value": daily_avg},
                    {"label": "Thu", "value": daily_avg + 10},
                    {"label": "Fri", "value": daily_avg + 80},
                    {"label": "Sat", "value": daily_avg + 120},
                    {"label": "Sun", "value": daily_avg + 100}
                ]
            }
        ],
        "actions": actions,
        "metadata": {
            "processed_at": datetime.now().isoformat(),
            "transaction_count": random.randint(300, 600),
            "date_range": {
                "start": "2024-10-15",
                "end": "2025-01-15"  
            },
            "data_source": "mock_data"
        }
    }

@app.get("/")
async def root():
    return {"message": "Financial Friend API is running!"}

@app.post("/analyze-statement")
async def analyze_statement(file: UploadFile = File(...)):
    """
    Accept uploaded statement file and return friend-style insights
    """
    try:
        # Validate file
        if not file.filename:
            raise HTTPException(status_code=400, detail="No file provided")
        
        # Check file type (basic validation)
        allowed_extensions = ['.csv', '.pdf', '.xlsx', '.xls']
        file_extension = '.' + file.filename.split('.')[-1].lower()
        
        if file_extension not in allowed_extensions:
            raise HTTPException(
                status_code=400, 
                detail=f"Unsupported file type. Please upload: {', '.join(allowed_extensions)}"
            )
        
        # Read file content (for now, we don't actually parse it)
        content = await file.read()
        
        # Generate mock insights
        insights = generate_mock_insights(file.filename)
        
        return {
            "success": True,
            "filename": file.filename,
            "file_size": len(content),
            "insights": insights
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing file: {str(e)}")

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)