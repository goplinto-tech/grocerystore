import Link from "@components/link";
import { toast } from 'react-toastify';
import { addToCart, removeFromCart, deleteItemFromCart } from "@redux/cart/cart-actions";
import { QuantityID } from "@components/inputs";
import { AiFillHeart } from 'react-icons/ai'
import Rating from "@components/rating-stars/rating";
import { connect } from "react-redux";
import { Button } from '@components/inputs';
import { removeWishlistStart } from "@redux/wishlist/wishlist-action";
function Wishlist({ data, removeWishlistStart, wishListedItem, setWishListedItem }) {
    const removeFromWishList = (wishlistid) => {

        const payload = {
            wishlistId: wishlistid,
            wishListedItem: wishListedItem,
            setWishListedItem: setWishListedItem
        }
        removeWishlistStart(payload)

    }
    return (
        <div className="w-100 block  ">
            <div className=" md:grid md:grid-cols-12 md:gap-4 mb-6 md:mt-4 lg:flex justify-between">
                <div className=" bg-white md:col-span-3 flex sm:space-x-4">
                    <Link href={`/product/${data?.item_id || '1234'}`}>

                        <div className=" m-2 md:m-0 w-full flex md:w-max md:mr-2 ">
                            <img className="md:block w-4 h-4" src="/img/square.png" />
                            <img className=" my-6 md:my-0 mx-5 md:mx-0  md:ml-4 w-[80px] h-[80px] md:w-[100px] md:h-[100px] border-[2px] md:border-[0px] border-[#E7E7E7] md:border-[transparent]  object-cover rounded-md" src={data?.primary_img || '/img/default.png'} alt="product" />
                            {/* <div className=" md:hidden my-0 m-2 md:m-0 bg-red-400">
                                <AiFillHeart size={20} color="#F35252" />
                            </div> */}
                        </div>

                    </Link>
                    <div className=" md:hidden mt-1 m-2 md:m-0">
                        <AiFillHeart onClick={() => removeFromWishList(data.entry_id)} size={20} color="#F35252" />
                    </div>
                </div>
                <div className=" hidden lg:block w-8/12">
                    <div>
                        <Link href={`/product/${data?.item_id || '1234'}`}>

                            <h3 className=" lg:text-base text-sm capitalize cart-item-title cursor-pointer">{data.item_name}</h3>
                        </Link>
                    </div>
                    <div className="flex justify-between items-center mt-10">

                        <div className="space-x-8">
                            <span className="font-bold black-color-75 text-base sm:text-xl inline-block sm:mr-2">₹ {data?.sale_price || '1234'}</span>
                            {
                                data?.sale_price != data?.price &&
                                <span className="text-base">(MRP<span className=" text-base sm:text-base black-color-50 line-through ml-2 inline-block">₹{data?.price}</span>)</span>
                            }
                        </div>

                        <div>
                            <Button className={`btn-color btn-bg max-h-min text-base font-medium rounded py-2 px-3`} onClick={() => addToCart(productDataForCart)} >ADD TO CART</Button>
                            {/* <div className=" md:flex  flex-col sm:flex-row justify-between w-full h-full items-end sm:items-center ">
                                    <Button className={`btn-color w-full  btn-bg max-h-min text-base font-medium rounded py-2  px-3 `} onClick={() => addToCart(productDataForCart)} >ADD TO CART</Button>
                                </div> */}
                        </div>
                    </div>

                </div>
                <div>
                    <div className=" my-0 mx-1 md:ml-20 hidden lg:block ">
                        <AiFillHeart onClick={() => removeFromWishList(data.entry_id)} size={24} color="#F35252" />
                    </div>
                </div>
                <div className="md:hidden col-span-8 lg:col-span-9 md:col-span-9 sm:col-span-9">
                    <div className="">
                        <div className="flex flex-col justify-between ">

                            <div className="flex justify-between items-center pr-1">
                                <span className="font-bold black-color-75 my-2  text-base sm:text-xl inline-block sm:mr-2">₹ {data && parseInt(data?.sale_price) || '1234'}</span>
                                {
                                    data?.sale_price != data?.price ?
                                        <span className=" text-base sm:text-base black-color-50 line-through ml-4 lg:ml-0 xl:ml-4 inline-block">₹{data?.price}</span>
                                        :
                                        <span className=" text-sm sm:text-base black-color-50 line-through ml-4 lg:ml-0 xl:ml-4 inline-block">MRP (₹{data?.price || '4567'})</span>
                                }
                            </div>
                        </div>
                        <Link href={`/product/${data?.item_id || '1234'}`}>
                            <a className="block">
                                <div className=" h-[44px] ">
                                    <h3 className="  lg:text-base text-sm capitalize md:cart-item-title">{data?.item_name?.toLowerCase().slice(0, 38) + " ..." || 'INDIA GATE super basmati rice | 5 kg pack | Aged Rice 2 years-old'}</h3>
                                </div>
                            </a>
                        </Link>
                        <div className=" w-full md:flex  my-2 flex-col sm:flex-row justify-between w-full h-full items-end sm:items-center ">
                            <div className="w-full">
                                {/* <QuantityID value={data?.quantity} pdp={true} disabledPlush={(() => {
                        if (data?.inventoryDetails) {
                            return data?.inventoryDetails?.max_order_quantity == data?.quantity && data?.inventoryDetails?.max_order_quantity > 0 || data?.inventoryDetails.inventory_quantity <= data?.quantity
                        }
                        return false
                    })()}
                        onPlush={() => addToCart(data)} onMinus={() => removeFromCart(data)} /> */}
                                <Button className={`btn-color w-full  btn-bg max-h-min text-base font-medium rounded py-3  `} style={{ backgroundColor: "#F58634" }} onClick={() => addToCart(productDataForCart)} >ADD TO CART</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                !!data?.inventoryDetails && <>
                    {
                        data?.inventoryDetails.min_order_quantity > 1 &&
                        <div className="">
                            <span className="text-sm red-color">*Minimum order quantity is {data?.inventoryDetails.min_order_quantity}.</span>
                        </div>
                    } {
                        data?.inventoryDetails.max_order_quantity == data?.quantity && data?.inventoryDetails.max_order_quantity > 0 || data?.inventoryDetails.inventory_quantity <= data?.quantity &&
                        <div className="">
                            <span className="text-sm success-color">*You reached to maximum order quantity.</span>
                        </div>
                    }
                </>
            }
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (item) => dispatch(removeFromCart(item)),
    removeWishlistStart: (data) => dispatch(removeWishlistStart(data))
})
export default connect(null, mapDispatchToProps)(Wishlist);

