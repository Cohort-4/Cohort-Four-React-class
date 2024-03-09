import Card from "../card/Card";

const cardImage =
  "https://cdn.pixabay.com/photo/2024/02/29/02/06/alone-8603184_640.png";
const cardTitle = "My card Title";
const cardDesc =
  "some description some description some description some description some description";

const Products = () => {
  return (
    <div>
      <Card cardImage={cardImage} cardTitle={cardTitle} cardDesc={cardDesc} />
    </div>
  );
};
export default Products;
