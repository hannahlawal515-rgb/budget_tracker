document.addEventListener('DOMContentLoaded', () => {
    const budgetForm = document.getElementById('budget-form');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const typeSelect = document.getElementById('type');
    const submitBtn = document.getElementById('submit-btn');
    const editIndexInput = document.getElementById('edit-index');
    const budgetList = document.getElementById('budget-list');
    const totalIncomeSpan = document.getElementById('total-income');
    const totalExpensesSpan = document.getElementById('total-expenses');
    const balanceSpan = document.getElementById('balance');

    let budgetEntries = JSON.parse(localStorage.getItem('budgetEntries')) || [];

    const saveEntries = () => {
        localStorage.setItem('budgetEntries', JSON.stringify(budgetEntries));
    };

    const updateSummary = () => {
        const totalIncome = budgetEntries
            .filter(entry => entry.type === 'income')
            .reduce((sum, entry) => sum + entry.amount, 0);
        const totalExpenses = budgetEntries
            .filter(entry => entry.type === 'expense')
            .reduce((sum, entry) => sum + entry.amount, 0);
        const balance = totalIncome - totalExpenses;

        totalIncomeSpan.textContent = totalIncome.toFixed(2);
        totalExpensesSpan.textContent = totalExpenses.toFixed(2);
        balanceSpan.textContent = balance.toFixed(2);
    };

    const renderEntries = () => {
        budgetList.innerHTML = '';
        budgetEntries.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.description}</td>
                <td>$${entry.amount.toFixed(2)}</td>
                <td>${entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}</td>
                <td>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            budgetList.appendChild(row);
        });
        updateSummary();
    };

    budgetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = descriptionInput.value;
        const amount = parseFloat(amountInput.value);
        const type = typeSelect.value;
        const editIndex = editIndexInput.value;

        if (editIndex === '') {
            // Add new entry
            budgetEntries.push({ description, amount, type });
        } else {
            // Update existing entry
            budgetEntries[parseInt(editIndex)] = { description, amount, type };
            submitBtn.textContent = 'Add Entry';
            editIndexInput.value = '';
        }

        saveEntries();
        renderEntries();
        budgetForm.reset();
    });

    budgetList.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains('edit-btn')) {
            const entry = budgetEntries[index];
            descriptionInput.value = entry.description;
            amountInput.value = entry.amount;
            typeSelect.value = entry.type;
            editIndexInput.value = index;
            submitBtn.textContent = 'Update Entry';
        } else if (e.target.classList.contains('delete-btn')) {
            budgetEntries.splice(index, 1);
            saveEntries();
            renderEntries();
        }
    });

    // Initial render
    renderEntries();
});
