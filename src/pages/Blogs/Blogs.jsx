import ShortBanner from "../../components/ShortBanner/ShortBanner";
import Container from "../../components/ui/Container";

const Blogs = () => {
  return (
    <div>
      <ShortBanner title={"Blogs Page"} />
      <Container>
        <div className="flex justify-center items-center h-[50vh]">
          <p className="font-bold">Content coming soon</p>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;