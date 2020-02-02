import React, { useState, useEffect } from 'react';
import { fetchContactsList } from '../../api/contacts'
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap'
import classnames from 'classnames';

function Homepage(props) {
    const [activeTab, setActiveTab] = useState('1');
    const [contactsList, setContactList] = useState([])
    const [hoveredIndex, setHoveredIndex] = useState(-1)
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        const newContactList = fetchContactsList()
        setContactList(newContactList.body.contacts)
    }, [])

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Contact List
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Sent Messages
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        {contactsList.map((eachContact, index) => {
                            return <Col key={`contact-${index}`} sm="12">
                                <Row>
                                    {hoveredIndex === index ? <Col sm="3">
                                        <h5>{eachContact.phoneNumber}</h5>
                                    </Col> : null}
                                    <Col sm="8" onMouseEnter={(e) => setHoveredIndex(index)}>
                                        <h5>{`${eachContact.firstName} ${eachContact.lastName}`}</h5>
                                    </Col>
                                </Row>
                            </Col>
                        })}
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Col sm="12">
                        <h4>Tab 2</h4>
                    </Col>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Homepage