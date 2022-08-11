import { React } from "react";
import { wrapper } from "../store/store";
import { increment } from "../store/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

const nxtpage = () => {
  //   const router = useRouter();
  //   useEffect(() => {
  //     router.push("/");
  //   }, []);

  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <button onClick={() => dispatch(increment())}>Plus</button>
      <p>{count}</p>

      <Link href="/">prev page pe jao</Link>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }) => {
      store.dispatch(increment());
    }
);

export default nxtpage;
