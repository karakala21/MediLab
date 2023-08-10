import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import EmployeeInput from "../../components/add-new-post/employeeinput";

const Addemployee = () => (
  <Container fluid className="main-content-container " >
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Employee"className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12 " md="12">
            <EmployeeInput/>
      </Col>
    </Row>
  </Container>
);

export default Addemployee;
