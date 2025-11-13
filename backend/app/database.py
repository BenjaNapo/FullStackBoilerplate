import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Carica le variabili dal file .env
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL:
    raise ValueError("Environment variable SUPABASE_URL is missing!")

if not SUPABASE_SERVICE_ROLE_KEY:
    raise ValueError("Environment variable SUPABASE_SERVICE_ROLE_KEY is missing!")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
