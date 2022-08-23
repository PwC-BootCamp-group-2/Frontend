import homeSpace from "../../../assets/img/home-space.svg";
import team1 from "../../../assets/img/team-1.png";
const Desk = () => {
  return (
    <section className="grey-bg">
      <div className="container">
        <div className="row  pb-4 justify-content-md-between">
          <div className="col-lg-7 top">
            <img src={homeSpace} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-5 pt-10">
            <h4>Book any space at your own convenience</h4>
            <p>
              The ultimate workspace experience, with ultimate flexibility.
              Access more than 50 coworking spaces across 20 cities, with a
              single membership.
            </p>
            <a className="btn btn-primary" href="how-it-works.html">
              How it works
              <i className="fas fa-chevron-right pl-2" />
            </a>
          </div>
        </div>
        <hr />
        <div className="row  py-4 justify-content-md-between">
          <div className="col-lg-5 pt-6 pr-6">
            <h4>Bring your team on board!</h4>
            <p>
              The ultimate workspace experience, with ultimate flexibility.
              Access more than 50 spaces across 20 cities, with a single
              membership..
            </p>
            <a className="btn btn-primary" href="/">
              Get Started
              <i className="fas fa-chevron-right pl-2" />
            </a>
          </div>
          <div className="col-lg-7 team">
            <img src={team1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desk;
