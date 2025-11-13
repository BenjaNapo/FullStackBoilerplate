from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from ..database import supabase

router = APIRouter(prefix="/assessments", tags=["Assessments"])


class AssessmentCreate(BaseModel):
    title: str
    description: Optional[str] = None
    instructions: Optional[str] = None
    seed_repo_url: str
    start_deadline_hours: int = 72
    completion_deadline_hours: int = 48
    invite_email_template: Optional[str] = None


@router.get("/")
def list_assessments():
    try:
        result = supabase.table("assessments").select("*").execute()
        return result.data or []
    except Exception as e:
        print(f"Error fetching assessments: {e}")
        raise HTTPException(status_code=500, detail="Error fetching assessments")


@router.post("/")
def create_assessment(payload: AssessmentCreate):
    try:
        insert_data = payload.dict()
        # se nel DB hai il campo is_archived:
        insert_data["is_archived"] = False

        result = supabase.table("assessments").insert(insert_data).execute()
        if not result.data:
            raise HTTPException(status_code=500, detail="Failed to create assessment")
        return result.data[0]
    except Exception as e:
        print(f"Error creating assessment: {e}")
        raise HTTPException(status_code=500, detail="Error creating assessment")
