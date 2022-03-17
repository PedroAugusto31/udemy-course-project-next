import P from "prop-types";
import { mapData } from "../api/map-data";
import { Home } from "../templates/Home";

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data;
  try {
    const rawData = require("../api/dados.json"); //await fetch("https://jsonplaceholder.typicode.com/postsrg");
    data = mapData(rawData); //rawData.json();
    //const data = mapData(json);
  } catch (e) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
