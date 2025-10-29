import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
    const style = {
        color: 'white',
        textDecoration: 'none',
        margin: '0.5rem'
    }
  return (
   <AppBar position="static">
    <Toolbar>
        <Typography variant="h6" mr={'auto'} sx={{alignItems : 'center' , justifyContent : 'center'}}> LearnGo.</Typography>
            <Link style={style} to="/">Home</Link>
            <Link style={style} to="/login">Login</Link>
    </Toolbar>
   </AppBar>
  )
}

export default Header