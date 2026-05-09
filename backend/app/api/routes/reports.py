from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_current_admin
from app.db.database import get_db
from app.models.models import Report
from app.schemas.schemas import ReportOut

router = APIRouter(prefix="/reports", tags=["reports"])

@router.get("", response_model=list[ReportOut])
def list_reports(db: Session = Depends(get_db), _=Depends(get_current_admin)):
    return db.query(Report).order_by(Report.created_at.desc()).all()

@router.patch("/{report_id}/resolve")
def resolve_report(report_id: UUID, db: Session = Depends(get_db), _=Depends(get_current_admin)):
    report = db.get(Report, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Report not found")
    report.status = "resolved"
    db.commit()
    return {"message": "Report resolved"}
