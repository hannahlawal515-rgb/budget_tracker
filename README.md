# Budget Tracker App

A simple web-based budget tracker application built with HTML, CSS, and JavaScript. It allows users to track income and expenses, categorize them as weekly or monthly, and edit or delete entries. Data is stored locally using `localStorage` for persistence across sessions.

## Features
- Add income or expense entries with a description, amount, type (income/expense), date, and period (weekly/monthly).
- Edit or delete existing entries.
- View summaries for:
  - Weekly income, expenses, and balance (for the current week).
  - Monthly income, expenses, and balance (for the current month).
  - Total income, expenses, and balance (all entries).
- Responsive design for use on desktop and mobile devices.
- Data persistence using `localStorage`.

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
- No server or additional software is required, as the app runs entirely in the browser.

## Setup Instructions
1. **Download or Clone the Repository**:
   - If you have the files, ensure you have the following in a single folder (e.g., `budget-tracker`):
     - `index.html`
     - `styles.css`
     - `script.js`
   - Alternatively, download the ZIP file and extract it to a folder.

2. **File Structure**:

budget-tracker/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── README.md
   └── USER_GUIDE.md


3. **Run the App**:
- Open `index.html` in a web browser by double-clicking it or dragging it into the browser.
- The app will load and be ready to use.

## Usage
- **Add an Entry**: Fill in the form with a description, amount, type, date, and period, then click "Add Entry."
- **Edit an Entry**: Click the "Edit" button next to an entry to populate the form, modify the details, and click "Update Entry."
- **Delete an Entry**: Click the "Delete" button to remove an entry.
- **View Summaries**: Check the weekly, monthly, and total summaries at the top of the page.
- For detailed instructions, see [USER_GUIDE.md](USER_GUIDE.md).

## Technical Details
- **HTML**: Provides the structure with a form, summary sections, and a table for entries.
- **CSS**: Styles the app with a clean, responsive design using a flexbox layout and table styling.
- **JavaScript**:
  - Uses `localStorage` to store entries.
  - Calculates weekly summaries based on ISO week numbers and monthly summaries based on the current month.
  - Handles form submissions, editing, and deletion of entries.
- **Dependencies**: None (runs entirely in the browser).

## Development
- To modify the app, edit the `script.js` file for logic, `styles.css` for styling, or `index.html` for structure.
- Test changes by reloading `index.html` in the browser.
- Use the browser's developer tools (F12, then "Console") to debug issues.


## Contributing
- Feel free to fork the project and submit pull requests for improvements.
- Report issues or suggest features by contacting the maintainer.


