import React from "react";
import { Container, Row,} from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import './Dashboard.css';

const employeeDashboard = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <div id="layout">
     <div className="cardlayout">
      <div className="cardcontent">
        <a className="title" id="card1" href="/employee-book-appointment"><div>
          Book Appointment
        </div></a>
        <a className="title" id="card2" href="/viewTests"><div>
        View Test Details
        </div></a>
        <a className="title" id="card3" href="/view-medical-reports"><div>
        Download Reports
        </div></a>
      </div>
     </div>
    </div>
  </Container>
);

export default employeeDashboard;
