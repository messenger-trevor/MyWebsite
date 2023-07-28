import { useState } from "react";
import { Box, createTheme, TextField, Button, CardHeader } from "@mui/material";
import { Send } from "@mui/icons-material";
import classes from "./Contact.module.css";
import { ThemeProvider } from "@emotion/react";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const theme = createTheme({
    palette: {
      background: { paper: "#fff" },
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Resets the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={classes.contactSectionContainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          direction: "ltr",
          alignItems: "center",
          overflow: "hidden",
          // width: "500px",
        }}>
      <h1 id="ContactLink" className={classes.sectionHeader}>
        Contact Me
      </h1>
      <ThemeProvider theme={theme}>
        <Box 
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: "background.paper",
            border: ".1rem solid #097179",
            borderRadius: 2,
            p: 2,
          }}
        >
          <h2>Get In Touch</h2>
          <TextField
            fullWidth
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            label="Name"
            id="name"
            margin="normal"
          />
          <TextField
            fullWidth
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            label="Email"
            id="email"
            margin="normal"
          />
          <TextField
            fullWidth
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            multiline
            rows={4}
            label="Message"
            id="message"
            margin="normal"
          />
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Send
          </Button>
        </Box>
      </ThemeProvider>
      </div>
    </div>
  );
};

export default Contact;

