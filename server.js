const express = require("express");
const path = require("path");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const app = express();
const port = 3000;

// لعرض ملفات HTML وCSS وJS
app.use(express.static(__dirname));
app.use(express.json());

// الصفحة الرئيسية
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// إعداد ملف CSV
const csvWriter = createCsvWriter({
    path: "data.csv",
    header: [
        {id: "mohafaza", title: "المحافظة"},
        {id: "kada2", title: "القضاء"},
        {id: "baladeye", title: "البلدية"},
        {id: "pass", title: "Password"},
        {id: "gender", title: "Gender"},
        {id: "terms", title: "Accept Terms"},
        {id: "age", title: "Age"},
        {id: "location", title: "Location"},
        {id: "birthdate", title: "Birth Date"}
    ],
    append: true
});

// مسار POST لحفظ البيانات
app.post("/register", (req, res) => {
    const data = [req.body];
    csvWriter.writeRecords(data)
        .then(() => {
            console.log("Data saved to Excel (CSV) successfully");
            res.json({ message: "تم تسجيل البيانات في Excel بنجاح" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: "حدث خطأ أثناء حفظ البيانات" });
        });
});

// تشغيل السيرفر
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});