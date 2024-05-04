import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";

function RestarauntById() {
  const { id } = useParams();
  const [restaraunt, setRestaraunt] = useState(null);

  useEffect(() => {
    fetch(`https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=20&rootCategoryId=/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaraunt(data));
  }, [id]);
  return (
    <Layout>
      {id}
      {restaraunt && <h1>{restaraunt.name}</h1>}
    </Layout>
  );
}

export default RestarauntById;
