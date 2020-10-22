import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Bar, Doughnut} from 'react-chartjs-2';

import Profile from '../../Components/Account/Profile'

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
};

const dataDoughnut = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Data', 356, 16.0, 49, 3.9),
    createData('Data1', 356, 16.0, 49, 3.9),
    createData('Data2', 356, 16.0, 49, 3.9),
    createData('Data3', 356, 16.0, 49, 3.9),
    createData('Data4', 356, 16.0, 49, 3.9),
    createData('Data5', 356, 16.0, 49, 3.9),
    createData('Data6', 356, 16.0, 49, 3.9),
    createData('Data7', 356, 16.0, 49, 3.9),
    createData('Data8', 356, 16.0, 49, 3.9),
    createData('Data9', 356, 16.0, 49, 3.9),
  ];
  
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function Dashboard(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Profile>
                        <div>
                            <h2>Bar Example (custom size)</h2>
                            <Bar
                                data={data}
                                width={100}
                                height={50}
                                options={{
                                maintainAspectRatio: false
                                }}
                            />
                        </div>
                    </Profile>
                </Grid>
                <Grid item xs={6}>
                    <Profile>
                        <Doughnut
                            data={dataDoughnut}
                            width={200}
                            height={211}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </Profile>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Anim pariatur</TableCell>
                                <TableCell align="right">Anim pariatur</TableCell>
                                <TableCell align="right">Anim pariatur</TableCell>
                                <TableCell align="right">Anim pariatur</TableCell>
                                <TableCell align="right">Anim pariatur</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}