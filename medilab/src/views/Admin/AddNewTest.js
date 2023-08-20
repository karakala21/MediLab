import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import TextInput from "../../components/add-new-post/TestsInput";

const AddNewTest = () => (
  <Container fluid className="main-content-container " >
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Test"className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12 " md="12">
          <TextInput/>
      </Col>
    </Row>
  </Container>
);

export default AddNewTest;
