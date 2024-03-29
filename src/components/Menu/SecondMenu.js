import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { BsList } from 'react-icons/bs';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Item from './Item';
import theme from '../../theme/theme.yaml';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  menuButton: {
    fontSize: '40px',
    color: theme.color.principals.darkerPurpleText
  },
  contactButton: {
    fontSize: '1rem',
    backgroundColor: theme.color.principals.darkPurple,
    color: theme.color.principals.white,
    padding: '10px 10px',
    margin: '0 15px',
    borderRadius: '0.3rem',
    fontWeight: '700'
  },
  '@media screen and (orientation: landscape)': {
    contactButton: {
      fontSize: '1.3rem',
      backgroundColor: theme.color.principals.darkPurple,
      color: theme.color.principals.white,
      padding: '10px 10px',
      margin: '0 21px',
      borderRadius: '0.3rem',
      fontWeight: '700'
    }
  },
  '.MuiPaper-rounded': {
    borderRadius: '2rem'
  },
  menu: {
    borderRadius: '1rem',
    '.MuiPaper-rounded': {
      borderRadius: '2rem'
    }
  },
  menuContainer: {
    flexWrap: 'nowrap'
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  '.MuiPopover-paper': {
    top: '85px !important'
  }
});

const SecondMenu = props => {
  const classes = useStyles();
  const { path, theme, screenWidth } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const items = [
    { to: '/', label: 'Home' },
    { to: '/plans/', label: 'Planes' },
    // { to: "/search/", label: "Search", icon: FaSearch },
    // ...pages,
    { to: '/professional/', label: 'Trabaja con nosotros' },
    { to: '/quienes-somos/', label: 'Quienes somos' },
    { to: '/%20specialties/', label: 'Especialidades' },
    { to: '/plans/', label: 'Comenzar' }
    // { to: '/professional/', label: 'Trabaja Con nosotros', icon: FaSearch },
  ];

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isLonger = item => {
    if (
      item.includes('Trabaja con nosotros') ||
      item.includes('Comenzar') ||
      item.includes('Quienes somos')
    )
      return 3;
    if (item.includes('Especialidades')) return 2;
    return 1;
  };

  return (
    <Box>
      {screenWidth > 1090 ? (
        <Grid container spacing={2} direction="row" className={classes.menuContainer}>
          {items.map((item, index) => {
            return (
              <Grid
                item
                key={item.label}
                lg={isLonger(item.label)}
                className={classes.itemContainer}
              >
                <Item item={item} icon={item.icon} theme={theme} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div>
          <a className={classes.contactButton} href={items[5].to}>
            {items[5].label}
          </a>
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
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.menu}
          >
            {items.map((item, index) => {
              if (item.to !== path) {
                return (
                  <Item
                    childRef={ref => (this.child = ref)}
                    item={item}
                    onClick={handleClose}
                    key={index.toString()}
                    icon={item.icon}
                    theme={theme}
                  />
                );
              } else {
                return <div key={index.toString()}></div>;
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
