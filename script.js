function run(option) {

    // ===== Q1 RESULT =====
    if (option == 1) {
        var m1 = Number(prompt("Enter subject 1 marks:"));
        var m2 = Number(prompt("Enter subject 2 marks:"));

        if (isNaN(m1) || isNaN(m2) || m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100) {
            alert("Invalid marks");
            return;
        }

        var avg = (m1 + m2) / 2;

        if (m1 < 40 || m2 < 40) {
            alert("Fail");
        } else if (avg >= 75) {
            alert("Excellent");
        } else if (avg >= 60) {
            alert("Good");
        } else if (avg >= 50) {
            alert("Pass");
        } else {
            alert("Fail");
        }

        if (m1 > 85 && m2 > 85) {
            alert("Outstanding Performance");
        }
    }

    // ===== Q2 LOGIN =====
    else if (option == 2) {
        var correctUser = "admin";
        var correctPass = "1234";
        var attempts = 0;

        while (attempts < 3) {
            var user = prompt("Enter username:");

            if (user !== correctUser) {
                alert("Access Denied");
                return;
            }

            var pass = prompt("Enter password:");

            if (pass === correctPass) {
                if (attempts === 0) {
                    alert("Login Successful – Welcome Back");
                } else {
                    alert("Login Successful");
                }
                return;
            } else {
                attempts++;
                alert("Incorrect Password");
            }
        }

        alert("Too many attempts");
    }

    // ===== Q3 BILLING =====
    else if (option == 3) {
        var item = prompt("Enter product (laptop/phone/mouse):");
        var price = 0;

        if (item === "laptop") price = 6000;
        else if (item === "phone") price = 3000;
        else if (item === "mouse") price = 500;

        if (price === 0) {
            alert("Product not available");
            return;
        }

        var total = price;

        if (price > 4000) {
            alert("Premium Product Selected");
        }

        if (total > 5000) total = total * 0.85;
        else if (total > 3000) total = total * 0.90;

        alert("Final Bill: " + total);
    }

    // ===== Q4 WORK HOURS =====
    else if (option == 4) {
        var hours = Number(prompt("Enter working hours:"));

        if (isNaN(hours) || hours < 0 || hours > 24) {
            alert("Invalid input");
            return;
        }

        if (hours >= 8) alert("Full Day");
        else if (hours >= 4) alert("Partially Present");
        else alert("Absent");

        if (hours > 10) alert("Overtime Detected");
    }

    // ===== Q5 PASSWORD =====
    else if (option == 5) {
        var password = prompt("Enter password:");

        if (password.length < 6) {
            alert("Weak Password");
            return;
        }

        var hasLetter = /[a-zA-Z]/.test(password);
        var hasNumber = /[0-9]/.test(password);

        if (hasLetter && hasNumber) {
            alert("Strong Password");
        } else {
            alert("Medium Password");
        }

        if (password.indexOf("123") !== -1) {
            alert("Avoid common patterns");
        }
    }

    // ===== Q6 BANK =====
    else if (option == 6) {
        var balance = 50000;
        var deposit = Number(prompt("Enter deposit amount:"));

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

    // ===== Q7 ATTENDANCE =====
    else if (option == 7) {
        var days = Number(prompt("Enter days present (0-30):"));

        if (isNaN(days) || days < 0 || days > 30) {
            alert("Invalid input");
            return;
        }

        var percent = (days / 30) * 100;

        if (percent >= 75) alert("Eligible");
        else if (percent >= 50) alert("Warning");
        else alert("Not Eligible");

        if (percent === 100) alert("Perfect Attendance");
    }

    // ===== Q8 MOBILE =====
    else if (option == 8) {
        var brand = prompt("Enter brand (samsung/iphone/xiaomi):");
        var price = 0;

        if (brand === "samsung") price = 60000;
        else if (brand === "iphone") price = 120000;
        else if (brand === "xiaomi") price = 30000;

        if (price === 0) {
            alert("Brand not available");
            return;
        }

        alert("Price: " + price);

        if (price > 50000) alert("High-End Device");
        else if (price >= 20000) alert("Mid-Range Device");
        else alert("Budget Device");

        if (brand === "samsung") {
            alert("Top Selling Brand");
        }
    }

    // ===== Q9 QUIZ =====
    else if (option == 9) {
        var score = 0;

        if (prompt("2+2=?") === "4") score++;
        if (prompt("Capital of Pakistan?") === "Islamabad") score++;
        if (prompt("5*2=?") === "10") score++;

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

    // ===== Q10 GROCERY =====
    else if (option == 10) {
        var p1 = Number(prompt("Enter price 1:"));
        var p2 = Number(prompt("Enter price 2:"));
        var p3 = Number(prompt("Enter price 3:"));

        if (isNaN(p1) || isNaN(p2) || isNaN(p3) || p1 <= 0 || p2 <= 0 || p3 <= 0) {
            alert("Invalid input");
            return;
        }

        var total = p1 + p2 + p3;

        if (p1 > 2000 || p2 > 2000 || p3 > 2000) {
            alert("Expensive Item Included");
        }

        if (total > 5000) total = total * 0.85;
        else if (total > 3000) total = total * 0.90;

        alert("Final Bill: " + total);
    }

    else {
        alert("Invalid option");
    }
}