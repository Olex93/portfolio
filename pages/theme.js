import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  overrides:{
    MuiPaper: {
      root:{
        backgroundColor: "red"
      }
    },
  }
});

export default theme


