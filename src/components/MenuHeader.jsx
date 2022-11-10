import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link as RouterLink} from "react-router-dom";


export const MenuHeader =  (props) => {
const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    props.logout();
  };

  const handleMycampains = () => {
    props.logout();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       {props.usuario.email}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
        <Link component={RouterLink} to="/mycampains" underline="none" color="inherit">
        {'Mis campañas'}
        </Link>
            </MenuItem>
        <MenuItem onClick={handlelogout}>Cerrar sesión</MenuItem>
      </Menu>
    </div>
  )
}
