from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session
from app.api.deps import get_current_admin
from app.db.database import get_db
from app.models.models import User, Report, Product

router = APIRouter(prefix="/dashboard", tags=["dashboard"])

@router.get("/stats")
def get_stats(db: Session = Depends(get_db), _=Depends(get_current_admin)):
    return {
        "total_users": db.query(func.count(User.id)).scalar(),
        "active_users": db.query(func.count(User.id)).filter(User.is_active == True).scalar(),
        "banned_users": db.query(func.count(User.id)).filter(User.is_banned == True).scalar(),
        "trainers": db.query(func.count(User.id)).filter(User.role == "trainer").scalar(),
        "pending_reports": db.query(func.count(Report.id)).filter(Report.status == "pending").scalar(),
        "products": db.query(func.count(Product.id)).scalar(),
    }
