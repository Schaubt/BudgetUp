import Register  from '../components/registration-component.js'
import NavBar from '../components/navBar.js';
function Registeration() {
    return (
        <>
      <div className="document">
      <div claaName="navbar"><NavBar /></div>

        <div className="content">
        <Register />
        </div>
      </div>
    </>
    );
}
export default Registeration;