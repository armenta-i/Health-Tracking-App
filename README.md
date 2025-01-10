# **Health Tracker App**

A full-stack web application that provides workout and nutrition plans using AI. This README provides setup instructions for both the **frontend** and **backend** to help collaborators get started.

---

## **Prerequisites**
Before you begin, ensure you have the following installed on your machine:
- **Git**: [Download and install Git](https://git-scm.com/downloads)
- **Node.js**: [Download and install Node.js](https://nodejs.org/) (for frontend dependencies)
- **Python**: [Download and install Python](https://www.python.org/) (version 3.9 or later for backend dependencies)
- **pip**: Python's package manager (comes with Python installation)

---

## **Frontend Setup**
### 1. Navigate to the Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
Run the following command to install all dependencies listed in package.json:
```bash
yarn install
```

### 3. Start the Development Server
Run the following command to start the React app:
```bash
yarn start
```
The app will run at: http://localhost:3000

### 4. Build the Application (Optional)
If you want to build the application for production:
yarn build

## **Backend Setup**

### 1. Navigate to the Backend Directory
```bash
cd backend
```

### **2. Create a Virtual Environment**
For Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

For macOS/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

### **3. Install Dependencies**
Run the following command to install all Python dependencies listed in requirements.txt:
```bash
pip install -r requirements.txt
```

### **4. Run the Backend Server**
For Django:
```bash
python manage.py runserver
```
The backend will run at: http://127.0.0.1:8000
</br>
# **Notes for Collaborators Notes for Collaborators**

### **1. Ensure you activate the virtual environment before running backend commands.**

### 2. Keep the requirements.txt and package.json files updated when adding new dependencies:

- **For Python**: After installin a new package, run:

```bash
pip freeze > requirements.txt
```

### 3. If you encounter issues with dependencies, try:
- Deleting node_modules/ (for frontend) or venv/ (for backend)
- Reinstalling dependencies using: 
```bash
yarn install # For frontend
pip install -r requirements.txt # For backend
```
