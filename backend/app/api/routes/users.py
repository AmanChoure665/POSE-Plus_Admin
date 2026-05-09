from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.api.deps import get_current_admin
from app.db.database import get_db
from app.models.models import User
from app.schemas.schemas import UserOut

router = APIRouter(prefix="/users", tags=["users"])


@router.get("", response_model=list[UserOut])
def list_users(search: str | None = None, role: str | None = Query(default=None), db: Session = Depends(get_db), _=Depends(get_current_admin)):
    query = db.query(User)
    if search:
        query = query.filter(User.name.ilike(f"%{search}%"))
    if role:
        query = query.filter(User.role == role)
    return query.order_by(User.created_at.desc()).all()
