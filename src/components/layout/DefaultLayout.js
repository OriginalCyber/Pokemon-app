import Sider from './Sider';
import Header from './Header';
import Footer from './Footer';
import Box from './Box';
import Grid from './Grid';
import HomePage from '../Content/HomePage'
import SearchPage from '../Content/SearchPage'
import { Route, Routes } from 'react-router-dom';


const DefaultLayout = () => {

  return <>
    <section className='app-section'>
      <div className='app-container'>
      <Header />
        <Grid columns={2}>
          <Box>
            <Sider />
          </Box>
          <Box>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="SearchPage" element={<SearchPage />} />
            </Routes>
          </Box>
        </Grid>
      <Footer />
      </div>
    </section>




  </>

}
export default DefaultLayout;