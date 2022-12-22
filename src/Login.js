import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Movies from "./Movies";

const LoginForm = () => {
  const { email, password } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [showMovies, setShowMovies] = useState(false);

  if (showMovies)
    return (
      <>
        <button onClick={() => setShowMovies(false)}>Go back</button>
        <Movies />
      </>
    );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setShowMovies(true);
      }}
    >
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) =>
            dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
          }
        />
      </label>
      <label>
        Password:
        <input
          minLength={8}
          maxLength={15}
          type="password"
          value={password}
          onChange={(e) =>
            dispatch({ type: "UPDATE_PASSWORD", payload: e.target.value })
          }
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};
export default LoginForm;
