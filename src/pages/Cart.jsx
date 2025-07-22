import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, removeItem } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  return (
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((data, i) => {
            return (
              //접근할수있게 key값을 넣어주자
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.count}</td>
                <td>
                  <button onClick={()=>dispatch(addCount(i))}>+</button>
                  <button>-</button>
                </td>
                <td><button onClick={()=>dispatch(removeItem(i))}>x</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default Cart