import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardHeader = styled.div`
   button {
    padding: 14px;
    background: #fff;
    color: #333;
    font-weight: bold;
    border: 0;
  }

  input {
    padding: 14px;
    border: 0;
    border-radius: 3px;
    margin-left: 5px;
    border: 1px solid #999;
    width: 300px;
  }
`;

export const Card = styled.div`
  margin-top: 40px;
  width: 600px;
  height: 700px;
  background: #FAF33E;
  border-radius: 4px;
  padding: 10px;
`;

export const CardContent = styled.main`
  margin-top: 10px;
  border-top: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    margin-top: 10px;

    li {
      font-size: 20px;
      border-bottom: 1px solid #999;
      margin: 0 10px;
    }
  }
`;

