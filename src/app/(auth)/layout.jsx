// src/app/(auth)/layout.jsx
import React from 'react';
export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
