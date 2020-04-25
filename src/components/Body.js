import React from "react";

// import { Container } from './styles';

export default function Body({ icon, title, children }) {
  return (
    <>
      <header className="page-title">
        <h3 className="page-name">
          {icon}
          <strong className="nametext"> {title}</strong>
        </h3>
      </header>

      {children}
    </>
  );
}
