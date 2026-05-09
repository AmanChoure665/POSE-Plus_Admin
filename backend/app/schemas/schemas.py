from datetime import datetime
from uuid import UUID
from pydantic import BaseModel, EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UserBase(BaseModel):
    name: str
    email: EmailStr
    role: str = "user"


class UserCreate(UserBase):
    password: str


class UserOut(UserBase):
    id: UUID
    is_active: bool
    is_banned: bool
    created_at: datetime

    class Config:
        from_attributes = True


class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    status: str = "active"


class ProductCreate(ProductBase):
    pass


class ProductOut(ProductBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True


class ReportOut(BaseModel):
    id: UUID
    reported_by: UUID
    reason: str
    content_type: str
    content_id: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
