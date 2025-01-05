import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./Chatbot.css"; // Import the custom CSS file

// Predefined chatbot responses
const chatbotResponses = {
  hello: "Hi there! I'm your Energy Assistant. How can I help you save energy today?",
  hi: "Hi there! I'm your Energy Assistant. How can I help you save energy today?",
  led: "Switching to LED lights can save up to 75% of energy on lighting!",
  lighting: "Use natural daylight whenever possible and turn off lights when not in use.",
  appliances: "Energy Star-rated appliances consume significantly less energy. Upgrade if possible.",
  thermostat: "For maximum efficiency, set your thermostat to 68°F in winter and 78°F in summer.",
  insulation: "Proper insulation keeps your home warm in winter and cool in summer, reducing energy costs.",
  heating: "Maintain your HVAC system and clean filters regularly to improve efficiency.",
  cooling: "Use ceiling fans to circulate air instead of relying solely on air conditioning.",
  solar: "Installing solar panels is a long-term investment for clean, renewable energy.",
  transportation: "Carpooling, using public transport, or switching to an electric vehicle can lower your carbon footprint.",
  water: "Install low-flow showerheads and fix leaky faucets to save water and energy.",
  renewable: "Renewable energy options like solar, wind, and geothermal can significantly cut energy costs.",
  phantom: "Unplug devices when not in use to reduce phantom loads.",
  dishwasher: "Only run your dishwasher with a full load to save water and energy.",
  washing: "Wash clothes in cold water and air-dry them whenever possible.",
  insulation_windows: "Seal windows and doors with weatherstripping to prevent drafts.",
  energy_monitor: "Use an energy monitor to track your household's energy consumption.",
  green_energy: "Switch to a green energy provider to support renewable energy projects.",
  hvac: "Schedule annual maintenance for your HVAC system to ensure peak efficiency.",
  battery: "Consider installing a home battery system to store excess solar power.",
  thermostat_programmable: "Use a programmable thermostat to automatically adjust your home's temperature.",
  vehicle_electric: "Switch to an electric vehicle to reduce fuel costs and emissions.",
  public_transport: "Using public transport can significantly reduce your energy footprint.",
  bike: "Biking is a zero-energy alternative for short commutes.",
  smart_home: "Smart home devices like automated lighting and thermostats can optimize energy use.",
  window_shades: "Use blackout shades to reduce heat loss in winter and heat gain in summer.",
  energy_audit: "Conduct an energy audit to identify areas where you can save energy in your home.",
  timer_lights: "Use timers or motion sensors for lights to avoid unnecessary energy usage.",
  fridge_maintenance: "Keep your refrigerator coils clean and set the temperature to 37°F for optimal efficiency.",
  freezer: "Keep your freezer full to maintain temperature and save energy.",
  cold_wash: "Use cold water for laundry to save energy on heating.",
  air_dry: "Air-dry clothes instead of using an electric dryer.",
  power_strip: "Use power strips to easily turn off multiple devices at once.",
  heat_loss: "Check for drafts around windows and doors to minimize heat loss.",
  attic_insulation: "Insulate your attic to prevent heat escape during winter.",
  air_sealing: "Seal cracks and gaps in walls to improve home insulation.",
  solar_water_heater: "Consider installing a solar water heater for efficient water heating.",
  low_flow: "Install low-flow showerheads and faucets to save water and energy.",
  carpool: "Carpooling with coworkers is a great way to save fuel and reduce traffic.",
  led_lifespan: "LED bulbs last longer than traditional bulbs, reducing replacement costs.",
  energy_budget: "Create an energy budget to track and manage your household consumption.",
  peak_hours: "Avoid using high-energy appliances during peak electricity hours.",
  programmable_lighting: "Set timers for outdoor lighting to save energy.",
  indoor_plants: "Use indoor plants to naturally improve air quality.",
  garden_lights: "Install solar-powered garden lights for sustainable outdoor lighting.",
  recycle: "Recycling reduces the need for energy-intensive manufacturing processes.",
  compost: "Composting reduces waste and helps improve soil for home gardening.",
  thermostat_zones: "Set up zoned heating and cooling for more precise temperature control.",
  cooking: "Use pressure cookers and microwave ovens for faster, energy-efficient cooking.",
  blinds: "Close blinds during hot days to reduce cooling costs.",
  important: "Here are some top recommendations:\n1. Switch to LED lights.\n2. Insulate your home.\n3. Use a programmable thermostat.\n4. Upgrade to Energy Star-rated appliances.\n5. Install solar panels.",
  water_heater_temp: "Set your water heater temperature to 120°F to save energy.",
  fix_leaks: "Fix leaky faucets promptly to save water and energy.",
  door_draft: "Install door sweeps to block drafts and reduce heating costs.",
  geothermal: "Geothermal heating systems are highly efficient for homes in cold climates.",
  radiant_floor: "Radiant floor heating provides consistent warmth and is more efficient than traditional systems.",
  fans: "Use ceiling fans in the summer to circulate air and reduce the need for AC.",
  blinds_winter: "Open blinds during sunny winter days to naturally warm your home.",
  timer_devices: "Use timers for devices like coffee makers to automate energy savings.",
  upgrade_windows: "Upgrade to double-pane windows to reduce heat transfer.",
  led_dimmers: "Install dimmer switches to adjust LED light brightness and save energy.",
  garden_irrigation: "Use drip irrigation systems to minimize water waste.",
  wind_energy: "Small wind turbines can supplement your household's electricity needs.",
  habits: "Small changes like turning off lights and unplugging devices can make a big difference over time.",
  tips: "General tips: unplug devices, optimize thermostat settings, and use natural light whenever possible.",
  default: "I'm sorry, I didn't quite understand that. Can you rephrase or ask about energy efficiency?",
};

export const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Stores conversation
  const [userInput, setUserInput] = useState(""); // Stores the current user input

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message to the chat
    const newMessages = [
      ...messages,
      { sender: "user", text: userInput.trim() },
    ];

    // Generate chatbot response
    const userMessageLower = userInput.toLowerCase();
    const response =
      Object.keys(chatbotResponses).find((key) =>
        userMessageLower.includes(key)
      ) || "default";

    newMessages.push({
      sender: "bot",
      text: chatbotResponses[response],
    });

    setMessages(newMessages);
    setUserInput(""); // Clear input field
  };

  return (
    <Container maxWidth="sm" className="chatbot-container">
      <Typography variant="h4" className="chatbot-title">
        Energy Chatbot
      </Typography>
      <Paper className="chatbot-paper">
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              className={`chatbot-message ${
                msg.sender === "user" ? "user-message" : "bot-message"
              }`}
              sx={{
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Paper
                className={msg.sender === "user" ? "user-bubble" : "bot-bubble"}
              >
                <ListItemText primary={msg.text} />
              </Paper>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box className="chatbot-input-box">
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          className="chatbot-input"
          value={userInput}
          placeholder="Ask me about LED lights, insulation, or energy tips"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button
          variant="contained"
          className="chatbot-send-button"
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Box>
    </Container>
  );
};