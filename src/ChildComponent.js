import React from 'react';

function ChildComponent(props) {
  return (
    <>
      <h3>Componente Filho</h3>
      <p>Prop recebida do pai: {props.propRecebida}</p>
    </>
  );
}

export default ChildComponent;