# 📊 CGPA Calculator

A fully functional, modern web application to calculate your Cumulative Grade Point Average with an intuitive UI and advanced features.

## ✨ Features

- **Dynamic Subject Management**: Add/remove subjects on the fly
- **Real-time Calculation**: Both semester and cumulative GPA update instantly
- **Previous Semester Tracking**: Enter previous CGPA and credits to calculate cumulative GPA
- **Dual GPA Display**: Shows both current semester GPA and cumulative GPA side-by-side
- **Standard Grade Scale**: O, A+, A, B+, B, C, U grades mapping
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Report Generation**: Download your CGPA report as a text file
- **Grade Scale Reference**: Built-in guide for grade-to-points conversion
- **Modern UI**: Beautiful gradient design with smooth animations
- **Production-Ready**: No dependencies, pure HTML/CSS/JavaScript

## 🧮 Grade Scale

| Grade | Points |
|-------|--------|
| O     | 10     |
| A+    | 9      |
| A     | 8      |
| B+    | 7      |
| B     | 6      |
| C     | 5      |
| U     | 0      |

## 📐 CGPA Calculation Formula

### Semester GPA
```
Semester GPA = (Sum of (Grade Points × Credits)) / (Sum of Credits)
```

### Cumulative GPA
```
Cumulative GPA = [Previous CGPA × Previous Credits + (Semester GPA × Current Credits)] / (Previous Credits + Current Credits)
```

**Example:**

**Current Semester:**
```
Subject 1: Data Structures, 4 credits, A+ (9 points)
  Weighted = 4 × 9 = 36

Subject 2: Database Systems, 3 credits, O (10 points)
  Weighted = 3 × 10 = 30

Semester Credits = 4 + 3 = 7
Semester Weighted = 36 + 30 = 66
Semester GPA = 66 / 7 = 9.43
```

**Cumulative (including previous semesters):**
```
Previous CGPA = 8.5, Previous Credits = 16
Current Credits = 7, Semester GPA = 9.43

Cumulative GPA = [8.5 × 16 + 9.43 × 7] / (16 + 7)
               = [136 + 66.01] / 23
               = 202.01 / 23
               = 8.78
```

## 🚀 How to Run Locally

### Option 1: Direct Browser Opening (Easiest)

1. **Navigate to the project folder:**
   ```bash
   cd c:\Users\WELCOME\Desktop\cgpa
   ```

2. **Open `index.html` in your default browser:**
   - **Windows**: Double-click `index.html`
   - **Windows (PowerShell)**: `.\index.html`
   - **Windows (Command Prompt)**: `start index.html`

### Option 2: Using Live Server (VS Code)

1. **Install the Live Server extension** in VS Code (if not already installed)
2. **Right-click on `index.html`** → Select **"Open with Live Server"**
3. Browser will open automatically at `http://localhost:5500`

### Option 3: Using Python (Built-in Web Server)

#### Python 3.x:
```bash
cd c:\Users\WELCOME\Desktop\cgpa
python -m http.server 8000
```
Then open: `http://localhost:8000`

#### Python 2.x (Legacy):
```bash
cd c:\Users\WELCOME\Desktop\cgpa
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

### Option 4: Using Node.js (if installed)

1. **Install http-server globally** (one-time):
   ```bash
   npm install -g http-server
   ```

2. **Start the server:**
   ```bash
   cd c:\Users\WELCOME\Desktop\cgpa
   http-server -p 8000
   ```

Then open: `http://localhost:8000`

### Option 5: Using PowerShell (Windows)

```powershell
cd c:\Users\WELCOME\Desktop\cgpa
python -m http.server 8000
```

## 📝 How to Use

### Step 1: Enter Previous Semester Data (Optional)
- **Previous CGPA**: Enter your cumulative GPA from all previous semesters (leave as 0 if first semester)
- **Previous Total Credits**: Enter total credits completed in previous semesters

