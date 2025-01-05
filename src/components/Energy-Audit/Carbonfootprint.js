import React, { useState } from "react";
import {
  Typography,
  Slider,
  Container,
  Box,
  Button,
  LinearProgress,
  Paper,
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export const Carbonfootprint = () => {
  const [electricity, setElectricity] = useState(300); // kWh per month
  const [renewable, setRenewable] = useState(20); // Renewable energy %

  // Constants
  const emissionFactor = 0.5; // kg CO2 per kWh for non-renewable energy
  const COLORS = ["#FF8042", "#00C49F"]; // Colors for emissions vs renewables

  // Calculations
  const calculateEmissions = () => {
    const nonRenewableUsage = electricity * (1 - renewable / 100);
    const avoidedEmissions = electricity * (renewable / 100) * emissionFactor;
    const carbonEmissions = nonRenewableUsage * emissionFactor;

    return {
      carbonEmissions,
      avoidedEmissions,
    };
  };

  const { carbonEmissions, avoidedEmissions } = calculateEmissions();

  const data = [
    { name: "Carbon Emissions", value: carbonEmissions },
    { name: "Avoided Emissions", value: avoidedEmissions },
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 3, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Energy Carbon Footprint Calculator
        </Typography>

        {/* Electricity Consumption Input */}
        <Box sx={{ mt: 3 }}>
          <Typography>Monthly Electricity Usage (kWh)</Typography>
          <Slider
            value={electricity}
            onChange={(e, val) => setElectricity(val)}
            min={0}
            max={1000}
            step={10}
            valueLabelDisplay="on"
            sx={{ mt: 2 }}
          />
        </Box>

        {/* Renewable Energy Percentage Input */}
        <Box sx={{ mt: 3 }}>
          <Typography>Renewable Energy Contribution (%)</Typography>
          <Slider
            value={renewable}
            onChange={(e, val) => setRenewable(val)}
            min={0}
            max={100}
            step={5}
            valueLabelDisplay="on"
            sx={{ mt: 2 }}
          />
        </Box>

        {/* Results Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Your Carbon Footprint:</Typography>
          <Typography>
            Carbon Emissions: <strong>{carbonEmissions.toFixed(2)} kg CO₂</strong>
          </Typography>
          <Typography>
            Avoided Emissions: <strong>{avoidedEmissions.toFixed(2)} kg CO₂</strong>
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(avoidedEmissions / (carbonEmissions + avoidedEmissions)) * 100}
            sx={{ mt: 2 }}
          />
        </Box>

        {/* Visualization */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Emissions Breakdown:</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        {/* Suggestions */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Suggestions:</Typography>
          <ul>
            {renewable < 50 && <li>Consider increasing renewable energy usage.</li>}
            {electricity > 400 && <li>Reduce monthly electricity consumption.</li>}
            <li>Switch to energy-efficient appliances to save energy.</li>
          </ul>
        </Box>

        {/* Save Results */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }}
        >
          Save Results
        </Button>
      </Paper>
    </Container>
  );
};

