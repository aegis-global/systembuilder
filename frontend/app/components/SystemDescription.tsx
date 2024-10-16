import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SystemDescription: React.FC = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Handle the submission of the system description
    console.log(description);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <TextField
        label="System Description"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SystemDescription;
