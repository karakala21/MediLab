import React from "react";
import { Container, Row,} from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import './Dashboard.css';
import { Link } from 'react-router-dom';
import ViewTests from "./ViewTests";

const employeeDashboard = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <div id="layout" style={{marginLeft:"200px"}}>
     <div className="cardlayout">
      <div className="cardcontent">
        <a className="title" id="card1" href="/employee-book-appointment"><div>
          Book Appointment
        </div></a>
        
        <Link className="title" id="card2" to="/ViewTests"><div>
        View Test Details
          </div></Link>
      </div>
     </div>
    </div>
  </Container>
);

export default employeeDashboard;
