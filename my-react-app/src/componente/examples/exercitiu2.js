import Bottle from "../bottle";

const Exercitiul2 = () => {
  return (
    <div className="example">
      Exercitiul 2
      <div className="d-flex">
        <Bottle liquidColor="red" etiquette="Red" />
        <Bottle liquidColor="yellow" etiquette="Yellow" />
        <Bottle liquidColor="green" etiquette="Green" />
      </div>
    </div>
  );
};

export default Exercitiul2;