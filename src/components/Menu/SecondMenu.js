import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { BsList } from 'react-icons/bs';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Item from './Item';

import { FaHome } from 'react-icons/fa/';
import { FaSearch } from 'react-icons/fa/';
import { FaEnvelope } from 'react-icons/fa/';
import { FaTag } from 'react-icons/fa/';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  menuButton: {
    width: '200px'
  }
});

const SecondMenu = props => {
  const classes = useStyles();
  const { path, theme, screenWidth } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const items = [
    { to: '/', label: 'Home', icon: FaHome },
    // { to: "/category/", label: "Blog", icon: FaTag },
    { to: '/plans/', label: 'Planes', icon: FaTag },
    // { to: "/search/", label: "Search", icon: FaSearch },
    // ...pages,
    { to: '/%20specialties/', label: 'Especialidades', icon: FaSearch },
    // { to: '/professional/', label: 'Trabaja Con nosotros', icon: FaSearch },
    { to: '/contact/', label: 'Contact', icon: FaEnvelope }
  ];

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');
    setAnchorEl(null);
  };

  return (
    <Box>
      {screenWidth > 767 ? (
        <Grid container spacing={2} direction="row">
          {items.map(item => {
            if (item.to !== path) {
              return (
                <Grid item lg={4}>
                  <Item item={item} key={item.label} icon={item.icon} theme={theme} />
                </Grid>
              );
            } else {
              return <div></div>;
            }
          })}
        </Grid>
      ) : (
        <div>
          <Button
            className={classes.menuButton}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <BsList />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {items.map(item => {
              if (item.to !== path) {
                return (
                  <Item
                    item={item}
                    onClick={handleClose}
                    key={item.label}
                    icon={item.icon}
                    theme={theme}
                  />
                );
              } else {
                return <div></div>;
              }
            })}
          </Menu>
        </div>
      )}
    </Box>
  );
};

SecondMenu.propTypes = {
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  screenWidth: PropTypes.number.isRequired
};

export default SecondMenu;
