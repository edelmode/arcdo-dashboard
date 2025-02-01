import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import initializeConnection from './db.js';

dotenv.config();

const app = express();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

const startServer = async () => {
  try {
    const db = await initializeConnection();

    app.get("/", (req, res) => {
      res.send("Server is running!");
    });

    app.get('/api/hte', async (req, res) => {
      try {
        const [rows] = await db.execute('SELECT id, company_name AS company, office_address AS address, expiry_date AS date, business_type AS business, moa_status AS validity FROM hte');
        console.log("Fetched Data from Database:", rows); // Debugging: Check database response
        res.json(rows);
      } catch (error) {
        console.error("Error fetching HTES data:", error);
        res.status(500).json({ error: 'Failed to fetch HTES data' });
      }
    });

    app.get('/api/moa', async (req, res) => {
      try {
        const [rows] = await db.execute('SELECT id, company_name AS company, office_address AS address, expiry_date AS date, business_type AS business, moa_status AS validity FROM hte');
        console.log("Fetched Data from Database:", rows); // Debugging: Check database response
        res.json(rows);
      } catch (error) {
        console.error("Error fetching MOAS data:", error);
        res.status(500).json({ error: 'Failed to fetch MOAS data' });
      }
    });

    app.get('/api/ojt_coordinator', async (req, res) => {
      try {
        const [rows] = await db.execute('SELECT id, name, campus, email, office, assigned_student FROM ojt_coordinator');
        console.log("Fetched Data from Database:", rows); // Debugging: Check database response
        res.json(rows);
      } catch (error) {
        console.error("Error fetching OJT Coordinators data:", error);
        res.status(500).json({ error: 'Failed to fetch OJT Coordinators data' });
      }
    });

    app.get('/api/industry_partner', async (req, res) => {
      try {
        const [rows] = await db.execute('SELECT id, company_name AS company, office_address AS address, expiry_date AS date, business_type AS business, moa_status AS validity FROM industry_partner');
        console.log("Fetched Data from Database:", rows); // Debugging: Check database response
        res.json(rows);
      } catch (error) {
        console.error("Error fetching Industry Partners data:", error);
        res.status(500).json({ error: 'Failed to fetch Industry Partners data' });
      }
    });

    app.get('/api/business-counts', async (req, res) => {
      try {
        const [rows] = await db.execute(`
          SELECT business_type, COUNT(*) as count 
          FROM hte 
          GROUP BY business_type 
          ORDER BY count DESC 
          LIMIT 6
        `);
        res.json(rows);
      } catch (error) {
        console.error("Error fetching business counts:", error);
        res.status(500).json({ error: 'Failed to fetch business counts' });
      }
    });
    
    app.get('/api/moa-status', async (req, res) => {
      try {
        const [rows] = await db.execute(`
          SELECT moa_status as STATUS, 
          COUNT(*) * 100.0 / (SELECT COUNT(*) FROM moa) as percentage 
          FROM moa 
          GROUP BY moa_status
        `);
        res.json(rows);
      } catch (error) {
        console.error("Error fetching MOA status:", error);
        res.status(500).json({ error: 'Failed to fetch MOA status' });
      }
    });
    
    app.get('/api/summary-counts', async (req, res) => {
      try {
        const [hteCount] = await db.execute('SELECT COUNT(*) as count FROM hte');
        const [moaCount] = await db.execute('SELECT COUNT(*) as count FROM moa');
        const [ojtCount] = await db.execute('SELECT COUNT(*) as count FROM ojt_coordinator');
        const [industryCount] = await db.execute('SELECT COUNT(*) as count FROM industry_partner');
        
        res.json({
          hte: hteCount[0].count,
          moa: moaCount[0].count,
          ojt: ojtCount[0].count,
          industry: industryCount[0].count
        });
      } catch (error) {
        console.error("Error fetching summary counts:", error);
        res.status(500).json({ error: 'Failed to fetch summary counts' });
      }
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
};

startServer();