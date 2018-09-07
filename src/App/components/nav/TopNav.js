import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const title = "Dynamic Data Visualization";
const ToolbarContainer = styled(Toolbar)`
  display: flex;
`;
const TypograhpyItem = styled(Typography)`
  flex: 1;
  text-align: left;
`;

const TopNav = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar>
        <ToolbarContainer>
          <TypograhpyItem variant="title" color="inherit">
            {title}
          </TypograhpyItem>
        </ToolbarContainer>
      </AppBar>
      {/* Shift down the page's content flow by the toolbar's size to make uo
          for the fixed position of the AppBar.  */}
      <div className={classes.toolbar} />
    </div>
  );
}

// Get the toolbar's size informaton
const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

export default withStyles(styles)(TopNav);
