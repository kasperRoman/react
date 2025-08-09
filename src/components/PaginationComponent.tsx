import { FC } from "react";
import { useSearchParams } from "react-router-dom";
type PaginationProps ={
  flag:boolean;
}

const PaginationComponent:FC<PaginationProps> = ({flag}) => {
  const [query, setQuery] = useSearchParams({ page: "1" });

  const OnclickPrevHandler = () => {
    const page = query.get("page");
    if (page && +page > 1) {
      let currentPage = +page;
      currentPage--;
      setQuery({ page: currentPage.toString() });
    }
  };
  const OnclickNextHandler = () => {
    const page = query.get("page");
    if (page) {
      let currentPage = +page;
      currentPage++;
      setQuery({ page: currentPage.toString() });
    }
  };
  return (
    <div>
      <button onClick={OnclickPrevHandler}>prev</button>
      <button onClick={OnclickNextHandler} disabled={flag}>next</button>
    </div>
  );
};

export default PaginationComponent;
