import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Rating,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = () => {
    if (!feedback || !category || !rating) {
      alert("Please fill all fields!");
      return;
    }

    const newFeedback = { feedback, category, rating };
    setFeedbackList([...feedbackList, newFeedback]);
    setFeedback(""); // Reset feedback input
    setCategory(""); // Reset category input
    setRating(0); // Reset rating input
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Feedback Form
      </Typography>

      {/* Feedback Text */}
      <TextField
        label="Your Feedback"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        sx={{ mt: 3 }}
      />

      {/* Category Select */}
      <FormControl fullWidth sx={{ mt: 3 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Suggestions">Suggestions</MenuItem>
          <MenuItem value="Issues">Issues</MenuItem>
          <MenuItem value="Appreciation">Appreciation</MenuItem>
        </Select>
      </FormControl>

      {/* Rating Input */}
      <Box sx={{ mt: 3 }}>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="feedback-rating"
          value={rating}
          onChange={(e, newValue) => setRating(newValue)}
        />
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Submit Feedback
      </Button>

      {/* Display Feedback */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Submitted Feedback:</Typography>
        <List>
          {feedbackList.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Category: ${item.category} | Rating: ${item.rating}`}
                secondary={item.feedback}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

