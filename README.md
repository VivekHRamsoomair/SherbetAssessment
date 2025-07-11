# SherbetAssessment
# 🌐 SherbLink

SherbLink is a simple full-stack web application similar to Linktree or Beacons. Users can manage a personal list of links using a Python FastAPI backend and a React frontend.

---

## 📁 Project Structure

project-root/
│
├── backend/ # FastAPI backend
│ └── main.py
│
├── frontend/ # React frontend
│ └── src/
│ └── App.js
│
└── README.md


---

## 🚀 Requirements

Make sure you have the following installed:

- **Python 3.8+**
- **Node.js** and **npm**

---

## 🔧 Setup Instructions

### 🔹 1. Clone the repository

```bash
git clone https://github.com/your-username/sherblink.git
cd sherblink
Or simply unzip the downloaded project folder and open it in VS Code.

🔹 2. Set Up the Backend (FastAPI)

cd backend
python -m venv venv         # Create virtual environment
venv\Scripts\activate       # Activate on Windows
# Or use: source venv/bin/activate (Mac/Linux)

pip install -r requirements.txt  # OR manually install:
pip install fastapi uvicorn pydantic

Start the backend server:

uvicorn main:app --reload
Backend will be running on: http://localhost:8000

🔹 3. Set Up the Frontend (React)
Open a new terminal tab/window:

cd frontend
npm install
npm start
React app will run on: http://localhost:3000

✅ Features
View a list of links as stylish buttons

Add new links with title and URL

Delete existing links

Live updates without page refresh

Responsive styling with a peach gradient background

🛠 API Endpoints
GET /api/links
Returns the list of all saved links.

POST /api/links
Saves a new link. Payload:

{
  "id": "unique-id",
  "title": "My Site",
  "url": "https://example.com"
}
DELETE /api/links/{id}
Deletes a link by ID.

🖌 Styling
Buttons and inputs styled like Google search and tiles

Peach background gradient applied to the app

Includes delete buttons for each link

🔍 Troubleshooting
If you get ExecutionPolicy errors on Windows, run:

powershell
Copy
Edit
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
Make sure your backend (http://localhost:8000) is running before you use the frontend.


Built by Vivek Hunsraj Ramsoomair.
