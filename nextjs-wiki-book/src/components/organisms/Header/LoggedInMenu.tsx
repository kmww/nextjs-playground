import { useApolloClient } from '@apollo/client';
import {
  IconButton,
  InputLabel,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { NavLink } from './';
import { LogoutIcon, SettingIcon } from '@/components/atoms/IconButton';
import ShapeImage from '@/components/atoms/ShapeImage';
import Separator from '@/components/atoms/Sparator';
import {
  useLogoutMutation,
  useMeQuery,
  useUploadProfileImageMutation,
} from '@/generated/graphql';

interface LoggedInMenuProps {
  isAuth: boolean;
}

const LoggedInMenu = ({ isAuth }: LoggedInMenuProps) => {
  const client = useApolloClient();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { data } = useMeQuery({ skip: !isAuth });
  const [logout] = useLogoutMutation();
  const [upload] = useUploadProfileImageMutation();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const profileImage = useMemo(() => {
    if (data?.me?.profileImageUrl) {
      return `http://localhost:4000/${data?.me?.profileImageUrl}`;
    }
    return '';
  }, [data]);

  const onLogoutClick = async () => {
    try {
      await logout();
      localStorage.removeItem('access_token');
      await client.resetStore();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      await upload({
        variables: { file },
        update: (cache) => {
          cache.evict({ fieldName: 'me' });
        },
      });
    }
  };

  return (
    <NavLink>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <ShapeImage
            shape="circle"
            src={profileImage}
            width={24}
            height={24}
            data-testid="profile-shape-image"
            alt={profileImage}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <InputLabel htmlFor="upload-profile-image">
          <MenuItem onClick={handleClose}>
            <input
              id="upload-profile-image"
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
            <ShapeImage
              shape="circle"
              src={profileImage}
              width={24}
              height={24}
              data-testid="profile-shape-image"
              alt={profileImage}
            />
            Profile
          </MenuItem>
        </InputLabel>
        <Separator />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingIcon />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon onClick={onLogoutClick} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </NavLink>
  );
};

export default LoggedInMenu;
