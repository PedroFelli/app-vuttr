import React from 'react';

import { Container, HeaderSeacher, ToolContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>      
    <header>
      <h1>VUTTR</h1>
      <p className="subTitle">Very Useful Tools to Remember</p>   
      <HeaderSeacher>
        <nav>
          <div className="searchOptions">
            <input type="text" placeholder="search"/> 
            <input type="checkbox" name="" id=""/>
            <p>seach in tag only</p>
          </div>
          <button>add</button>

          </nav>
      </HeaderSeacher>
      
      <ToolContainer>
        <div>
          <div className="headerContainer">
            <a href=""><span>json-server</span></a>
            <button className="remove">
              remove
            </button>
            </div>
            <div className="bodyContainer">
              <p>Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.</p>
              <div className="bodyTags">
                <a href=""><span className="hastag">#api</span></a>
                 <a href=""><span className="hastag">#json</span></a>
                 <a href=""><span className="hastag">#schema</span></a>
                 <a href=""><span className="hastag">#node</span></a>
              </div>
            </div>
        </div>
      </ToolContainer>

      <ToolContainer>
        <div>
          <div className="headerContainer">
            <a href=""><span>json-server</span></a>
            <button className="remove">
              remove
            </button>
            </div>
            <div className="bodyContainer">
              <p>Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.</p>
              <div className="bodyTags">
                <a href=""><span className="hastag">#api</span></a>
                 <a href=""><span className="hastag">#json</span></a>
                 <a href=""><span className="hastag">#schema</span></a>
                 <a href=""><span className="hastag">#node</span></a>
              </div>
            </div>
        </div>
      </ToolContainer>

      <ToolContainer>
        <div>
          <div className="headerContainer">
            <a href=""><span>json-server</span></a>
            <button className="remove">
              remove
            </button>
            </div>
            <div className="bodyContainer">
              <p>Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.</p>
              <div className="bodyTags">
                <a href=""><span className="hastag">#api</span></a>
                 <a href=""><span className="hastag">#json</span></a>
                 <a href=""><span className="hastag">#schema</span></a>
                 <a href=""><span className="hastag">#node</span></a>
              </div>
            </div>
        </div>
      </ToolContainer>

    </header>
    </Container>
  );
}

export default Home;