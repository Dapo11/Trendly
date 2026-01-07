// 1️⃣ Load environment variables
import dotenv from "dotenv";
dotenv.config();

// 2️⃣ Core imports
import express from "express";
import cors from "cors";
import axios from "axios";

// 3️⃣ App setup
const app = express();
const PORT = process.env.PORT || 5000;

// 4️⃣ Middleware
app.use(cors());
app.use(express.json());

// 5️⃣ Test route
app.get("/", (req, res) => {
  res.send("Trendly backend is running 🚀");
});

// 🧩 CLEAN QUICK SUMMARY (NO AI)
function generateQuickSummary(article) {
  if (!article.description) return "";

  return article.description
    .replace(/\s+/g, " ")
    .replace(/\.\.\.$/, "")
    .trim();
}

// 6️⃣ QUICK NEWS ENDPOINT (VERSION 1)
app.get("/api/trends", async (req, res) => {
  try {
    const response = await axios.get(
      "https://gnews.io/api/v4/top-headlines",
      {
        params: {
          category: "entertainment",
          lang: "en",
          country: "ng",
          max: 10,
          apikey: process.env.NEWS_API_KEY,
        },
      }
    );

    const trends = response.data.articles.map((article, index) => ({
      id: index + 1,
      title: article.title,
      image: article.image,
      summary: generateQuickSummary(article),
      source: article.source.name,
      publishedAt: article.publishedAt,
    }));

    res.json(trends);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// 7️⃣ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
