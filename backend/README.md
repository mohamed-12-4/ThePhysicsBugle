## Steps to run the backend

### 1. create virtual environment
!! Make sure it's on the backend directory 
```
virtualenv venv
source venv/bin/activate
```
the following commands only for unix

### 2. install the requirements
```
pip install -r requirements.txt
```

### 3. run the server
```
python manage.py runserver
``
the server will run at port 8000