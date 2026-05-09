from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "P.O.S.E. Plus Admin API"
    secret_key: str = "super-secret-key-change-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 120
    database_url: str = "postgresql://postgres:postgres@db:5432/pose_plus"

    class Config:
        env_file = ".env"


settings = Settings()
