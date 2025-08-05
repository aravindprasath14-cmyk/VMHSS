document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("employeeForm");
  const tableBody = document.getElementById("employeeTableBody");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Input values
    const name = document.getElementById("name").value;
    const account = document.getElementById("account").value;
    const gross = parseFloat(document.getElementById("gross").value);
    const loanPercent = parseFloat(document.getElementById("loanPercent").value);
    const pfPercent = parseFloat(document.getElementById("pfPercent").value);
    const leaveDays = parseFloat(document.getElementById("leaveDays").value);
    const workingDays = parseFloat(document.getElementById("workingDays").value);

    // Validate
    if (isNaN(gross) || isNaN(loanPercent) || isNaN(pfPercent) || isNaN(leaveDays) || isNaN(workingDays) || workingDays === 0) {
      alert("Please enter valid numbers.");
      return;
    }

    // Calculations
    const loan = (gross * loanPercent) / 100;
    const pf = (gross * pfPercent) / 100;
    const leaveDeduction = (gross / workingDays) * leaveDays;
    const totalDeductions = loan + pf + leaveDeduction;
    const netSalary = gross - totalDeductions;

    // Add row
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${account}</td>
      <td>₹${gross.toFixed(2)}</td>
      <td>₹${loan.toFixed(2)}</td>
      <td>₹${pf.toFixed(2)}</td>
      <td>${leaveDays}</td>
      <td>₹${totalDeductions.toFixed(2)}</td>
      <td><strong>₹${netSalary.toFixed(2)}</strong></td>
    `;
    tableBody.appendChild(row);

    form.reset();
  });
});