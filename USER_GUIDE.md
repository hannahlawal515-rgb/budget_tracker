# Budget Tracker User Guide

The Budget Tracker is a simple web application that helps you track your income and expenses on a weekly, monthly, and total basis. You can add, edit, and delete entries, and view summaries of your financial activity.

## Getting Started
1. **Open the App**:
   - Locate the `index.html` file in the `budget-tracker` folder.
   - Double-click `index.html` to open it in your web browser (e.g., Chrome, Firefox, Safari, or Edge).
   - Alternatively, drag `index.html` into your browser window.

2. **System Requirements**:
   - Any modern web browser.
   - No internet connection is required, as the app runs locally.
   - Ensure JavaScript is enabled in your browser.

## Using the App
### 1. Adding a New Entry
- **Description**: Enter a brief description of the transaction (e.g., "Salary," "Groceries").
- **Amount**: Enter the amount in dollars (e.g., `100.50`). Use numbers only; no currency symbols are needed.
- **Type**: Select "Income" or "Expense" from the dropdown.
- **Date**: Choose the date of the transaction (defaults to today’s date).
- **Period**: Select "Weekly" or "Monthly" to categorize the entry for tracking.
- **Action**: Click "Add Entry" to save the entry.
- The entry will appear in the table below the form, and the summaries will update.

### 2. Editing an Entry
- In the table, find the entry you want to edit.
- Click the "Edit" button next to the entry.
- The form will populate with the entry’s details.
- Modify the description, amount, type, date, or period as needed.
- Click "Update Entry" to save changes.
- The table and summaries will update accordingly.

### 3. Deleting an Entry
- In the table, find the entry you want to delete.
- Click the "Delete" button next to the entry.
- The entry will be removed, and the summaries will update.

### 4. Viewing Summaries
- **Weekly Summary**: Shows income, expenses, and balance for entries marked as "Weekly" in the current week (based on the ISO week number).
- **Monthly Summary**: Shows income, expenses, and balance for entries marked as "Monthly" in the current month.
- **Total Summary**: Shows the overall income, expenses, and balance for all entries.
- Summaries update automatically when you add, edit, or delete entries.

### 5. Data Persistence
- Your entries are saved in your browser’s `localStorage`, so they persist even after closing the browser.
- To clear all data, you can clear your browser’s cache or `localStorage` (advanced users only).

## Tips
- Use the "Weekly" period for recurring expenses like groceries or allowances.
- Use the "Monthly" period for larger expenses like rent or utilities.
- Ensure the date is correct when adding entries, as it affects weekly and monthly summaries.
- If summaries don’t update as expected, ensure the entry’s date matches the current week or month.

## Troubleshooting
- **App Not Loading**: Ensure all files (`index.html`, `styles.css`, `script.js`) are in the same folder and named correctly.
- **Data Not Saving**: Check that JavaScript is enabled in your browser and you’re not in private/incognito mode.
- **Incorrect Summaries**: Verify the date and period of entries. Weekly/monthly summaries only include entries for the current week/month.
- **Browser Issues**: Try opening the app in a different browser or check the console for errors (right-click, select "Inspect," go to "Console").

## Support
If you encounter issues or have questions, refer to the [README.md](README.md) for technical details or contact the maintainer (add contact details if applicable).

## Feedback
We’d love to hear your suggestions for improving the app! Consider adding features like filtering by date range or exporting data to a file.
