import React from "react"

// icons
import {FaHeart} from "react-icons/fa"
import {StarFilled} from "@ant-design/icons"
import {LiaShoppingCartSolid} from "react-icons/lia"

const Card = () => {
    return (
        <>
            <div className="flex flex-col justify-between gap-[10px] select-none relative border border-gray-200 p-[10px] rounded-xl hover:shadow-xl transition duration-[.3s]">
                <div className="flex justify-center">
                    <img
                        src="https://dev.oner.ru//storage/products/dnBvS34mgllMPpfgtHzlQH2vyRRP0o-metaMzMwMDNkOGIzOGQyODYzZDA2NTc1YmZlZGNkNzJhODUuanBn-.jpg"
                        alt="name"
                        className="h-[125px] object-contain"
                    />

                    <FaHeart className="absolute text-[24px] right-[10px] top-[10px] cursor-pointer transition opacity-20" />
                </div>

                <p className="text-[14px]">Аккумулятор Varta</p>

                <div className="flex justify-start items-center gap-[3px] text-[12px] text-orange-400">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled className="!text-gray-400" />
                    <p className="text-gray-400">
                        ({Math.round(Math.random() * 100)})
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-0 text-[14px]">
                        <p className="text-[12px] opacity-50 line-through">
                            3 128 ₽
                        </p>
                        <p className="text-[16px] font-medium text-[#212121]">
                            2 200 ₽
                        </p>
                    </div>

                    <button className="hover:bg-[#6b59cc] hover:text-white border-2 text-[#6b59cc] border-[#6b59cc] transition-colors duration-[.2s] p-[10px] rounded-lg font-medium flex justify-center items-center gap-[10px] cursor-pointer active:scale-95">
                        <LiaShoppingCartSolid className="text-[20px]" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card
