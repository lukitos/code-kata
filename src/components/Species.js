import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as speciesAction from '../actions/speciesAction';
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

class Species extends Component {
  componentDidMount() {
    this.props.speciesAction.getFish(this.props.stype);
  }

  render() {
    console.log('in Species >>> props', this.props);
    const { classes } = this.props;
    return (
      <div style={{ padding: 20 }}>
        <Typography type="title" align="center">{this.props.stitle}</Typography>
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
              {this.props.species.map((n, i) => {
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

}

Species.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  return {
    species: state.species
  }
}

function mapDispatchToProps(dispatch) {
  return {
    speciesAction: bindActionCreators(speciesAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Species));
