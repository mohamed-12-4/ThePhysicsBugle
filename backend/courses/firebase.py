# firebase.py
import firebase_admin
from firebase_admin import credentials, firestore

# Path to your Firebase service account key JSON file
cred = credentials.Certificate('/home/mohamed/Code/ThePhysicsBugle/backend/serviceAccountKey.json')
firebase_admin.initialize_app(cred)

db = firestore.client()