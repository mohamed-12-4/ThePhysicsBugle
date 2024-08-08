## Steps to run the backend

### Make sure to register on Neon database and follow the instructions on their website


## the following commands only for unix:

### 1. create virtual environment
!! Make sure it's on the backend directory 
```
virtualenv venv
source venv/bin/activate
```


### 2. install the requirements
```
pip install -r requirements.txt
```

### 3. run the server
```
python manage.py runserver
```
the server will run at port 8000



## API Documentation:
### API Documentation

This documentation describes the REST API endpoints for managing `courses`, `contents`, and `articles` in a Django-based application. The application uses Django REST Framework (DRF) and Firebase Firestore for some of its data management.

### Base URL
All endpoints are prefixed with `/api/`, for example, `/api/courses/`.

---

### Course API

The `CourseViewSet` is responsible for handling HTTP requests related to the `Course` model.

### Endpoints

#### 1. List Courses

- **URL**: `/api/courses/`
- **Method**: `GET`
- **Permission**: `IsAuthenticated`
- **Description**: Retrieves a list of all courses.
- **Response**:
  - **200 OK**: Returns a JSON array of course objects.

#### 2. Retrieve a Course

- **URL**: `/api/courses/{id}/`
- **Method**: `GET`
- **Permission**: `IsAuthenticated`
- **Description**: Retrieves details of a specific course by its `id`.
- **URL Parameters**:
  - `id`: The primary key of the course to retrieve.
- **Response**:
  - **200 OK**: Returns a JSON object representing the course.
  - **404 Not Found**: If the course does not exist.

---

### Content API

The `ContentViewSet` is responsible for handling HTTP requests related to contents stored in Firebase Firestore.

### Endpoints

#### 1. List Contents

- **URL**: `/api/contents/`
- **Method**: `GET`
- **Permission**: `IsAuthenticated`
- **Description**: Retrieves a list of all contents.
- **Response**:
  - **200 OK**: Returns a JSON array of content objects.

#### 2. Create Content

- **URL**: `/api/contents/`
- **Method**: `POST`
- **Permission**: `IsAuthenticated`
- **Description**: Creates a new content entry.
- **Request Body**:
  - JSON object containing the content details.
- **Response**:
  - **201 Created**: Returns the created content object.
  - **400 Bad Request**: If the request body is invalid.

#### 3. Retrieve Content

- **URL**: `/api/contents/{id}/`
- **Method**: `GET`
- **Permission**: `IsAuthenticated`
- **Description**: Retrieves details of a specific content by its `id`.
- **URL Parameters**:
  - `id`: The document ID of the content in Firestore.
- **Response**:
  - **200 OK**: Returns a JSON object representing the content.
  - **404 Not Found**: If the content does not exist.

#### 4. Update Content

- **URL**: `/api/contents/{id}/`
- **Method**: `PUT`
- **Permission**: `IsAuthenticated`
- **Description**: Updates an existing content entry.
- **Request Body**:
  - JSON object containing the updated content details.
- **URL Parameters**:
  - `id`: The document ID of the content in Firestore.
- **Response**:
  - **200 OK**: Returns the updated content object.
  - **400 Bad Request**: If the request body is invalid.

#### 5. Delete Content

- **URL**: `/api/contents/{id}/`
- **Method**: `DELETE`
- **Permission**: `IsAuthenticated`
- **Description**: Deletes a specific content entry by its `id`.
- **URL Parameters**:
  - `id`: The document ID of the content in Firestore.
- **Response**:
  - **204 No Content**: If the deletion is successful.

---

### Article API

The `ArticleViewSet` is responsible for handling HTTP requests related to the `Article` model.

### Endpoints

#### 1. List Articles

- **URL**: `/api/articles/`
- **Method**: `GET`
- **Permission**: `IsAuthenticated`
- **Description**: Retrieves a list of all articles.
- **Response**:
  - **200 OK**: Returns a JSON array of article objects.

#### 2. Retrieve an Article

- **URL**: `/api/articles/{id}/`
- **Method**: `GET`
- **Permission**: `IsAuthenticated`
- **Description**: Retrieves details of a specific article by its `id`.
- **URL Parameters**:
  - `id`: The primary key of the article to retrieve.
- **Response**:
  - **200 OK**: Returns a JSON object representing the article.
  - **404 Not Found**: If the article does not exist.

---

### URL Configuration

The application has the following URL patterns configured:

- **Base URL**: `/api/`
- **Courses API**: Available at `/api/courses/`
- **Contents API**: Available at `/api/contents/`
- **Articles API**: Available at `/api/articles/`
- **Admin Interface**: Available at `/admin/`
- **Authentication**: Available through Djoser URLs at `/api/`

---

This documentation should help developers and API consumers understand the structure and functionality of the available endpoints in this Django application.
