import React, { useState } from "react";
import './Dashboard.css';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

// Mock data
const mockData = {
  totalEnergy: 12000,
  renewableEnergy: 7000,
  nonRenewableEnergy: 5000,
  monthlyConsumption: [
    { month: "January", consumption: 1000 },
    { month: "February", consumption: 900 },
    { month: "March", consumption: 1100 },
    { month: "April", consumption: 950 },
    { month: "May", consumption: 1200 },
    { month: "June", consumption: 1150 },
  ],
};

export const Dashboard = () => {
  const [data] = useState(mockData);

  // Chart data for monthly consumption
  const barChartData = {
    labels: data.monthlyConsumption.map((item) => item.month),
    datasets: [
      {
        label: "Monthly Consumption (kWh)",
        data: data.monthlyConsumption.map((item) => item.consumption),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data
  const pieChartData = {
    labels: ["Renewable Energy", "Non-Renewable Energy"],
    datasets: [
      {
        data: [data.renewableEnergy, data.nonRenewableEnergy],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#388e3c", "#d32f2f"],
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Interactive Energy Dashboard
      </Typography>

      {/* Metrics */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ animation: "fadeIn 1s ease" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Energy
              </Typography>
              <Typography variant="h4">{data.totalEnergy} kWh</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ animation: "fadeIn 1.5s ease" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Renewable Energy
              </Typography>
              <Typography variant="h4">{data.renewableEnergy} kWh</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ animation: "fadeIn 2s ease" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Non-Renewable Energy
              </Typography>
              <Typography variant="h4">{data.nonRenewableEnergy} kWh</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Energy Consumption
            </Typography>
            <Bar data={barChartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Energy Distribution
            </Typography>
            <Pie data={pieChartData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

