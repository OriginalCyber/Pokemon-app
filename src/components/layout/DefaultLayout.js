
import Sider from '../layout/Sider';
import Header from './Header';
import Footer from '../layout/Footer';
function DefaultLayout(props) {

  return <>
    <section className='app-section'>
      <div className='app-container'>
        <Header />
          <div className='app-grid'>
            <div className='app-box'>
              <Sider />
            </div>
          <div className='app-box'>
              {props.children}
              
            </div>
          </div>
        <Footer />
      </div>
    </section>


  </>;

}
export default DefaultLayout;