import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Root route
app.get("/", (req: Request, res: Response) => {
    res.send("Calculator API chal rahi hai 🚀");
});

// 🔥 Smart Calculator API
app.get("/calculate", (req: Request, res: Response) => {
    const { a, b, type } = req.query;

    const num1 = Number(a);
    const num2 = Number(b);

    // ✅ Validation
    if (isNaN(num1) || isNaN(num2)) {
        return res.json({ error: "Invalid numbers" });
    }

    let result;

    switch (type) {
        case "add":
            result = num1 + num2;
            break;

        case "sub":
            result = num1 - num2;
            break;

        case "mul":
            result = num1 * num2;
            break;

        case "div":
            if (num2 === 0) {
                return res.json({ error: "Cannot divide by zero" });
            }
            result = num1 / num2;
            break;

        default:
            return res.json({ error: "Invalid type (use add, sub, mul, div)" });
    }

    res.json({ result });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});