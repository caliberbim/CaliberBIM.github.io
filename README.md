# Premium Hello World Landing Page

A sleek, responsive, and visually stunning "Hello World" landing page designed with modern web aesthetics (dark mode, glassmorphism, glowing fluid background, 3D card tilt, and interactive particle sparkles).

---

## Getting Started

To run the website locally and view the animations/interactivity properly, you should host it using a local development server. Below are three simple ways to do this.

### Option 1: Using Python (Recommended - No installation required if Python is installed)

If you have Python installed, you can launch a server instantly from your terminal:

1. Open your terminal (Command Prompt, PowerShell, or Bash).
2. Navigate to this project directory:
   ```bash
   cd c:\Website
   ```
3. Run the HTTP server command:
   * **Python 3.x**:
     ```bash
     python -m http.server 8000
     ```
   * **Python 2.x**:
     ```bash
     python -m SimpleHTTPServer 8000
     ```
4. Verify by opening [http://localhost:8000](http://localhost:8000) in your web browser.

---

### Option 2: Using Node.js & npm (npx)

If you have Node.js installed, you can run a local server without downloading any packages permanently:

1. Open your terminal in this directory.
2. Execute:
   ```bash
   npx serve .
   ```
3. Verify by opening the URL shown in your terminal (usually [http://localhost:3000](http://localhost:3000)).

---

### Option 3: Using VS Code Live Server Extension

If you use VS Code:

1. Install the **Live Server** extension by Ritwick Dey.
2. Open this directory `c:\Website` in VS Code.
3. Click the **"Go Live"** button in the status bar at the bottom right of the editor.
4. It will automatically open the page in your default browser (usually [http://127.0.0.1:5500](http://127.0.0.1:5500)).

---

### Option 4: Direct Browser Open (Offline fallback)

If you do not have Node.js, Python, or a local server setup, you can open the file directly:

1. Open your web browser.
2. Press `Ctrl + O` (Windows) or `Cmd + O` (Mac).
3. Browse and select the [index.html](file:///c:/Website/index.html) file, or double-click the file in your file explorer.
4. Note: Some advanced animations/features might be restricted in some browsers due to strict local file (CORS/file://) security policies, which is why Options 1-3 are preferred.

---

## Verifying Locally

Once your local server is running, check the following points to ensure it works correctly:

1. **Glow Overlay**: Hover your mouse over the card. You should see a subtle white glowing spot that follows your mouse cursor inside the card boundaries.
2. **3D Tilt**: Moving your cursor around the card should cause the card to tilt slightly in 3D perspective towards your cursor.
3. **Interactive Sparks**: Click the **"Trigger Event"** button. It should spawn dynamic indigo/cyan particle sparkles that float outward from where you clicked, change the button text temporarily to "Acknowledged", and update the badge above the title to "System Active".
4. **Responsive Layout**: Resize your browser window. The layout should gracefully adapt for mobile screens.
