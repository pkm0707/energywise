import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  LinearProgress,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Questions with Recommendations
const questionsData = [
    // Lighting
    { category: "Lighting", text: "Do you use LED lights in your home?", recommendation: "Switch to energy-efficient LED lights in your home." },
    { category: "Lighting", text: "Do you turn off lights when leaving a room?", recommendation: "Always turn off lights when leaving a room to save energy." },
    { category: "Lighting", text: "Do you use natural daylight instead of artificial lighting during the day?", recommendation: "Maximize natural daylight to reduce artificial lighting usage." },
    { category: "Lighting", text: "Do you have motion-sensor lighting in hallways or outdoor areas?", recommendation: "Install motion-sensor lighting for areas like hallways and outdoors." },
    { category: "Lighting", text: "Do you use dimmer switches to adjust lighting levels?", recommendation: "Use dimmer switches to control brightness and save energy." },
    { category: "Lighting", text: "Do you clean light fixtures to maintain brightness?", recommendation: "Clean light fixtures regularly to ensure optimal brightness." },
    { category: "Lighting", text: "Do you replace old incandescent bulbs with LEDs?", recommendation: "Replace incandescent bulbs with LEDs for better efficiency." },
    { category: "Lighting", text: "Do you avoid using decorative lighting for prolonged periods?", recommendation: "Limit the use of decorative lighting to save energy." },
    { category: "Lighting", text: "Do you use task lighting instead of general lighting?", recommendation: "Use task lighting (e.g., desk lamps) to focus light on work areas." },
    { category: "Lighting", text: "Do you use outdoor solar lighting for pathways and gardens?", recommendation: "Install outdoor solar lights for sustainable garden and pathway lighting." },
  
    // Appliances
    { category: "Appliances", text: "Do you unplug appliances when not in use?", recommendation: "Unplug appliances when not in use to avoid phantom loads." },
    { category: "Appliances", text: "Do you use Energy Star-rated appliances?", recommendation: "Upgrade to Energy Star-rated appliances for higher efficiency." },
    { category: "Appliances", text: "Do you clean refrigerator coils regularly?", recommendation: "Clean refrigerator coils to maintain energy efficiency." },
    { category: "Appliances", text: "Do you avoid overloading your refrigerator?", recommendation: "Avoid overloading refrigerators for consistent cooling." },
    { category: "Appliances", text: "Do you use an energy-efficient washing machine?", recommendation: "Use an energy-efficient washing machine for lower power consumption." },
    { category: "Appliances", text: "Do you air-dry clothes instead of using a dryer?", recommendation: "Air-dry clothes to reduce reliance on energy-intensive dryers." },
    { category: "Appliances", text: "Do you use a microwave instead of an oven for small meals?", recommendation: "Use a microwave for small meals to save energy." },
    { category: "Appliances", text: "Do you turn off your computer instead of leaving it on standby?", recommendation: "Turn off computers and devices completely when not in use." },
    { category: "Appliances", text: "Do you avoid using a dishwasher for small loads?", recommendation: "Only run dishwashers with full loads to maximize efficiency." },
    { category: "Appliances", text: "Do you use smart plugs or timers for devices?", recommendation: "Install smart plugs or timers to automate device power management." },
  
    // Heating/Cooling
    { category: "Heating/Cooling", text: "Do you set your thermostat to energy-efficient levels?", recommendation: "Set your thermostat to 68°F in winter and 78°F in summer." },
    { category: "Heating/Cooling", text: "Do you use programmable thermostats?", recommendation: "Use programmable thermostats for better energy control." },
    { category: "Heating/Cooling", text: "Do you seal drafts around doors and windows?", recommendation: "Seal drafts around windows and doors to prevent heat loss." },
    { category: "Heating/Cooling", text: "Do you use ceiling fans to circulate air?", recommendation: "Use ceiling fans to improve air circulation and reduce HVAC use." },
    { category: "Heating/Cooling", text: "Do you regularly maintain your HVAC system?", recommendation: "Maintain HVAC systems regularly to ensure efficiency." },
    { category: "Heating/Cooling", text: "Do you use energy-efficient heating and cooling systems?", recommendation: "Invest in energy-efficient HVAC systems to save energy." },
    { category: "Heating/Cooling", text: "Do you avoid heating or cooling unused rooms?", recommendation: "Turn off heating/cooling in unused rooms to reduce energy waste." },
    { category: "Heating/Cooling", text: "Do you insulate your home properly to reduce energy loss?", recommendation: "Improve home insulation to save on heating and cooling costs." },
    { category: "Heating/Cooling", text: "Do you use weatherstripping on doors and windows?", recommendation: "Install weatherstripping to enhance insulation efficiency." },
    { category: "Heating/Cooling", text: "Do you keep blinds or curtains closed to reduce heat gain or loss?", recommendation: "Use curtains or blinds to reduce heat loss in winter and gain in summer." },
  
    // Water Heating
    { category: "Water Heating", text: "Do you use a tankless water heater for on-demand heating?", recommendation: "Upgrade to a tankless water heater for energy-efficient heating." },
    { category: "Water Heating", text: "Do you set your water heater to 120°F (49°C) or lower?", recommendation: "Set water heater temperature to 120°F to save energy." },
    { category: "Water Heating", text: "Do you insulate your water heater and hot water pipes?", recommendation: "Insulate water heaters and pipes to prevent heat loss." },
    { category: "Water Heating", text: "Do you fix leaky faucets promptly?", recommendation: "Fix leaky faucets to prevent unnecessary water and energy waste." },
    { category: "Water Heating", text: "Do you use low-flow showerheads to reduce water usage?", recommendation: "Install low-flow showerheads to save hot water and energy." },
    { category: "Water Heating", text: "Do you take shorter showers to save hot water?", recommendation: "Reduce shower times to minimize hot water usage." },
    { category: "Water Heating", text: "Do you run dishwashers only with full loads?", recommendation: "Run dishwashers only when fully loaded to save water and energy." },
    { category: "Water Heating", text: "Do you avoid using hot water unnecessarily for laundry?", recommendation: "Use cold water settings for most laundry loads to save energy." },
    { category: "Water Heating", text: "Do you turn off water heaters when away for extended periods?", recommendation: "Turn off water heaters when not needed to save energy." },
    { category: "Water Heating", text: "Do you maintain your water heater regularly?", recommendation: "Schedule regular maintenance for water heaters to ensure efficiency." },
  ];

