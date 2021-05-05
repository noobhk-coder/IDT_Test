import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  appbar: {
    background: theme.palette.black
  },
  box:{
    width:'100%'
  },
  card:{
    height:theme.spacing(15),
    // width:theme.spacing(40),
    borderRadius:theme.spacing(2),
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    '&:hover': {
      background:'#dfe6e9',
      color:theme.palette.white
    }
  },
  name:{
    fontSize:theme.spacing(2.5),
    color:theme.palette.card.black,
    textTransform:'capitalize',
    textDecoration:'none'
  },
  search:{
    marginTop:theme.spacing(2),
    color:theme.palette.card.black,
    
  },
  btn:{
    marginLeft:theme.spacing(1),
    marginRight:theme.spacing(1),
    color:theme.palette.white,
    background:theme.palette.card.black,
    marginTop:theme.spacing(1),
    textTransform:'capitalize',
  },
  subheading:{
    marginBottom:theme.spacing(2),
    fontWeight:'bold',
    fontSize:theme.spacing(2.2),
    color:theme.palette.card.black
  },
  ingredBox:{
    marginTop:theme.spacing(2),
    height:theme.spacing(10),
    border:`1px solid ${theme.palette.card.black}`
  },
  para:{
    marginTop:theme.spacing(3),

    color:theme.palette.card.black
  },
  textField:{
    marginTop:theme.spacing(1),
    padding:theme.spacing(0)
  },
  input:{
    fontSize:theme.spacing(2),

'&::placeholder':{
  fontSize:theme.spacing(2),
  
}
  }
}))