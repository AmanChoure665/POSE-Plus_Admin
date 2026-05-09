from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_current_admin
from app.db.database import get_db
from app.models.models import Product
from app.schemas.schemas import ProductCreate, ProductOut

router = APIRouter(prefix="/products", tags=["products"])

@router.get("", response_model=list[ProductOut])
def list_products(db: Session = Depends(get_db), _=Depends(get_current_admin)):
    return db.query(Product).order_by(Product.created_at.desc()).all()

@router.post("", response_model=ProductOut)
def create_product(payload: ProductCreate, db: Session = Depends(get_db), _=Depends(get_current_admin)):
    item = Product(**payload.model_dump())
    db.add(item); db.commit(); db.refresh(item)
    return item

@router.put("/{product_id}", response_model=ProductOut)
def update_product(product_id: UUID, payload: ProductCreate, db: Session = Depends(get_db), _=Depends(get_current_admin)):
    item = db.get(Product, product_id)
    if not item:
        raise HTTPException(status_code=404, detail="Product not found")
    for k, v in payload.model_dump().items():
        setattr(item, k, v)
    db.commit(); db.refresh(item)
    return item

@router.delete("/{product_id}")
def delete_product(product_id: UUID, db: Session = Depends(get_db), _=Depends(get_current_admin)):
    item = db.get(Product, product_id)
    if not item:
        raise HTTPException(status_code=404, detail="Product not found")
    db.delete(item); db.commit()
    return {"message": "Product deleted"}
