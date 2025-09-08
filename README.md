# Migration Trend Predictor 🌍

## Overview
An ML-based web app to predict global migration trends for the next 5 years 
using historical data, real-time signals (Google Trends, World Bank), and 
adjusting forecasts for Black Swan events (pandemics, disasters, wars).

## Features
- Predict next 5-year migration trends
- Real-time data enhancer (Google Trends, World Bank API)
- Black Swan event simulator
- Interactive charts, maps, and Sankey flows
- Export results (CSV, PDF)

## Tech Stack
- Backend: Flask, Python
- ML: scikit-learn, pandas
- Frontend: HTML, CSS, JS, Chart.js, Leaflet.js
- Data: UN, World Bank, Google Trends

## How to Run
```bash
pip install -r requirements.txt
python app.py
