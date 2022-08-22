import { Col } from "react-bootstrap";
import "../../utils/css/individuals/Logout.css";
import { FcGoogle } from "react-icons/fc";
const Logout = () => {
  return (
    <>
      <section>
        <Col className="logout-bg w-50"></Col>
        <Col className="w-50">
          <div>
            <h3>Login as An Individual</h3>
          </div>
          <div>
            <button>
              <FcGoogle size={30} />
              <span>Continue with Google</span>
            </button>
          </div>
          <div>
            <span>------------- or Sign up with Email ------------- </span>
          </div>
          <div>
            <form>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value="username"
                placeholder="Sarah Obasi"
              />
              <label>Username</label>
              <input
                type="text"
                name="username"
                value="username"
                placeholder="Sarah Obasi"
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                value="email"
                placeholder="sarahrichie08@gmail.com"
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value="phonenumber"
                placeholder="08063323914"
              />
            </form>
          </div>
        </Col>
      </section>
    </>
  );
};

export default Logout;
