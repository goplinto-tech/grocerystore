import { Input, Button } from '@components/inputs/index';
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

function wallet(walletdata) {
  console.log(walletdata.walletdata)
  const [wallet, setwallet] = useState()
  return (
    <div className="w-full   mt-4  md:mt-0">
      <div className="my-2  bg-white  w-full flex justify-between">
        <div className="lg:pl-4 w-full flex ">
          <div className="  w-full mx-4 md:mx-2 my-2 ">
            <p className="text-left font-bold text-lg traxt-dark ">Wallet Balance</p>
            <p className="text-left text-xl my-2 font-extrabold text-green-600 ">₹ {+walletdata.walletdata}</p>
          </div>
          <div className="w-40  rounded flex items-center " >
            <svg width="47" height="40" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_219_1067)">
                <path d="M40.2086 9.37507C40.3726 9.37507 40.5299 9.30922 40.6459 9.19201C40.7619 9.0748 40.827 8.91583 40.827 8.75007V6.66882C40.8264 6.12599 40.6127 5.60558 40.2329 5.22175C39.8531 4.83791 39.3382 4.62198 38.8011 4.62132H35.4777L34.7195 2.36007C34.668 2.20629 34.5593 2.07881 34.4164 2.00462C34.2735 1.93043 34.1076 1.91535 33.9539 1.96257L15.9542 7.49257C15.8052 7.5475 15.6827 7.65807 15.612 7.80151C15.5412 7.94495 15.5276 8.11035 15.5739 8.26365C15.6201 8.41694 15.7228 8.54647 15.8607 8.62557C15.9987 8.70466 16.1614 8.7273 16.3153 8.68882L33.7412 3.33382L35.4023 8.29007C35.4549 8.44704 35.5671 8.57645 35.7142 8.64982C35.8612 8.7232 36.0311 8.73453 36.1864 8.68132C36.3417 8.62811 36.4698 8.51472 36.5424 8.3661C36.615 8.21747 36.6262 8.04579 36.5735 7.88882L35.897 5.87007H38.8023C39.2377 5.87007 39.5914 6.22757 39.5914 6.66757V8.75007C39.5902 9.09507 39.8673 9.37507 40.2086 9.37507Z" fill="#44ADF4" />
                <path d="M45.1447 18.75C44.9807 18.75 44.8234 18.8159 44.7074 18.9331C44.5915 19.0503 44.5263 19.2092 44.5263 19.375C44.5263 19.5408 44.5915 19.6997 44.7074 19.8169C44.8234 19.9342 44.9807 20 45.1447 20C45.5789 20 45.7632 20.1863 45.7632 20.625V28.125C45.7632 28.5638 45.5789 28.75 45.1447 28.75H35.25C34.8159 28.75 34.6316 28.5638 34.6316 28.125V21.875C34.6316 21.4363 34.8159 21.25 35.25 21.25H42.6711C42.8351 21.25 42.9924 21.1842 43.1083 21.0669C43.2243 20.9497 43.2895 20.7908 43.2895 20.625V13.125C43.2895 11.9863 42.561 11.25 41.4342 11.25H3.71053C2.1855 11.25 1.23684 10.2913 1.23684 8.75001C1.23684 7.20876 2.1855 6.25001 3.71053 6.25001H9.98874L6.24605 7.49751C6.16613 7.5208 6.09168 7.56015 6.02715 7.6132C5.96262 7.66625 5.90935 7.73191 5.87052 7.80625C5.83168 7.8806 5.80809 7.96209 5.80115 8.04586C5.7942 8.12964 5.80405 8.21396 5.83011 8.2938C5.85616 8.37363 5.89788 8.44734 5.95278 8.5105C6.00767 8.57366 6.07461 8.62498 6.14959 8.66138C6.22456 8.69779 6.30604 8.71854 6.38913 8.72238C6.47222 8.72622 6.55523 8.71309 6.63318 8.68376L29.0435 1.21751C29.1207 1.19173 29.1921 1.15086 29.2536 1.09721C29.3151 1.04356 29.3656 0.978189 29.4021 0.904831C29.4386 0.831472 29.4605 0.751562 29.4664 0.669662C29.4724 0.587763 29.4623 0.505478 29.4368 0.427505C29.4113 0.349533 29.3709 0.2774 29.3178 0.215226C29.2647 0.153051 29.2 0.102052 29.1275 0.0651412C29.0549 0.0282299 28.9758 0.00612902 28.8948 0.000100435C28.8137 -0.00592815 28.7323 0.00423362 28.6552 0.0300055L13.6894 5.01751C13.6609 5.01251 13.6349 5.00001 13.6053 5.00001H3.71053C1.49163 5.00001 0 6.50751 0 8.75001V36.25C0 38.4925 1.49163 40 3.71053 40H41.4342C42.561 40 43.2895 39.2638 43.2895 38.125V31.875C43.2895 31.7092 43.2243 31.5503 43.1083 31.4331C42.9924 31.3159 42.8351 31.25 42.6711 31.25C42.507 31.25 42.3497 31.3159 42.2338 31.4331C42.1178 31.5503 42.0526 31.7092 42.0526 31.875V38.125C42.0526 38.5638 41.8683 38.75 41.4342 38.75H3.71053C2.1855 38.75 1.23684 37.7913 1.23684 36.25V11.64C1.87134 12.1813 2.71116 12.5 3.71053 12.5H41.4342C41.8683 12.5 42.0526 12.6863 42.0526 13.125V20H35.25C34.1232 20 33.3947 20.7363 33.3947 21.875V28.125C33.3947 29.2638 34.1232 30 35.25 30H45.1447C46.2715 30 47 29.2638 47 28.125V20.625C47 19.4863 46.2715 18.75 45.1447 18.75Z" fill="#44ADF4" />
                <path d="M39.5786 26.25C40.2617 26.25 40.8155 25.6904 40.8155 25C40.8155 24.3096 40.2617 23.75 39.5786 23.75C38.8956 23.75 38.3418 24.3096 38.3418 25C38.3418 25.6904 38.8956 26.25 39.5786 26.25Z" fill="#44ADF4" />
              </g>
              <defs>
                <clipPath id="clip0_219_1067">
                  <rect width="47" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-4  bg-white    w-full ">
        <div className=' w-full md:mx-2 md:m-4 mt-4'>
          <p className="text-left font-bold text-lg traxt-dark  px-4  pt-4 ">Add Money</p>
          <div className="mt-4  w-3/4 bg-white  ">
            <div className="px-4  md:px-0 lg:pl-4    md:w-full pb-5  flex ">
              <div className=" w-3/4 md:w-[360px]  rounded " >
                <Input type="number"
                  className="   bg-transparent "
                  placeholder="Add Money"
                  value={wallet}
                  onChange={(e) => { setwallet(e.target.value) }}
                />
              </div>
              <div className="  md:w-full ml-4 md:ml-6 flex  flex-end   ">
                <Button
                  className="py-2 px-6  white-color rounded btn-bg text-center"
                // onClick={initiatePayment}
                >
                  <span className=" inline">ADD</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default wallet
