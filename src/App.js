import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled, { css } from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: 'center'
  }
}));

function App() {
  const classes = useStyles();
  let [shelfList, setShelfList] = useState(['Soda', 'Water', 'Bananas', 'Pickles', 'Soup', 'Beef', 'Chicken']);
  let [cartList, setCartList] = useState(['Fish']);

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid black;
    color: black;
    padding: 0.25em 1em;
    cursor: pointer;

    ${props => props.primary && css`
      background: white;
      color: black;
    `}
  `;
  
  function add2Cart(loc){
    let shelf_list = [...shelfList];
    let cart_list = [...cartList];
    cart_list.push(shelfList[loc]);
    setCartList(cart_list);
    shelf_list.splice(loc, 1);
    setShelfList(shelf_list);
  }

  function removeFromCart(loc){
    let shelf_list = [...shelfList];
    let cart_list = [...cartList];
    shelf_list.unshift(cart_list[loc]);
    setShelfList(shelf_list);
    cart_list.splice(loc, 1);
    setCartList(cart_list);
    
  }


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <h3 className={classes.title}>Shopping list</h3>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
          <h4 className={classes.title}>Shelf</h4>
          { shelfList.map((item, i) => {
              return <div>
                <Paper className={classes.paper}>
                  <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={8}>
                      {item}
                    </Grid>
                    <Grid item xs={4}>
                      <Button primary onClick={() => add2Cart(i)}>Add to cart</Button>
                    </Grid>
                  </Grid>
                </Paper>
                
              </div>
            }  
          )}
      </Grid>
      <Grid item xs={4}>
          <h4 className={classes.title}>Cart</h4>
          {  
            cartList.map((item, j) => {
              return <div>
                <Paper className={classes.paper}>
                  <Grid container className={classes.root} spacing={2}>
                      <Grid item xs={8}>
                        {item}
                      </Grid>
                      <Grid item xs={4}>
                        <Button primary onClick={() => removeFromCart(j)}>X Remove</Button>
                      </Grid>
                  </Grid>
                </Paper>
              </div>
            })
          }
      </Grid>
    </Grid>
  );
}

export default App;
