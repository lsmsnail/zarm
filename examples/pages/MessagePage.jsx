import React, { Component } from 'react';
import Header from '../components/Header';
import { Panel, Cell, Message, Icon } from '../../components';
import '../styles/pages/MessagePage';

class Page extends Component {

  render() {
    return (
      <div className="message-page">
        <Header title="消息 Message" />
        <main>
          <Panel>
            <Panel.Header>
              <Panel.Title>基本</Panel.Title>
            </Panel.Header>
            <Panel.Body>
              <Message>primary</Message>

              <Message theme="info">
                <Icon type="info-round" className="icon" />
                <span>info</span>
              </Message>

              <Message theme="success">
                <Icon type="right-round" className="icon" />
                <span>success</span>
              </Message>

              <Message theme="warning">
                <Icon type="info-round" className="icon" />
                <span>warning</span>
              </Message>

              <Message theme="error">
                <Icon type="wrong-round" className="icon" />
                <span>error</span>
              </Message>

            </Panel.Body>
          </Panel>
        </main>
      </div>
    );
  }
}

export default Page;
