import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { getStoredBook } from "../../utilites/localstorage";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/ui/Container";

const PagesToRead = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const books = useLoaderData();
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const readBookLS = getStoredBook();
    if (books.length > 0) {
      const booksLS = books.filter((item) => readBookLS.includes(item.bookId));
      setChart(booksLS);
    }
  }, [books]);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <Container>
      {chart.length ? (
        <div className="bg-[#13131308] p-1 sm:p-8 md:p-12 lg:p-20 rounded my-5 md:my-10">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={500}
              height={400}
              data={chart}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bookName" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="totalPages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chart?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-[80vh] flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5">
              Here are is nothing 🧒!!
            </h2>
            <p>
              If you read the book then the click
              <strong> read button</strong>
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default PagesToRead;
