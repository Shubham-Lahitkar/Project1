import React, { createContext, useState, useContext } from 'react';

// Create a context for alert
const AlertContext = createContext();

// AlertProvider component to provide alert functionality to its children
const AlertProvider = ({ children }) => {
  const [alertData, setAlertData] = useState(null);

  const showAlert = (statusCode, message, header) => {
    setAlertData({ statusCode, message, header });
  };

  const hideAlert = () => {
    w(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert, alertData }}>
      {children}
    </AlertContext.Provider>
  );
};

// useAlert hook to consume alert functionality
const useAlert = () => {
  return useContext(AlertContext);
};

// Example usage
const MyComponent = () => {
  const { showAlert, alertData } = useAlert();

  const handleClick = () => {
    showAlert(200, 'Success', 'This is a success message!');
  };

  return (
    <div>
      <button onClick={handleClick}>Show Alert</button>
      {alertData && (
        <div>
          <p>Status Code: {alertData.statusCode}</p>
          <p>Message: {alertData.message}</p>
          <p>Header: {alertData.header}</p>
          <button onClick={() => alertData.hideAlert()}>Hide Alert</button>
        </div>
      )}
    </div>
  );
};

// Usage
const App = () => {
  return (
    <AlertProvider>
      <MyComponent />
    </AlertProvider>
  );
};

export default App;
