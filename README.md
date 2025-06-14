# 🔗 URL Shortener (MERN Stack)

A simple and secure URL shortener built using **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can register, log in, shorten URLs, view analytics, and manage their personal links.

---

## 🚀 Features

- ✅ User Authentication (Login/Signup)
- 🔐 JWT-based secure session management
- 🔗 Generate short URLs (8-character ID)
- 📊 Click analytics per URL
- 🗃 View all URLs created by the logged-in user
- ❌ Delete your short URLs
- 🚪 Logout option

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Frontend**: EJS templates
- **Styling**: HTML/CSS (inline)
- **Dev Tools**: VS Code, Git, Postman

---

## 📂 Project Structure

url-shortener/
│
├── controllers/
│ ├── url.js
│ └── user.js
├── middleware/
│ └── auth.js
├── model/
│ ├── url.js
│ └── user.js
├── routes/
│ ├── url.js
│ ├── user.js
│ └── staticRouter.js
├── service/
│ └── auth.js
├── views/
│ ├── home.ejs
│ ├── login.ejs
│ └── signup.ejs
├── connect.js
├── index.js
├── .gitignore
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start MongoDB (if not running)
Ensure MongoDB is running locally on default port.

4. Run the Server
bash
Copy
Edit
node index.js
The app runs on: http://localhost:8001

👤 User Flow
Sign up via /signup

Log in via /login

Shorten URLs on the homepage /

View all your created URLs with click count

Delete URLs if needed

Logout to end session

📌 Sample Short URL
bash
Copy
Edit
Original: https://example.com/portfolio
Short: http://localhost:8001/k12d3a9l
📜 License
MIT License

👨‍💻 Author
Arpit Pandey
GitHub | LinkedIn

yaml
Copy
Edit

---

### ✅ What to Do

1. Save this as `README.md` in the root folder of your project.
2. Replace:
   - `your-username` with your GitHub username.
   - Links like LinkedIn with your profile (optional).
3. Commit and push it:

```bash
git add README.md
git commit -m "Added project README"
git push
