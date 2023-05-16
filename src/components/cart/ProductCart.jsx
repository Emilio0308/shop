import { useDispatch } from "react-redux";
import {
  deleteProductCart,
  updateCartProduct,
} from "../../store/slices/cart.slice";
import Swal from "sweetalert2";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    const comfirmate = Swal.mixin({
        toast:true,
        iconColor: "red",
        showConfirmButton: true,
        confirmButtonColor: "green",
        showDenyButton: true,
        denyButtonColor: "red",
      });

      comfirmate.fire({
        title: "Are you sure to Delete this product",
        icon: "warning",
      }).then((res) => { if (res.value) {
        dispatch(deleteProductCart(product.id))
      }});
  };
  const hanldeClickPlusCartProduct = () => {
    const newQuantity = product.quantity + 1;
    dispatch(updateCartProduct(product.id, { quantity: newQuantity }));
  };
  const hanldeClickLessCartProduct = () => {
    const newQuantity = product.quantity - 1;
    if (newQuantity > 0) {
      dispatch(updateCartProduct(product.id, { quantity: newQuantity }));
    } else {
      const comfirmate = Swal.mixin({
        toast:true,
        iconColor: "red",
        showConfirmButton: true,
        confirmButtonColor: "green",
        showDenyButton: true,
        denyButtonColor: "red",
      });

      comfirmate.fire({
        title: "Are you sure to Delete this product",
        icon: "warning",
      }).then((res) => { if (res.value) {
        dispatch(deleteProductCart(product.id))
      }});
    }
  };

  return (
    <article className="border-[1px] border-gray-400 shadow-md shadow-gray-900/20">
      <section className="grid grid-cols-[auto,_1fr,_auto] grid-rows-2 gap-[1px] bg-gray-400">
        <div className="h-full row-span-2 bg-white relative group flex justify-center items-center">
          <img
            className="h-[90px] aspect-square object-contain group-hover:opacity-0"
            src={product.product.images[0].url}
            alt=""
          />
          <img
            className="h-[90px] aspect-square object-contain group-hover:opacity-100 opacity-0 absolute top-0"
            src={product.product.images[2].url}
            alt=""
          />
        </div>
        <h4 className="flex justify-center items-center text-sm bg-white">
          {product.product.title}
        </h4>
        <i
          onClick={handleClickDelete}
          className="bx bxs-trash w-[30px] hover:text-red-500 bg-white text-center cursor-pointer row-span-2 flex justify-center items-center"
        ></i>
        <div className="flex justify-center items-center bg-white">
          <button
            onClick={hanldeClickLessCartProduct}
            className="border-[1px] p-2 hover:bg-red-500 hover:text-white h-[35px]"
          >
            -
          </button>
          <span className="h-[35px] border-[1px] border-gray-300 aspect-square flex justify-center items-center">
            {product.quantity}
          </span>
          <button
            onClick={hanldeClickPlusCartProduct}
            className="border-[1px] p-2 hover:bg-red-500 hover:text-white h-[35px]"
          >
            +
          </button>
        </div>
      </section>
    </article>
  );
};

export default ProductCart;
