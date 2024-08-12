import { useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="flex justify-center items-center h-screen">
        <div>
          <img
            className="w-80 md:w-96 lg:w-full"
            src="https://i.ibb.co/H4jfzns/404.png"
            alt="page not found"
          />
          <button
            className="btn btn-primary mt-2 flex mx-auto"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
