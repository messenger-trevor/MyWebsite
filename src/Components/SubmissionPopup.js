import { Dialog, DialogContent, DialogTitle, Button } from "@mui/material";

const SubmissionPopup = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Contact Form Messaging</DialogTitle>
      <DialogContent>
        <p>The contact form messaging is not yet supported. Please try again later.</p>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SubmissionPopup;