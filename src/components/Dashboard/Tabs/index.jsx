import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "../Grid"
import List from "../List"
import {createTheme, ThemeProvider} from "@mui/material"
export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette:{
      primary:{
        main: "#3a80e9"
      }
    }
  })

  const style = {
    color: "white",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
  }

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>


        <TabPanel value="grid">
          <div className='flex justify-center items-center flex-wrap gap-1.5 my-1.5 mx-2'>
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />
            })}
          </div>
        </TabPanel>


        <TabPanel value="list">
          <table className='w-[80%] mx-auto sm:w-full md:w-[95%] lg:w-[90%] !important'>
            {coins.map((coin, i) => {
                return <List coin={coin} key={i} />
            })}
          </table>
        </TabPanel>

      </TabContext>
    </ThemeProvider>
  );
}
