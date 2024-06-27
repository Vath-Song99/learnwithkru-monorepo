import React from 'react';
import Link from 'next/link';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
export interface MenuItem {
  label: string;
  route: string;
  icon: React.ReactNode;
  message?: string;
  pro?: boolean;
  children?: MenuItem[];
}
export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const menuGroups: { name: string; menuItems: MenuItem[] }[] = [
  {
    name: 'Setting Account',
    menuItems: [
      {
        label: 'About',
        route: '/settings/about',
        icon: <DashboardIcon />,
      },
      {
        label: 'Description',
        route: '/settings/description',
        icon: <DescriptionIcon />,
      },
      {
        label: 'Education',
        route: '/settings/education',
        icon: <SchoolIcon />,
      },
      {
        label: 'Time Available',
        route: '/settings/time-available',
        icon: <DashboardIcon />,
      },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Drawer
      anchor="left"
      open={sidebarOpen || isMdUp}
      onClose={() => setSidebarOpen(false)}
      variant={isMdUp ? 'permanent' : 'temporary'}
      classes={{ paper: 'w-64' }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <Typography variant="h6">Menu</Typography>
          {!isMdUp && (
            <IconButton onClick={() => setSidebarOpen(false)} className='bg-black'>
              <MenuIcon />
            </IconButton>
          )}
        </div>
        <div className="space-y-8 px-4">
          <div>
            <Typography variant="subtitle2" className="text-slate-500 uppercase">
              {menuGroups[0].name}
            </Typography>
            <List>
              {menuGroups[0].menuItems.map((menuItem, index) => (
                <Link href={menuItem.route} key={index} passHref>
                  <ListItem button component="a">
                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                    <ListItemText primary={menuItem.label} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
