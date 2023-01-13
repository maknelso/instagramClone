import React, { useEffect, useRef, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Paper, TextField } from '@mui/material';
import postIcon from '../../assets/images/dashboard/post_icon.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import axios from 'axios';
import { theme } from '../ThemeColor';
import UserContext from '../../contexts/userContext';

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

const stylePreview = {
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
};

const styleUpload = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 950,
  minHeight: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
};

export default function DashNewPostModal({ usersInfo }) {
  const uploadRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [preview, setPreivew] = useState();
  const [feedDesc, setFeedDesc] = useState('');
  const [step, setStep] = useState(0);

  const { openPostModal, setOpenPostModal } = useContext(UserContext);

  useEffect(() => {
    if (files.length === 0) {
      setPreivew(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(files[0]);
    setPreivew(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [files]);

  useEffect(() => {}, [step]);

  const handleClosePostModal = () => {
    setOpenPostModal(false);
  };

  const handleChangeImgDesc = (e) => {
    setFeedDesc(e.target.value);
  };

  const handleFileUpload = () => {
    uploadRef.current.click();
  };

  const handleAddFileToState = (e) => {
    setFiles(e.target.files);
    setStep(1);
  };

  const handleUploadPost = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return;
    }

    // write post record to db
    axios
      .post(
        '/api/generate-post',
        {
          filename: files[0].name,
          feedDesc: feedDesc,
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
            setFeedDesc('');
            setOpenPostModal(false);

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

  return (
    <div>
      <Modal
        open={openPostModal}
        onClose={handleClosePostModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus={true}
      >
        {step === 0 ? (
          <Box sx={style}>
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
            </Grid>
          </Box>
        ) : step === 1 ? (
          <Box sx={stylePreview}>
            <Paper
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" sx={{ p: '1rem', fontWeight: 500 }}>
                <KeyboardBackspaceIcon
                  fontSize="large"
                  onClick={() => setStep(0)}
                />
              </Typography>
              <Typography variant="h5" sx={{ p: '1rem', fontWeight: 700 }}>
                Preview
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  p: '1rem',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  cursor: 'pointer',
                }}
                onClick={() => setStep(2)}
              >
                Next
              </Typography>
            </Paper>
            <Grid>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={preview}
              ></img>
            </Grid>
          </Box>
        ) : step === 2 ? (
          <Box sx={styleUpload}>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid lightgrey',
              }}
            >
              <Typography variant="h6" sx={{ p: '1rem', fontWeight: 500 }}>
                <KeyboardBackspaceIcon
                  fontSize="large"
                  onClick={() => setStep(0)}
                />
              </Typography>
              <Typography variant="h5" sx={{ p: '1rem', fontWeight: 700 }}>
                Create new post
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  p: '1rem',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  cursor: 'pointer',
                }}
                onClick={handleUploadPost}
              >
                Share
              </Typography>
            </Grid>
            <Grid container display="flex" justifyContent="space-between">
              <Grid item xs={9} sx={{ borderRight: '1px solid lightgrey' }}>
                <img
                  style={{
                    width: '100%',
                    maxHeight: '550px',
                    objectFit: 'cover',
                  }}
                  src={preview}
                ></img>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ p: '1rem' }}
                display="flex"
                flexDirection="column"
                gap={1}
              >
                <Grid display="flex" alignItems="center" gap={1.6}>
                  <img
                    style={{ width: '30px', borderRadius: '50%' }}
                    src={usersInfo.avatar}
                  ></img>
                  <Typography variant="h6" fontWeight={700}>
                    {usersInfo.username}
                  </Typography>
                </Grid>
                <TextField
                  variant="standard"
                  placeholder="Write a caption..."
                  onChange={handleChangeImgDesc}
                  autoFocus
                  InputProps={{
                    disableUnderline: true,
                  }}
                ></TextField>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Grid></Grid>
        )}
      </Modal>
    </div>
  );
}
