/* eslint-disable react/prop-types */
import { getBooks } from "../../../components/uilitis/Index";
import "../PageToRead/PageToRead.css";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PageToRead = () => {
  const books = getBooks();

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
    <div className="main_bar_chart_outer_container">
      <div className="main_bar_chart_inner_container">
        <BarChart
          width={800}
          height={400}
          data={books}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {books.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 6]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PageToRead;
