import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 860px;
  margin: 100px auto;

  .subTitle{
    margin-top: 10px;
  }

`;

export const HeaderSeacher = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  margin: 50px auto;
  

  input:first-child{
    margin-right: 10px;
    width: 300px;
    height: 50px;
    padding-left: 14px;

    background: #F5F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;
  }

  nav{
    display: flex;
    justify-content: space-between;
    width: 860px;

    button {
      margin-left: 10px;
      top: 103px;
      left: 916px;
      width: 100px;
      height: 50px;
      background: #0DCB7D 0% 0% no-repeat padding-box;
      
      color: #FFFFFF;
      border-radius: 5px;
      opacity: 1;
      border: none;
    }
  }

  .searchOptions {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-right: auto;
  }
`;


export const ToolContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #0000000D;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  opacity: 1;

  margin-bottom: 20px;

  p{
    margin-bottom:20px;
  }

  button {
    border: none;
    background: #FFFFFF;
  }

  .headerContainer{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px
  }
  
  .hastag{
    margin-right: 10px;
  }
`;
