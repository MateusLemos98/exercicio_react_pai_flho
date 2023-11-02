import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const propParaFilho = 'Esta é uma prop do pai';

  return (
    <>
      <h2>Componente Pai</h2>
      <ChildComponent propRecebida={propParaFilho} />
    </>
  );
}

export default ParentComponent;