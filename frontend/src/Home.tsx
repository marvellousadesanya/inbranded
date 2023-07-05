import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Sales Page</h1>
      <Link to="/sales">
        <button>Sales Page</button>
      </Link>
    </div>
  );
};

export default Home;
