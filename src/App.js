import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import LoginForm from "./Login";
import { useEffect } from "react";
const App = () => {
  return (
    <Provider store={store}>
      <LoginForm></LoginForm>
    </Provider>
  );
};

export default App;
