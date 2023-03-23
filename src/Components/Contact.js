import { useState } from "react";
import { Box, createTheme, TextField, Button, CardHeader } from "@mui/material";
import { Send } from "@mui/icons-material";
import classes from "./Contact.module.css";
import { ThemeProvider } from "@emotion/react";

const Contact = (props) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const theme = createTheme({
    palette: {
      background: { paper: "#fff" },
    }
  });
  return (
    <div className={classes.contactSectionContainer}>
      <h1 id="ContactLink" className={classes.sectionHeader}>
        Contact Me
      </h1>
      <ThemeProvider theme={theme}>
        <Box 
          component="form"
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
          ></TextField>
          <TextField
            fullWidth
            value={email}
            onChange={(event) => {
              setName(event.target.value);
            }}
            label="Email"
            id="email"
            margin="normal"
          ></TextField>
          <TextField
            fullWidth
            value={message}
            onChange={(event) => {
              setName(event.target.value);
            }}
            multiline
            rows={4}
            label="Message"
            id="message"
            margin="normal"
          ></TextField>
          <Button variant="contained" endIcon={<Send />}>
            Send
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Contact;
