import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import postIcon from '../../assets/images/dashboard/post_icon.png';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  minHeight: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function DashNewPostModal({ openPostModal, setOpenPostModal }) {
  const uploadRef = useRef(null);
  const [files, setFiles] = useState([]);
  // const [openPostModal, setOpenPostModal] = React.useState(false);
  const handleOpenPostModal = () => setOpenPostModal(true);
  const handleClosePostModal = () => setOpenPostModal(false);

  const handleFileUpload = () => {
    uploadRef.current.click();
  };

  const handleAddFileToState = (e) => {
    console.log(e);
    // user upload multiple files
    setFiles([...files, ...e.target.files]);
  };

  const handleUploadPost = () => {
    axios.get(`/api/upload-s3-url?filename=${files[0].name}`).then((res) => {
      console.log(res.data.url);
      axios
        .put(res.data.url, {
          header: {
            "content-type": "image/png"
          },
          data: files[0],
        })
        .then((res) => {
          console.log(res);
        });
    });
  };

  return (
    <div>
      {/* <Button onClick={handleOpenPostModal}>Open modal</Button> */}
      <Modal
        open={openPostModal}
        onClose={handleClosePostModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus={true}
      >
        <Box sx={style}>
          {/* <Grid>
            <Typography variant="body1" component="h2">
              Create new post
            </Typography>
          </Grid> */}
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.2rem',
            }}
          >
            <Grid>
              <img src={postIcon}></img>
            </Grid>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Grag photos and videos here
            </Typography>
            <Button onClick={handleFileUpload} variant="contained">
              Select from computer
            </Button>
            <input
              onChange={handleAddFileToState}
              style={{ display: 'none' }}
              type="file"
              ref={uploadRef}
            />
            <Button onClick={handleUploadPost}>Upload</Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

// DashNewPostModal
