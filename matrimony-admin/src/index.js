import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import PrivateRoute from './views/auth/privateroute'
// import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

ReactDOM.render(
	<ChakraProvider theme={theme}>
	  <React.StrictMode>
		<ThemeEditorProvider>
		  <Router> {/* Use BrowserRouter here */}
			<Switch>
			  <Route path="/admin" component={AdminLayout} />
			  <Route path="/" component={AuthLayout} />

			</Switch>
		  </Router>
		</ThemeEditorProvider>
	  </React.StrictMode>
	</ChakraProvider>,
	document.getElementById("root")
  );