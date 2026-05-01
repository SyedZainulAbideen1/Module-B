function run(option) {

    // -------- RESULT --------
    if (option == 1) {
        let m1 = Number(prompt("Enter subject 1 marks:"));
        let m2 = Number(prompt("Enter subject 2 marks:"));

        if (isNaN(m1) || isNaN(m2) || m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100) {
            alert("Please enter valid marks (0–100)");
            return;
        }

        let average = (m1 + m2) / 2;

        if (m1 < 40 || m2 < 40) {
            alert("Result: Fail");
        } else if (average >= 75) {
            alert("Result: Excellent");
        } else if (average >= 60) {
            alert("Result: Good");
        } else if (average >= 50) {
            alert("Result: Pass");
        } else {
            alert("Result: Fail");
        }

        if (m1 > 85 && m2 > 85) {
            alert("Bonus: Outstanding Performance");
        }
    }

    // -------- LOGIN --------
    else if (option == 2) {
        const savedUser = "admin";
        const savedPass = "1234";
        let attempts = 0;

        while (attempts < 3) {
            let username = prompt("Enter username:");

            if (username !== savedUser) {
                alert("Username not found");
                return;
            }

            let password = prompt("Enter password:");

            if (password === savedPass) {
                if (attempts === 0) {
                    alert("Login Successful – Welcome Back");
                } else {
                    alert("Login Successful");
                }
                return;
            } else {
                attempts++;
                alert("Incorrect password");
            }
        }

        alert("Too many attempts");
    }

    // -------- BILLING --------
    else if (option == 3) {
        let product = prompt("Enter product name (laptop/phone/mouse):");
        let price = 0;

        if (product === "laptop") price = 6000;
        else if (product === "phone") price = 3000;
        else if (product === "mouse") price = 500;

        if (price === 0) {
            alert("Sorry, product not available");
            return;
        }

        let total = price;

        if (price > 4000) {
            alert("Note: Premium Product Selected");
        }

        if (total > 5000) total *= 0.85;
        else if (total > 3000) total *= 0.90;

        alert("Final Bill: " + total);
    }

    // -------- WORK HOURS --------
    else if (option == 4) {
        let hours = Number(prompt("Enter working hours:"));

        if (isNaN(hours) || hours < 0 || hours > 24) {
            alert("Invalid hours");
            return;
        }

        if (hours >= 8) {
            alert("Status: Full Day");
        } else if (hours >= 4) {
            alert("Status: Half Day");
        } else {
            alert("Status: Absent");
        }

        if (hours > 10) {
            alert("Overtime Detected");
        }
    }

    // -------- PASSWORD --------
    else if (option == 5) {
        let password = prompt("Create a password:");

        if (password.length < 6) {
            alert("Weak Password");
            return;
        }

        let hasLetters = /[a-zA-Z]/.test(password);
        let hasNumbers = /[0-9]/.test(password);

        if (hasLetters && hasNumbers) {
            alert("Strong Password");
        } else {
            alert("Medium Password");
        }

        if (password.includes("123")) {
            alert("Warning: Avoid common patterns");
        }
    }

    // -------- BANK --------
    else if (option == 6) {
        let balance = 50000;
        let deposit = Number(prompt("Enter deposit amount:"));

        if (isNaN(deposit) || deposit <= 0) {
            alert("Invalid amount");
            return;
        }

        balance += deposit;

        if (deposit > 20000) {
            alert("Large Deposit Detected");
        }

        if (balance > 100000) {
            alert("High Account Balance");
        }

        alert("Updated Balance: " + balance);
    }

    // -------- ATTENDANCE --------
    else if (option == 7) {
        let days = Number(prompt("Enter days present (out of 30):"));

        if (isNaN(days) || days < 0 || days > 30) {
            alert("Invalid input");
            return;
        }

        let percentage = (days / 30) * 100;

        if (percentage >= 75) {
            alert("Status: Eligible");
        } else if (percentage >= 50) {
            alert("Status: Warning");
        } else {
            alert("Status: Not Eligible");
        }

        if (percentage === 100) {
            alert("Perfect Attendance");
        }
    }

    // -------- MOBILE --------
    else if (option == 8) {
        let brand = prompt("Enter brand (samsung/iphone/xiaomi):");
        let price = 0;

        if (brand === "samsung") price = 60000;
        else if (brand === "iphone") price = 120000;
        else if (brand === "xiaomi") price = 30000;

        if (price === 0) {
            alert("Brand not available");
            return;
        }

        alert("Price: " + price);

        if (price > 50000) {
            alert("High-End Device");
        } else if (price >= 20000) {
            alert("Mid-Range Device");
        } else {
            alert("Budget Device");
        }

        if (brand === "samsung") {
            alert("Top Selling Brand");
        }
    }

    // -------- QUIZ --------
    else if (option == 9) {
        let score = 0;

        if (prompt("2 + 2 = ?") === "4") score++;
        if (prompt("Capital of Pakistan?") === "Islamabad") score++;
        if (prompt("5 x 2 = ?") === "10") score++;

        if (score === 3) {
            alert("Excellent Performance");
            alert("Perfect Score");
        } else if (score === 2) {
            alert("Good Job");
        } else if (score === 1) {
            alert("Needs Improvement");
        } else {
            alert("Try Again");
        }
    }

    // -------- GROCERY --------
    else if (option == 10) {
        let p1 = Number(prompt("Enter price 1:"));
        let p2 = Number(prompt("Enter price 2:"));
        let p3 = Number(prompt("Enter price 3:"));

        if (p1 <= 0 || p2 <= 0 || p3 <= 0 || isNaN(p1) || isNaN(p2) || isNaN(p3)) {
            alert("Invalid input");
            return;
        }

        let total = p1 + p2 + p3;

        if (p1 > 2000 || p2 > 2000 || p3 > 2000) {
            alert("Expensive Item Included");
        }

        if (total > 5000) total *= 0.85;
        else if (total > 3000) total *= 0.90;

        alert("Final Bill: " + total);
    }

    else {
        alert("Invalid option");
    }
}