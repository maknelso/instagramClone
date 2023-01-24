import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  overflow: 'hidden',
  boxShadow: 24,
  borderRadius: '10px',
};

export default function DashModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus={true}
      >
        <Box sx={style}>
          {modalList.map((listItem, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  borderBottom: '1px solid lightgrey',
                  textAlign: 'center',
                  p: '1rem',
                  fontSize: '1.2rem',
                }}
              >
                {listItem.text}
              </Typography>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}

const modalList = [
  {
    id: 1,
    text: 'Report',
  },
  {
    id: 2,
    text: 'Unfollow',
  },
  {
    id: 3,
    text: 'Add to favorites',
  },
  {
    id: 4,
    text: 'Go to post',
  },
  {
    id: 5,
    text: 'Share to...',
  },
  {
    id: 6,
    text: 'Copy link',
  },
  {
    id: 7,
    text: 'Embed',
  },
  {
    id: 8,
    text: 'About thie account',
  },
  {
    id: 9,
    text: 'Cancel',
  },
];
