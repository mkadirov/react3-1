import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {styled} from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';


export default function BarMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const MenuBtn = styled(Button)({
    backgroundColor: 'inherit',
    color: 'white'
  })

  function close() {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        
        <MenuBtn
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{backgroundColor: 'inherit'}}
        >
          <MenuIcon />
        </MenuBtn>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper sx={{backgroundColor: 'black', border: '1px solid coral', marginTop: '20px'}}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  
                    <MenuItem onClick={close}>
                      <Button href='#homeSection'>
                        Home
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={close}>
                      <Button href='#skills'>
                        Skills
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={close}>
                      <Button href='#projects'>
                        Projects
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={close}>
                      <Button href='#contactMe'>
                        Contact me
                      </Button>
                    </MenuItem>
                  
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}