// Pie Chart Colors
const COLORS = ["#0088FE", "#FFBB28"];

export const Energyauditqr = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Tracks the current question index
  const [responses, setResponses] = useState([]); // Stores all responses
  const [showResults, setShowResults] = useState(false); // Flag to show results

  const handleAnswer = (answer) => {
    // Create a response for the current question
    const response = {
      question: questionsData[currentQuestion].text,
      category: questionsData[currentQuestion].category,
      answer,
      recommendation: questionsData[currentQuestion].recommendation,
    };

    // Update the responses array
    setResponses([...responses, response]);

    // Move to the next question or show results
    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const yesCount = responses.filter((res) => res.answer === "yes").length;
  const noCount = responses.length - yesCount;

  const data = [
    { name: "Yes", value: yesCount },
    { name: "No", value: noCount },
  ];

  const getFeedback = () => {
    if (yesCount === questionsData.length) {
      return "Congratulations! You are already practicing excellent energy efficiency.";
    } else if (noCount === questionsData.length) {
      return "It seems there’s significant room for improvement. Start with small, manageable changes.";
    } else if (yesCount >= questionsData.length * 0.8) {
      return "Great job! Focus on areas where you answered 'No' for further improvement.";
    } else if (yesCount >= questionsData.length * 0.5) {
      return "You're on the right track. Address the key areas where you answered 'No' to enhance your energy savings.";
    } else {
      return "There’s considerable room for improvement. Start with high-impact areas such as upgrading appliances.";
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Comprehensive Energy Audit Questionnaire
      </Typography>

      {!showResults ? (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            {`Question ${currentQuestion + 1} of ${questionsData.length}`}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {questionsData[currentQuestion].text}
          </Typography>

          <FormControl component="fieldset">
            <FormLabel component="legend">Your Answer:</FormLabel>
            <RadioGroup row onChange={(e) => handleAnswer(e.target.value)}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <Box sx={{ mt: 3 }}>
            <LinearProgress
              variant="determinate"
              value={(currentQuestion / questionsData.length) * 100}
            />
          </Box>
        </Paper>
      ) : (
        <Box>
          <Typography variant="h5" gutterBottom>
            Results
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your energy efficiency score: {yesCount}/{questionsData.length}
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Feedback:
            </Typography>
            <Typography>{getFeedback()}</Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Recommendations:
            </Typography>
            {["Lighting", "Appliances", "Heating/Cooling", "Water Heating", "Transportation", "Renewable Energy"].map(
              (category) => {
                const categoryRecommendations = responses
                  .filter((res) => res.answer === "no" && res.category === category)
                  .map((res) => res.recommendation);

                if (categoryRecommendations.length === 0) return null;

                return (
                  <Accordion key={category} sx={{ mb: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{`${category} Recommendations`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        {categoryRecommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                );
              }
            )}
          </Box>

          <Box sx={{ mt: 4, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Answer Breakdown:
            </Typography>
            <ResponsiveContainer>
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

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setCurrentQuestion(0);
              setResponses([]);
              setShowResults(false);
            }}
            sx={{ mt: 3 }}
          >
            Retake Audit
          </Button>
        </Box>
      )}
    </Container>
  );
};

