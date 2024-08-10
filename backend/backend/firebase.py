# firebase.py
import firebase_admin
from firebase_admin import credentials, firestore
import os
from pathlib import Path
# Path to your Firebase service account key JSON file

if os.getenv("DEBUG", "True") != "True":
    cred = credentials.Certificate('/etc/secrets/serviceAccountKey.json')

else:
    BASE_DIR = Path(__file__).resolve().parent
    cred = credentials.Certificate(BASE_DIR / '../serviceAccountKey.json')


firebase_admin.initialize_app(cred, {
    'storageBucket': 'the-physics-bugle-3375d.appspot.com'
})

db = firestore.client()
