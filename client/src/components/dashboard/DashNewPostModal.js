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
  const [showUpload, setShowUpload] = useState(false);

  // const handleOpenPostModal = () => setOpenPostModal(true);
  const handleClosePostModal = () => {
    setOpenPostModal(false);
    setShowUpload(false);
  };

  const handleFileUpload = () => {
    uploadRef.current.click();
  };

  const handleAddFileToState = (e) => {
    console.log(e);
    // user upload multiple files
    // setFiles([...files, ...e.target.files]);
    setFiles(e.target.files);
    setShowUpload(true);
  };

  const handleUploadPost = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // setFailedAuth(true);
      return;
    }

    // write post record to db
    axios
      .post(
        '/api/generate-post',
        {
          filename: files[0].name,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        // handle success
        console.log('data successfully saved to db');
      })
      .catch((err) => {
        // handle API error
        console.log('save failed: ' + err.message);
      });

    // send file to backend

    axios
      .get('/api/upload-s3-url?filename=' + files[0].name, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        // make form data as a container to include files and fields
        const formData = new FormData();
        console.log(res);

        // extract url and fields from response
        const { url, fields } = JSON.parse(res.data.res);
        Object.keys(fields).forEach((key) => {
          console.log(key);
          formData.append(key, fields[key]);
        });

        // add file into form data
        formData.append('file', files[0]);

        // upload file to s3

        axios
          .post(url, formData, {
            headers: {
              ContentType: 'multipart/form-data',
            },
          })
          .then((res) => {
            console.log(res);
            // handle success
            console.log('uploaded successfully');
          })
          .catch((err) => {
            // handle API error
            console.log('upload failed: ' + err.message);
          });
      });
  };

  console.log(files);

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
            <Button
              className={showUpload ? '' : 'toggle__upload__btn'}
              onClick={handleUploadPost}
            >
              Upload
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

// DashNewPostModal
