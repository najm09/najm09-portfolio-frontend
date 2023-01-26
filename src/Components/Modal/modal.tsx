import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {TableCell, TableRow, Chip } from '@mui/material';
import { ACADEMIC_DETAILS } from '../../Constants/data';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Chip label="Certifications" color='error' variant='outlined' onClick={handleOpen}/>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
            {
              ACADEMIC_DETAILS.certifications.map(data => {
                return (
                  <TableCell>
                    <TableRow>
                      <img src={data.certificate} style={{width:500, height: 500}} alt="certificate"/>
                    </TableRow>
                  </TableCell>
                )
              })
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}