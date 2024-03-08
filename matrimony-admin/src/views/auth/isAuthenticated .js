import Cookies from 'js-cookie';

const isAuthenticated = () => {
  // Retrieve the JWT token from the cookie
  const authToken = Cookies.get('authToken');
  // console.log("///=="+authToken+"/////");
  // Check if the token exists
  if (authToken) {
    // Decode the token (assuming you have a function to decode JWT)
        
        // Retrieve the access token from the cookie
        const authToken = Cookies.get('authToken');
        // console.log("///=="+authToken+"/////");
        
        // Check if the token exists
        if (authToken) {
          // console.log('User is authenticated');
          return true;
        } else {
          // console.log('Token is missing');
          return false;
        }
  }

  return false; // User is not authenticated
};



export default isAuthenticated;
