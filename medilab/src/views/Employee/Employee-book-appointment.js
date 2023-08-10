import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import AppintmentInput from "../../components/add-new-post/AppintmentInput";

const AddNewApp = () => (
  <Container fluid className="main-content-container " >
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Book Appoimtment"className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12 " md="12">
          <AppintmentInput/>
      </Col>
    </Row>
  </Container>
);

export default AddNewApp;