### Step 2: Add Current Semester Subjects
1. Click **"+ Add Subject"** to add a new course
2. Enter the subject details:
   - **Subject Name**: Course name (e.g., "Data Structures")
   - **Credits**: Credit hours (e.g., 4)
   - **Grade**: Select grade from dropdown (O, A+, A, B+, B, C, U)

### Step 3: View Results
- **Semester GPA**: Your GPA for the current semester only
- **Cumulative GPA**: Your overall GPA including all previous semesters
- **Detailed Breakdown**: See previous credits and CGPA with current totals

### Additional Actions
- **Remove Subject**: Click "Remove" button on any subject card
- **Download Report**: Click "Download Report" to save your CGPA report as a text file
- **Reset All**: Click "Reset All" to clear all subjects and previous semester data

## ⌨️ Keyboard Shortcuts

- **Ctrl+N** or **Cmd+N**: Add a new subject
- **Ctrl+S** or **Cmd+S**: Download report

## 🎨 UI Components

### Subject Card
- Shows individual subject details
- Real-time validation
- Easy removal button
- Hover effects for better UX

### Results Section
- **Total Credits**: Sum of all course credits
- **Weighted Grade Points**: Total grade points accounting for credits
- **CGPA Display**: Prominent display of your calculated CGPA
- **Grade Information**: Quick reference for grade interpretation

### Grade Scale Reference
- Visual guide with color-coded badges
- Shows grade-to-points mapping
- Helps understand the grading system

## 💾 File Structure

```
cgpa/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🔧 Technical Details

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: Works entirely without external libraries
- **Storage**: Data stored in memory (refreshing the page will clear data)
- **Browser Support**: Works on all modern browsers
  - Chrome/Edge 90+
  - Firefox 88+
  - Safari 14+
  - Mobile browsers

## 📱 Responsive Breakpoints

- **Desktop**: Full layout at 1200px and above
- **Tablet**: Optimized at 768px - 1199px
- **Mobile**: Simplified layout below 768px

## 🎯 CGPA Interpretation

| Range    | Interpretation |
|----------|-----------------|
| 9.0-10.0 | Excellent 🌟    |
| 7.0-8.9  | Good 👍          |
| 5.0-6.9  | Average ✓       |
| 0.0-4.9  | Below Average   |

## ✅ Features Included

- ✓ Dynamic subject addition/removal
- ✓ Real-time semester and cumulative GPA calculation
- ✓ Previous semester data tracking
- ✓ Dual GPA display (semester and cumulative)
- ✓ Grade scale mapping (O, A+, A, B+, B, C, U)
- ✓ Modern, responsive UI
- ✓ Grade information display
- ✓ Report download functionality
- ✓ Keyboard shortcuts
- ✓ Empty state handling
- ✓ Input validation
- ✓ Smooth animations and transitions
- ✓ Mobile-friendly design
- ✓ Production-ready code

## 🐛 Troubleshooting

### Issue: Page appears blank
**Solution**: Ensure all three files (index.html, styles.css, script.js) are in the same folder

### Issue: Server command not found
**Solution**: Ensure Python is installed and added to PATH, or use VS Code's Live Server extension

### Issue: Port already in use
**Solution**: Use a different port number (e.g., `python -m http.server 8001`)

### Issue: Cannot download report
**Solution**: Check browser permissions and ensure pop-ups are allowed for this site

## 📄 License

Free to use and modify for personal or educational purposes.

## 👨‍💻 Developer Notes

The application is built with:
- **Responsive Grid Layout**: CSS Grid for flexible layouts
- **Semantic HTML**: Proper HTML structure for accessibility
- **Modern JavaScript**: ES6+ features for clean code
- **Performance Optimized**: Minimal DOM manipulation
- **Accessibility**: Proper labels and form elements

## 🚀 Deployment

To deploy this app online:
1. Upload all files to your web server
2. Ensure the server supports static files
3. Access via your domain URL
4. No backend or database required

Popular hosting options:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any static file hosting service

---

**Happy calculating! 📊**
