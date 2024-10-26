import React, { useEffect, useRef } from "react";
import { mount } from "todoApp/todoIndex";

function Todo() {
    
  const remoteRef = useRef(null);
  useEffect(() => {
    mount(remoteRef.current);
  }, []);

  return <div ref={remoteRef}></div>;
}

export default Todo;
