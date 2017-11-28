import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const Main = (props) => {
  console.log('in Main >>> props', props);

  const { classes } = props;

  return (
    <div style={{ padding: 20 }}>
      <Typography type="title" align="center">All Species</Typography>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell numeric>Ranking</TableCell>
              <TableCell>Angler</TableCell>
              <TableCell numeric>Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.fish.map((n, i) => {
              return (
                <TableRow key={i}>
                  <TableCell numeric>{i+1}</TableCell>
                  <TableCell>{n.angler}</TableCell>
                  <TableCell numeric>{n.weight}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );

}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  return {
    fish: state.fish
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Main));
