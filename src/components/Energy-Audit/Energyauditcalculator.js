import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const Energyauditcalculator = () => {
  const [appliance, setAppliance] = useState("");
  const [power, setPower] = useState("");
  const [usage, setUsage] = useState("");
  const [auditList, setAuditList] = useState([]);

  const handleAdd = () => {
    if (!appliance || !power || !usage) {
      alert("Please fill all fields!");
      return;
    }

    const energyConsumed = (power * usage) / 1000; // Energy in kWh
    const newAudit = { appliance, power, usage, energyConsumed };

    setAuditList([...auditList, newAudit]);
    setAppliance("");
    setPower("");
    setUsage("");
  };

  const totalEnergy = auditList.reduce((sum, item) => sum + item.energyConsumed, 0);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Energy Audit Calculator
      </Typography>

      {/* Input Fields */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          label="Appliance"
          variant="outlined"
          fullWidth
          value={appliance}
          onChange={(e) => setAppliance(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Power Rating (W)"
          variant="outlined"
          fullWidth
          type="number"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Usage Hours Per Day"
          variant="outlined"
          fullWidth
          type="number"
          value={usage}
          onChange={(e) => setUsage(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAdd}
        >
          Add Appliance
        </Button>
      </Paper>

      {/* Audit Results */}
      <Typography variant="h5" gutterBottom>
        Audit Results
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Appliance</TableCell>
              <TableCell align="right">Power (W)</TableCell>
              <TableCell align="right">Usage (Hours/Day)</TableCell>
              <TableCell align="right">Energy Consumed (kWh)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auditList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.appliance}</TableCell>
                <TableCell align="right">{item.power}</TableCell>
                <TableCell align="right">{item.usage}</TableCell>
                <TableCell align="right">{item.energyConsumed.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            {auditList.length > 0 && (
              <TableRow>
                <TableCell colSpan={3} align="right">
                  <strong>Total Energy (kWh)</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>{totalEnergy.toFixed(2)}</strong>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
