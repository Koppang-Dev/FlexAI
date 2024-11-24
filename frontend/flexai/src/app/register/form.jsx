"use client";

import React from "react";

export const RegisterForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register!");
  };
  return (
    <form>
      <input />
      <input />
      <button>Register</button>
    </form>
  );
};
